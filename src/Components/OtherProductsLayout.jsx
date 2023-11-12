import Classes from "../assets/Css/OtherProductLayout.module.css"
import Classe from "../assets/Css/ProductsLayout.module.css"
import { Link } from "react-router-dom";

const OtherProductsLayout = ({data}) => {
  const productData = data[0];
  const OtherProducts=productData .others;
  // ID= OtherProducts.id
console.log(OtherProducts,"other products")

// console.log(ID,"other products ID")


  return (
    <div key={data.id} className={Classes.container}>
      <h1 className={Classes.Title}>You may Also Like</h1>
      <div className={Classes.product}>
    {OtherProducts.map((prod)=> 
   
    <div className={Classes.productLayout} key={prod.id}>
      <div className={Classes.ImageContainer}> <img className={Classes.ImageContainer} src={prod.image.desktop}/>   </div>
      <h1>{prod.name}</h1>
      <Link to={`/product/${prod.id}`}>
      <button className={ Classe.btn}>See Product</button>
      </Link>
    </div>
   
  )}
  </div>
 </div>
  )
}

export default OtherProductsLayout
