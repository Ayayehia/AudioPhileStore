import Classes from "../assets/Css/Zx7Container.module.css"
import Zx7Desktop from "../assets/product-zx7-speaker/desktop/Zx7.png"
import Zx7Tablet from "../assets/product-zx7-speaker/tablet/Zx7.png"
import Zx7mobile from "../assets/product-zx7-speaker/mobile/Zx7.png"
import { Link } from "react-router-dom"

const Zx7Container = () => {
  return (
<section style={{display:"flex",justifyContent:"center"}}>
    <div className={Classes.container}>
 <div className={Classes.leftSection}>
        <h1>ZX7 SPEAKER</h1>
        <Link to={`/product/5`}> 

       <button>See Product</button>
       </Link>
      </div>
      <div className={Classes.image}> 
      <img  className={Classes.imageDesktop} src={ Zx7Desktop}/>
       <img  className={Classes.imageTablet} src={Zx7Tablet}/>
       <img  className={Classes.imagemobile} src={Zx7mobile }/>
</div>
    </div>
    </section>
  )
}

export default Zx7Container
