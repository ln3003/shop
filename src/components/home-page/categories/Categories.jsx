import styles from "./Categories.module.css";
import image1 from "../../../images/product_1.png";
import image2 from "../../../images/product_2.png";
import image3 from "../../../images/product_3.png";
import image4 from "../../../images/product_4.png";
import image5 from "../../../images/product_5.png";
import { useNavigate } from "react-router-dom";

export default function Categories() {
  const navigate = useNavigate();
  const imgHandle = () => {
    navigate("/shop");
  };
  return (
    <div className={styles.categories}>
      <p>CAREFULLY CREATED COLLECTIONS</p>
      <h2>BROWSE OUR CATEGORIES</h2>
      <div className={styles.images}>
        <img onClick={imgHandle} src={image1} alt="product 1" />
        <img onClick={imgHandle} src={image2} alt="product 2" />
        <img onClick={imgHandle} src={image3} alt="product 3" />
        <img onClick={imgHandle} src={image4} alt="product 4" />
        <img onClick={imgHandle} src={image5} alt="product 5" />
      </div>
    </div>
  );
}
