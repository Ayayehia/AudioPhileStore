import Classes from "../assets/Css/CategoryPage.module.css"
import ProductsLayout from "../Components/ProductsLayout"
// import MyData from "../Api/MyData.json"
import MyData from "../Api/MyDataTwo.json"

const EarPhoneData = () => {
    const EarPhones = MyData.filter((category)=>category.category=="earphones")
    console.log(EarPhones ,"EarPhones filtering")
  return (
    <>
    <div className={Classes.Header}>
      <h1>EarPhones</h1>
    </div>
    {EarPhones.map((prod) => (
      <ProductsLayout data={prod} style={"container"} styleTwo={"leftSection"} styleThree={"rigthSection"} buttonText={"See Product"}/>
    ))}
  </>
  )
}

export default EarPhoneData
