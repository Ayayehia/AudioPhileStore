import Classes from "../assets/Css/CategoryPage.module.css"
import ProductsLayout from "../Components/ProductsLayout"
// import MyData from "../Api/MyData.json"
import MyData from "../Api/MyDataTwo.json"

const SpeakersData = () => {
    const Speakers = MyData.filter((category)=>category.category=="speakers")
    console.log(Speakers ,"Speakers filtering")

  return (
    <>
    <div className={Classes.Header}>
      <h1>Speakers</h1>
    </div>
    {Speakers.map((prod) => (
      <ProductsLayout data={prod} style={"container"} styleTwo={"leftSection"} styleThree={"rigthSection"} buttonText={"See Product"}/>
    ))}
  </>
  )
}

export default SpeakersData
