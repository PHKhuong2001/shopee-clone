import { ChildrenLayout } from "@/shared/interfaces/interfaceLayout";
import HeaderAuth from "../components/Header/HeaderAuth";
import { useLocation } from "react-router-dom";
import routes from "@/routes";

function AuthLayout({ children }: ChildrenLayout) {
  const { pathname } = useLocation();
  const handlerBackground = () => {
    const path = pathname;
    if (path === routes.signupSeller || path === routes.loginSeller) {
      return "rgb(253, 250, 247)";
    }
    if (path === routes.signupBuyer || path === routes.loginBuyer) {
      return "rgb(238, 77, 45)";
    }
    return "";
  };

  const handlerLoginOrSignUp = () => {
    if (pathname === routes.loginBuyer) {
      return "Đăng nhập";
    }
    if (pathname === routes.loginSeller) {
      return "Kênh Người Bán";
    }
    return "Đăng ký";
  };

  return (
    <div>
      <HeaderAuth type={handlerLoginOrSignUp()} />
      <div
        style={{
          backgroundColor: `${handlerBackground()}`,
        }}
      >
        {pathname === routes.signupBuyer || pathname === routes.loginBuyer ? (
          <div className="container-form-authBuyer backgroundUrlBuyer d-flex align-center">
            {children}
          </div>
        ) : (
          <></>
        )}
        {pathname === routes.signupSeller || pathname === routes.loginSeller ? (
          <div className="container-form-authSeller backgroundUrlSerller d-flex align-center">
            {children}
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default AuthLayout;
