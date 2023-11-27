import CartProducts from "./CartProducts";
import Modal from "../Ui/Card";
import { useDispatch, useSelector } from "react-redux";
import Classes from "../assets/Css/CartProducts.module.css";
import { RemoveAll } from "../Store/Slices/CartSlice";
import { Link } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import EmptyCart from "./EmptyCart";

const Cart = ({ funcOpen }) => {
  const Data = useSelector((state) => state.cart.items);
  const totalPrice = Data.reduce((total, item) => total + item.totalPrice, 0);
  const TotalQauantity = useSelector((state) => state.cart.totalQuantity);

  const sendToFirebase = async () => {
    try {
      const response = await axios.post(
        "https://audiophile-d4be3-default-rtdb.firebaseio.com/carts.json", // Replace with your Firebase database URL
        {
          cartItems: Data,
          totalQuantity: TotalQauantity,
          totalPrice: totalPrice,
        }
      );

      console.log("Data sent to Firebase:", response.data);
    } catch (error) {
      console.error("Error sending data to Firebase:", error);
    }
  };
  useEffect(() => {
    sendToFirebase();
  }, [Data, TotalQauantity, totalPrice]);

  console.log(TotalQauantity, "TotalQauantity");
  console.log(funcOpen, "funcOpen");
  console.log(totalPrice, "totalPrice");

  const dispatch = useDispatch();
  const Remove = () => {
    dispatch(RemoveAll());
  };
  return (
    <>
      {Data.length > 0 ? (
        <Modal onClick={funcOpen}>
          <div className={Classes.firstSection}>
            <h1>Cart ({TotalQauantity})</h1>
            <a onClick={Remove}>Remove all</a>
          </div>

          {Data.map((prod) => (
            <CartProducts
              key={prod.id}
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
      ) : (
        <Modal onClick={funcOpen}>
          <EmptyCart />
        </Modal>
      )}
    </>
  );
};

export default Cart;

// {Data.length==0?(  <Modal onClick={funcOpen}>
//   <div className={Classes.firstSection}>
//     <h1>Cart ({TotalQauantity})</h1>
//     <a onClick={Remove}>Remove all</a>
//   </div>

//   {Data.map((prod) => (
//     <CartProducts
//       data={prod}
//       style={"quantityContainer"}
//       styleTwo={"container"}
//     />
//   ))}
//   <h1 className={Classes.totalAmount}>
//     <span style={{ opacity: "0.5" }}>Total</span>
//     <span>{totalPrice}$</span>{" "}
//   </h1>
//   <Link to="/checkout">
//     <button className={Classes.btn}> Check Out</button>
//   </Link>
// </Modal>:<EmptyCart/>)}
