import Classes from "../assets/Css/Header.module.css";
import Logo from "../assets/Images/audiophileLogo.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MenuIcon from "@mui/icons-material/Menu";
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import TabletHeader from "../Components/TabletHeader";
import { useState } from "react";
const Header = ({ open, SetOpen, funcOpen }) => {
	// const [open,SetOpen]=useState(false)

	// const Open =()=>{
	//   SetOpen((prev)=>!prev)
	// }
	// console.log(open)
	return (
		<>
			<div className={Classes.container}>
				<div className={Classes.logoContainer}>
					<MenuIcon className={Classes.menuIcon} />
					<Link to="/">
						<img src={Logo} />
					</Link>
				</div>
				<div className={Classes.linksContainer}>
					<Link to="/">Home</Link>
					<Link to="/category/headPhones">HeadPhones</Link>
					<Link to="/category/speakers">Speakers</Link>
					<Link to="/category/earphones">EarPHones</Link>
				</div>
				<>
					<ShoppingCartOutlinedIcon onClick={funcOpen} />
				</>
			</div>
			<Outlet />
		</>
	);
};

export default Header;
