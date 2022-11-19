import styles from "./Banner.module.css";
import image from "../../../images/banner1.jpg";
import { useNavigate } from "react-router-dom";

export default function Banner() {
  const navigate = useNavigate();
  return (
    <div className={styles.banner}>
      <img src={image} alt="banner" />
      <div className={styles.text}>
        <p className={styles.p1}>NEW INSPIRATION 2020</p>
        <p className={styles.p2}>20% OFF ON NEW SEASON</p>
        <button
          onClick={() => {
            navigate("/shop");
          }}
        >
          Browse collections
        </button>
      </div>
    </div>
  );
}
