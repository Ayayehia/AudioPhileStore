import Classes from "../assets/Css/Summary.module.css"
import CartProducts from "./CartProducts"
import {  useSelector } from "react-redux"

const Summary = ({Submitting}) => {
  const Data = useSelector((state)=>state.cart.items)
  const Vat = Data.reduce((accumulator, prod) => accumulator + (prod.price * 0.2), 0);
  const VatFixed = Vat.toFixed()
  const TotalPrice = Data.reduce((accumulator, prod) => accumulator + prod.price, 0);
const GrandTotal =TotalPrice+Vat+50
const item = Data.find((item) => item.id === item.id);
const Quantity = item ? item.quantity : 0;
const Submit=()=>{
  Submitting(true)
}
return (
    <div className={Classes.container}>
        <div >
        <h1 style={{marginBottom:"32px"}}>Summary</h1>
      {Data.map((prod)=><CartProducts data={prod} style={"hidequantityContainer"} styleTwo={"summaryContainer"} ShowQuantity={Quantity}/>)}
        </div>
    <div className={Classes.priceSection}>
    <h3> <span>Total</span>${TotalPrice} </h3>
    <h3><span>Shipping</span>$50</h3>
    <h3><span>Vat(included)</span>$ {VatFixed}</h3>
    <h3> <span>Grand Total</span> <span style={{color:" #D87D4A",opacity:"1"}}>${ GrandTotal}</span></h3>
    <button onClick={Submit} className={Classes.btn}>Continue and Pay</button>
    </div>
    

    </div>
  )
}

export default Summary
