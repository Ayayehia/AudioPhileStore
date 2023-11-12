import ProductsLayout from "../Components/ProductsLayout"
import MyData from "../Api/MyDataTwo.json"
import Features from "../Components/Features"
import GallerySection from "../Components/GallerySection"
import OtherProductsLayout from "../Components/OtherProductsLayout"
import CategoryButtons from "../Components/CategoryButtons"
import ArticleSection from "../Components/ArticleSection"
import Footer from "../Components/Footer"
import { useParams } from "react-router-dom"
import Cart from "../Components/Cart"

const SingleProductPage = ({openCart}) => {
    console.log(openCart,"open prop in SingleProduct")
//  const EarPhones = MyData.filter((category)=>category.category=="earphones")
 
 const {id} = useParams();

 const Filtered =MyData.filter((prod)=>prod.id==id)


 console.log(id,"ID using param in single product")
 console.log( Filtered,"Filtered product by id")
// this data is just for styling purposes will change this data later
  return (
 <>
    {Filtered.map((prod)=> <ProductsLayout key={prod.id} price={prod.price} data={prod} style={"singleProductContainer" }styleTwo={"leftSectionSingleProduct"} styleThree={"rightSectionSingle"} buttonText={"Add To Cart"}/>
)}
{openCart && <Cart/> }

<Features data={Filtered}/>
<GallerySection data={Filtered}/>
<OtherProductsLayout data={Filtered}/>
<CategoryButtons style={"productWrapper"}/>
<ArticleSection style={"productContainer"}/>
<Footer/>
   </>
  )
}

export default SingleProductPage
