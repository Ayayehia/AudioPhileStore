import React from "react";
import Modal from "../Ui/Card";
import { useSelector } from "react-redux";
import CartProducts from "./CartProducts";
import Classes from "../assets/Css/Summary.module.css";
import { Link } from "react-router-dom";
import Classe from "../assets/Css/ConfirmationMessage.module.css";
const ConfirmationMessage = ({ errorSubmit }) => {
  const Data = useSelector((state) => state.cart.items);
  const totalPrice = Data.reduce((total, item) => total + item.totalPrice, 0);

  return (
    <Modal>
      <section className={Classe.container}>
        <p>
          <svg width="64" height="64" xmlns="http://www.w3.org/2000/svg">
            <g fill="none" fill-rule="evenodd">
              <circle fill="#D87D4A" cx="32" cy="32" r="32" />
              <path
                stroke="#FFF"
                stroke-width="4"
                d="m20.754 33.333 6.751 6.751 15.804-15.803"
              />
            </g>
          </svg>
        </p>
        <h2>Thank you for your order</h2>
        <p>You will receive an email confirmation shortly.</p>
        <section className={Classe.productPriceContainer}>
          <section className={Classe.productList}>
            {Data.map((prod) => (
              <CartProducts
                data={prod}
                style={"quantityContainer"}
                styleTwo={"container"}
              />
            ))}
          </section>
          <p className={Classe.grandPrice}>GrandTotal:${totalPrice}</p>
        </section>
        <Link to={"/"}>
          <button className={Classes.btn}>Back To Home</button>
        </Link>
      </section>
    </Modal>
  );
};

export default ConfirmationMessage;
