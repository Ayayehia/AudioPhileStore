import FireBaseData from "../Api/FireBaseData";
import Image from "../assets/home/desktop/image-hero.jpg";
import ImageTablet from "../assets/home/tablet/image-header.jpg";
import ImageMobile from "../assets/home/mobile/image-header.jpg";
import Classes from "../assets/Css/LandingFirstSection.module.css";
import { Link } from "react-router-dom";

const LandingFirstSection = () => {
	const { products } = FireBaseData();
	const product = products[0];
	if (!product) return <h1>Loading...</h1>;
	return (
		<section className={Classes.container}>
			<article className={Classes.leftSection}>
				<p className={Classes.title}>New Product</p>
				<h1>
					XX99 Mark II <br /> Headphones
				</h1>
				<p className={Classes.describtion}>
					Experience natural, lifelike audio and exceptional build quality made
					for the passionate music enthusiast.
				</p>
				{product && product.id && (
					<button>
						<Link to={`/product/${product.id}`}>SEE PRODUCT</Link>
					</button>
				)}
			</article>
			<figure className={Classes.imgContainer}>
				<img
					className={Classes.imageDesktop}
					src={Image}
					alt={`Image for ${product.name}`}
				/>
				<img
					className={Classes.imageTablet}
					src={ImageTablet}
					alt={`Image for ${product.name}`}
				/>
				<img
					className={Classes.imageMobile}
					src={ImageMobile}
					alt={`Image for ${product.name}`}
				/>
			</figure>
		</section>
	);
};
// 768
// src={window.outerWidth <= 375 ? ImageMobile :window.outerWidth <= 768 ? ImageTablet : Image}
export default LandingFirstSection;
