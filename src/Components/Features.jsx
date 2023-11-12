import Classes from "../assets/Css/Features.module.css"
const Features = ({data}) => {
console.log(data,"data coming from songle product to Feautures")
console.log(data.description,"data describtion coming from songle product to Feautures")
const productData = data[0];
const includes =productData.includes
  return (
    <div className={Classes.container}>
      <div className={Classes.leftSection}>
        <h1>Features</h1><p>{productData.description}</p>
        </div>

      <div className={Classes.rightSection}>
        <h1>In the box</h1>
        <ul>
          {includes.map((prod)=><li><span>{prod.quantity}X</span>{prod.item}</li>
)}
           
            </ul>
        </div>

    </div>
  )
}

export default Features
