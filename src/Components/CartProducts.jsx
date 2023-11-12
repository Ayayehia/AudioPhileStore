import Classes from "../assets/Css/CartProducts.module.css"
import QuantityContainer from "./QuantityContainer"
import { useSelector,useDispatch } from "react-redux"
import { useState } from "react"
import { IncrementQuantity,DecrementQuantity} from "../Store/Slices/CartSlice";

const CartProducts = ({data,style,styleTwo,ShowQuantity}) => {
    const {name,price,id,quantity,image,totalPrice}=data
    const dataItem = useSelector((state) => state.cart.items);
    const item = dataItem.find((item) => item.id === id);
    const Quantity = item ? item.quantity : 0;
    // const [Quantityitem, setQuantityitem] = useState(Quantity);
    const dispatch = useDispatch()

    const decreament =()=>{
      return dispatch(DecrementQuantity(id))
     }
     const Increment =()=>{
       dispatch(IncrementQuantity(id))
     }
  return (
    <div className={ `${Classes[styleTwo]}`}>
      <div className={Classes.img}> <img className={Classes.img} src={image}/></div>
      <div className={Classes.textSection}> <h1 className={Classes.title}>{name}</h1><p>${price}</p></div>
     {ShowQuantity&& <div style={{justifyContent:"flex-end"}}>X{ShowQuantity}</div>}
      <div className={`${Classes[style]}`} ><p onClick={decreament}>-</p> <p>{Quantity}</p><p onClick={ Increment}>+</p></div>
    </div>
  )
}


export default CartProducts
