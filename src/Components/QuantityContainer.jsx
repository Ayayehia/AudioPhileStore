import { useSelector,useDispatch } from "react-redux"
import Classe from "../assets/Css/Quantity.module.css"
import { IncrementQuantity,DecrementQuantity} from "../Store/Slices/CartSlice";

const QuantityContainer = ({ID,Style="container"}) => {
  const data = useSelector((state) => state.cart.items);
  const item = data.find((item) => item.id === ID);
  const quantity = item ? item.quantity : 0;
  
const dispatch = useDispatch()
const decreament =()=>{
 return dispatch(DecrementQuantity(ID))
}
const Increment =()=>{
  dispatch(IncrementQuantity(ID))
}
  console.log(quantity, "The quantity value");
  return (
    <div className={Classe.container}>
      <div ><button className={Classe.sign} onClick={decreament}>-</button></div>
      <div className={Classe.sign}> {quantity}</div>
      <div ><button className={Classe.sign} onClick={Increment}>+</button></div>
    </div>
  )
}
// `${Classes[Style]} `
// className={Classes.container}
export default QuantityContainer
