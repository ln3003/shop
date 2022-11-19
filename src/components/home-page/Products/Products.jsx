import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Popup from "./Popup";
import ProductItem from "./ProductItem";
import styles from "./Products.module.css";

export default function Products() {
  //==============GET STATE FROM STORE=================
  const showPopup = useSelector((state) => {
    return state.popup.popup;
  });
  const popupValue = useSelector((state) => {
    return state.popup.value;
  });
  const [productsArray, setProductsArray] = useState([]);
  //==============GET PRODUCT FROM LIBRARY=================
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const response = await fetch(
          "https://firebasestorage.googleapis.com/v0/b/funix-subtitle.appspot.com/o/Boutique_products.json?alt=media&token=dc67a5ea-e3e0-479e-9eaf-5e01bcd09c74"
        );
        const data = await response.json();
        setProductsArray(data);
      } catch (e) {
        console.log(e.message);
      }
    };
    sendRequest();
  }, []);
  return (
    <div className={styles.products}>
      {showPopup && <Popup value={popupValue} />}
      <p>MADE THE HARD WAY</p>
      <h2>TOP TRENDING PRODUCTS</h2>
      <div className={styles["product-container"]}>
        {productsArray.map((x) => {
          return <ProductItem key={x.name} item={x} />;
        })}
      </div>
    </div>
  );
}
