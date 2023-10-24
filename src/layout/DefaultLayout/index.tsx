import { ChildrenLayout } from "@/shared/interfaces/interfaceLayout";
import Header from "../components/Header";

function DefaultLayout({ children }: ChildrenLayout) {
  return (
    <div>
      <Header />
      <section className="container-content">{children}</section>
    </div>
  );
}

export default DefaultLayout;
