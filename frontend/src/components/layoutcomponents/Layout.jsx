import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      <div className="layout_design">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
