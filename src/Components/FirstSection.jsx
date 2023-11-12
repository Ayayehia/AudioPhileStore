import FireBaseData from "../Api/FireBaseData"
import Image from "../assets/home/desktop/image-hero.jpg"
import ImageTablet from "../assets/home/tablet/image-header.jpg"
import ImageMobile from "../assets/home/mobile/image-header.jpg"
// import Classes from "../assets/Css/LandingFirstSection.module.css"
import { Link } from "react-router-dom"
import Classes from "../assets/Css/FirstSection.module.css"
const FirstSection = () => {
  const { products } = FireBaseData();

  return (
    <div>
      <img className={Classes.imageDesktop} src={ Image} alt={`Image for Desktop`} />
       <img className={Classes.imageTablet} src={ImageTablet} alt={`Image for Tablet`} />
       <img className={Classes.imageMobile} src={ImageMobile } alt={`Image for Mobile`} />
          <div>
          <p  >New Product</p>
          <h1> XX99 Mark II <br/> Headphones</h1>
          <p >Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.</p>
        <Link to={`/product/4`}><button >SEE PRODUCT</button></Link>
        </div>
  
    </div>
  )
}

export default FirstSection
