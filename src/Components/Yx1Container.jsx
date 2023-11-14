import Classes from "../assets/Css/Yx1Container.module.css";
import ImageDesktop from "/product-yx1-earphones/desktop/Yx1.png";
import ImageTablet from "/product-yx1-earphones/tablet/Yx1.png";
import ImageMobile from "/product-yx1-earphones/mobile/Yx1.png";
import { Link } from "react-router-dom";

const Yx1Container = () => {
  return (
    <section
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div className={Classes.container}>
        <div className={Classes.leftSection}>
          <img className={Classes.imageDesktop} src={ImageDesktop} />
          <img className={Classes.imageTablet} src={ImageTablet} />
          <img className={Classes.imageMobile} src={ImageMobile} />
        </div>

        <div className={Classes.rightSection}>
          <h1>Yx1 earphones</h1>
          <Link to={`/product/1`}>
            <button>See Product</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Yx1Container;
