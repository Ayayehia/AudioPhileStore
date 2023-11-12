import CategoryButtons from "../Components/CategoryButtons";
import ArticleSection from "../Components/ArticleSection";
import Footer from "../Components/Footer";
import HeadPhonesData from "../Components/HeadPhonesData";
import SpeakersData from "../Components/SpeakersData";
import EarPhoneData from "../Components/EarPhoneData";
import { useParams } from "react-router-dom";
import Cart from "../Components/Cart";

const Headphones = ({ openCart }) => {
	const { category } = useParams();
	console.log(category, "category value of param");
	return (
		<>
			{openCart && <Cart />}
			{category === "headPhones" ? (
				<HeadPhonesData />
			) : category === "speakers" ? (
				<SpeakersData />
			) : category === "earphones" ? (
				<EarPhoneData />
			) : null}
			<CategoryButtons style={"productWrapper"} />
			<ArticleSection style={"productContainer"} />
			<Footer />
		</>
	);
};

export default Headphones;
