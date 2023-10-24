import { PropsIcon } from "../interfaces/interfaceIcon";

export const CategoryIcon = ({ className }: PropsIcon) => {
  return (
    <svg viewBox="0 0 12 10" className={className}>
      <g fillRule="evenodd" stroke="none" strokeWidth="1">
        <g transform="translate(-373 -208)">
          <g transform="translate(155 191)">
            <g transform="translate(218 17)">
              <path d="m0 2h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z"></path>
              <path d="m0 6h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z"></path>
              <path d="m0 10h2v-2h-2zm4 0h7.1519633v-2h-7.1519633z"></path>
            </g>
          </g>
        </g>
      </g>
    </svg>
  );
};

export const CategoryIconArrowRight = ({ className }: PropsIcon) => {
  return (
    <svg viewBox="0 0 4 7" className={className}>
      <polygon points="4 3.5 0 0 0 7"></polygon>
    </svg>
  );
};

export const CategoryIconFilter = ({ className }: PropsIcon) => {
  return (
    <svg
      enable-background="new 0 0 15 15"
      viewBox="0 0 15 15"
      x="0"
      y="0"
      className={className}
    >
      <g>
        <polyline
          fill="none"
          points="5.5 13.2 5.5 5.8 1.5 1.2 13.5 1.2 9.5 5.8 9.5 10.2"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        ></polyline>
        <polyline
          id="filter__ticked"
          points="9.2 11.3 10.3 12.1 11.8 10.4"
          style={{
            fill: "none",
            stroke: "rgb(255, 255, 255)",
            strokeLinecap: "round",
            strokeLinejoin: "round",
            strokeMiterlimit: "10",
            strokeWidth: "0.5",
          }}
        ></polyline>
        <circle cx="10.5" cy="11.2" r="2.5" stroke="none"></circle>
        <use xlinkHref="#filter__ticked"></use>
      </g>
    </svg>
  );
};
