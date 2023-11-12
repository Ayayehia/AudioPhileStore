import Classes from "../assets/Css/CategoryPage.module.css";
import ProductsLayout from "../Components/ProductsLayout";
// import MyData from "../Api/MyData.json"
import MyData from "../Api/MyDataTwo.json";

const HeadPhonesData = () => {
	const HeadPhones = MyData.filter(
		(category) => category.category == "headphones"
	);
	console.log(HeadPhones, "Headphones filtering");

	return (
		<>
			<div className={Classes.Header}>
				<h1>headphones</h1>
			</div>
			{HeadPhones.map((prod, index) => (
				<ProductsLayout
					key={index}
					direction={index % 2 === 0 ? "row" : "row-reverse"} // add conditional class based on index
					data={prod}
					style={"container"}
					styleTwo={"leftSection"}
					styleThree={"rigthSection"}
					buttonText={"See Product"}
				/>
			))}
		</>
	);
};

export default HeadPhonesData;
