import Classes from "../assets/Css/ProductsLayout.module.css";
import { Link } from "react-router-dom";
import QuantityContainer from "./QuantityContainer";
import { useDispatch, useSelector } from "react-redux";
import { AddToCart } from "../Store/Slices/CartSlice";

const ProductsLayout = ({
  data,
  price,
  style,
  styleTwo,
  styleThree,
  buttonText,
  direction,
}) => {
  const Items = useSelector((state) => state.cart.items);
  const quantity = Items.find((prod) => prod.quantity);
  console.log(Items, "Items coming from cart");
  const dispatch = useDispatch();
  console.log(quantity, "quantity coming from the cartslice");
  const addToCart = () => {
    dispatch(
      AddToCart({
        price: data.price,
        id: data.id,
        image: data.image.mobile,
        name: data.name,
      })
    );
  };

  return (
    <div
      className={`${Classes[style]} ${
        direction === "row-reverse" ? Classes["row-reverse"] : ""
      } `}
    >
      <div className={`${Classes[styleTwo]}`}>
        <img className={Classes.img} src={data.image.desktop} />
      </div>
      <div className={`${Classes[styleThree]}`}>
        <h1>{data.name}</h1>
        <p>{data.description}</p>
        {!price && (
          <Link to={`/product/${data.id}`}>
            <button className={Classes.btn}>{buttonText}</button>
          </Link>
        )}
        {price && (
          <>
            <p className={Classes.price}>{price}$</p>
            <div style={{ display: "flex", justifyContent: "space-evenly" }}>
              <QuantityContainer Quantity={quantity} ID={data.id} />
              <Link to={`/product/${data.id}`}>
                <button onClick={addToCart} className={Classes.btn}>
                  {buttonText}
                </button>
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductsLayout;
