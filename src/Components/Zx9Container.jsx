import Classes from "../assets/Css/Zx9Container.module.css"
import Zx9Desktop from "../assets/product-zx9-speaker/desktop/Zx9.png"
import Zx9Tablet from"../assets/product-zx9-speaker/tablet/Zx9.png"
import Zx9Mobile from"../assets/product-zx9-speaker/mobile/Zx9.png"
import MyDataTwo from "../Api/MyDataTwo.json"
import { Link } from "react-router-dom"
const Zx9Container = () => {
  const Data= MyDataTwo.map((prod)=>prod)
  const ID=Data.id
  console.log(ID,"id in zx9 container")
  return (
    <div  style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
      <div className={Classes.container}  >
        <img className={Classes.imageDesktop} src={Zx9Desktop}/>
        <img className={Classes.imageTablet} src={Zx9Tablet}/>
        <img className={Classes.imageMobile} src={ Zx9Mobile}/>
      <div className={Classes.rightSection}>
        <h1 >ZX9 <br/> SPEAKER  </h1>
        <p>Upgrade to premium speakers that are <br/>phenomenally built to deliver truly remarkable <br/>sound.</p>
        <Link to={`/product/6`}> 
        <button className={Classes.btn}>Press Here</button>
        </Link>
        </div>
        
        </div>
    </div>
  )
}

export default Zx9Container
