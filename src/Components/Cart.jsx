import CartProducts from "./CartProducts";
import Modal from "../Ui/Card";
import { useDispatch, useSelector } from "react-redux";
import Classes from "../assets/Css/CartProducts.module.css";
import { RemoveAll } from "../Store/Slices/CartSlice";
import { Link } from "react-router-dom";

const Cart = ({ funcOpen }) => {
  const Data = useSelector((state) => state.cart.items);
  const totalPrice = Data.reduce((total, item) => total + item.totalPrice, 0);
  const TotalQauantity = useSelector((state) => state.cart.totalQuantity);

  console.log(TotalQauantity, "TotalQauantity");
  console.log(funcOpen, "funcOpen");
  console.log(totalPrice, "totalPrice");

  const dispatch = useDispatch();
  const Remove = () => {
    dispatch(RemoveAll());
  };
  return (
    <Modal onClick={funcOpen}>
      <div className={Classes.firstSection}>
        <h1>Cart ({TotalQauantity})</h1>
        <a onClick={Remove}>Remove all</a>
      </div>

      {Data.map((prod) => (
        <CartProducts
          data={prod}
          style={"quantityContainer"}
          styleTwo={"container"}
        />
      ))}
      <h1 className={Classes.totalAmount}>
        <span style={{ opacity: "0.5" }}>Total</span>
        <span>{totalPrice}$</span>{" "}
      </h1>
      <Link to="/checkout">
        <button className={Classes.btn}> Check Out</button>
      </Link>
    </Modal>
  );
};

export default Cart;
