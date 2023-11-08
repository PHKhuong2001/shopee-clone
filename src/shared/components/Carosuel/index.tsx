import { ArrowLeftBanner, ArrowRightBanner } from "@/shared/icon/home";
import { Col, Image, List, Row, Typography } from "antd";
import { useEffect, CSSProperties, useRef } from "react";
import { Link } from "react-router-dom";
import Slider, { Settings } from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import ItemCarosel from "./itemSlider";

interface CarosuelProps<T> {
  type: "image" | "slide" | "shopee-mall";
  dataSlide: T[];
  style?: CSSProperties;
  lengthDataList?: number;
  lenghtDataItem?: number;
}

export type DataSlideProps = {
  name?: string;
  path: string;
  image: string;
};

function Carosuel({
  dataSlide,
  type,
  style,
  lenghtDataItem,
  lengthDataList,
}: CarosuelProps<DataSlideProps>) {
  const sliderRef = useRef<Slider | null>(null);
  const currentslideRef = useRef(0);

  const settingsSliderProduct: Settings = {
    dots: false,
    infinite: false,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const settingsSliderBanner: Settings = {
    dots: true,
    appendDots: (dots) => {
      return (
        <div className="carosuel-dots">
          {Array.isArray(dots) &&
            dots.map((dot, index) => {
              return (
                <Typography.Text
                  key={index}
                  className={`dot ${
                    index === currentslideRef.current ? "dot-active" : ""
                  }`}
                ></Typography.Text>
              );
            })}
        </div>
      );
    },
    infinite: true,
    speed: 1000, // Tốc độ chuyển slide (milliseconds)
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3300, // Thời gian chờ trước khi chuyển slide (milliseconds)
    prevArrow: (
      <div
        className="carosuel-arrow-left"
        onClick={() => sliderRef.current?.slickPrev()}
      >
        <ArrowLeftBanner className={"left-icon"}></ArrowLeftBanner>
      </div>
    ),
    nextArrow: (
      <div
        className="carosuel-arrow-right"
        onClick={() => sliderRef.current?.slickNext()}
      >
        <ArrowRightBanner className={"right-icon"}></ArrowRightBanner>
      </div>
    ),
    beforeChange: (current, next) => {
      currentslideRef.current = next; // Cập nhật currentslideRef khi slider sắp thay đổi
    },
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (sliderRef.current) {
        const nextSlide =
          currentslideRef.current === dataSlide.length - 1
            ? 0
            : currentslideRef.current + 1;
        sliderRef.current.slickGoTo(nextSlide);
        currentslideRef.current = nextSlide;
      }
    }, 5000);

    return () => clearInterval(interval);
  }, [dataSlide]);

  const handlerSeperateData = () => {
    if (
      typeof lenghtDataItem === "number" &&
      typeof lengthDataList === "number" &&
      lenghtDataItem > 0 &&
      lengthDataList > 0
    ) {
      const totalItems = dataSlide.length;
      const itemsPerList = Math.ceil(totalItems / lengthDataList);
      const lists = [];

      for (let i = 0; i < lengthDataList; i++) {
        const startIndex = i * itemsPerList;
        const endIndex = startIndex + itemsPerList;
        lists.push(dataSlide.slice(startIndex, endIndex));
      }

      return lists;
    } else {
      // Trả về giá trị mặc định hoặc thông báo lỗi tùy theo trường hợp
      return [];
    }
  };

  if (type === "slide" || type === "shopee-mall") {
    return (
      <Row className="container-slider" style={{ ...style }}>
        <Slider {...settingsSliderProduct} className="slider">
          {handlerSeperateData()?.map((item, index) => {
            return (
              <Col className="product product-custom" key={index}>
                <List
                  grid={{ gutter: 16, column: type === "shopee-mall" ? 6 : 10 }}
                  dataSource={item}
                  renderItem={(item) => (
                    <ItemCarosel typeItem={type} item={item} />
                  )}
                />
              </Col>
            );
          })}
        </Slider>
      </Row>
    );
  }

  return (
    <Row className="carosuel" style={{ ...style }}>
      <Slider
        {...settingsSliderBanner}
        ref={sliderRef}
        className="slider-banner"
      >
        {dataSlide.map((slide, index) => (
          <Link
            to={slide.path}
            className="carosuel-link product-item"
            key={index}
          >
            <Image
              src={slide.image}
              alt="Banner"
              className={`carosuel-link-image `}
              preview={false}
              style={{ ...style }}
            />
          </Link>
        ))}
      </Slider>
    </Row>
  );
}

export default React.memo(Carosuel);
