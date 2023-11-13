import Classes from "../assets/Css/OtherProductLayout.module.css";
import Classe from "../assets/Css/ProductsLayout.module.css";
import { Link } from "react-router-dom";

const OtherProductsLayout = ({ data }) => {
  const productData = data[0];
  const OtherProducts = productData.others;
  console.log(OtherProducts, "other products");

  return (
    <div key={data.id} className={Classes.container}>
      <h2 className={Classes.Title}>You may Also Like</h2>
      <div className={Classes.product}>
        {OtherProducts.map((prod) => (
          <div className={Classes.productLayout} key={prod.id}>
            <section className={Classes.ImageContainer}>
              <img className={Classes.Image} src={prod.image.desktop} />
            </section>
            <h2>{prod.name}</h2>
            <Link to={`/product/${prod.id}`}>
              <button className={Classes.btn}>See Product</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OtherProductsLayout;
