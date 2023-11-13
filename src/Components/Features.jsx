import Classes from "../assets/Css/Features.module.css";
const Features = ({ data }) => {
  console.log(data, "data coming from songle product to Feautures");
  console.log(
    data.description,
    "data describtion coming from songle product to Feautures"
  );
  const productData = data[0];
  const includes = productData.includes;
  return (
    <div className={Classes.container}>
      <div className={Classes.leftSection}>
        <h2>Features</h2>
        <p>{productData.description}</p>
      </div>

      <div className={Classes.rightSection}>
        <h2>In the box</h2>
        <ul>
          {includes.map((prod) => (
            <li>
              <span>{prod.quantity}X</span>
              {prod.item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Features;
