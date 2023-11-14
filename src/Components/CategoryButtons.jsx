import Classes from "../assets/Css/CategoryButtons.module.css";
import Speakres from "/CategoryIcons/Speakers filter.png";
import EarPhone from "/CategoryIcons/EarPhones.png";
import HeadPhone from "/CategoryIcons/HeadPhonesFilter.png";
import Arrow from "/CategoryIcons/linkArrow.svg";
import { Link } from "react-router-dom";

const CategoryButtons = ({ style }) => {
  const categorys = [
    { title: "headPhones", image: HeadPhone },
    { title: "earphones", image: EarPhone },
    { title: "speakers", image: Speakres },
  ];

  return (
    <div className={`${Classes[style]}`}>
      {categorys.map((item) => (
        <div className={Classes.container} key={item.title}>
          <img className={Classes.img} src={item.image} />
          <p className={Classes.text}>{item.title}</p>
          <div className={Classes.linkContainer}>
            <Link to={"/category/" + item.title} className={Classes.textLink}>
              Shop here
            </Link>
            <img src={Arrow} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default CategoryButtons;
