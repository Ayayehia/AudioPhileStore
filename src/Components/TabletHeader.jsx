// import Classes from "../assets/Css/Header.module.css"
import Classes from "../assets/Css/TabletHeader.module.css"
import Logo from "../assets/Images/audiophileLogo.png"
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
const Header = () => {
    console.log("Tablet Header")
  return (
    <>
    <div className={Classes.container} >
    <div className={Classes.logoContainer} >
      <MenuIcon className={Classes.menuIcon}/>
     <img src={Logo}/>
     </div>
     <div>
     <ShoppingCartOutlinedIcon/>
     </div>

   
    </div>
   < Outlet/>
   </>
  )
}

export default Header
