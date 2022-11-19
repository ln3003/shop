import { useEffect, useState } from "react";
import ProductItem from "./ProductItem";
import styles from "./ProductsList.module.css";

export default function ProductsList(props) {
  const [productsArray, setProductsArray] = useState([]);
  //==============GET PRODUCTS FROM API=================
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
      <div className={styles["product-container"]}>
        {productsArray.map((x) => {
          return x.category === props.category || props.category === "" ? (
            <ProductItem key={x.name} item={x} />
          ) : (
            ""
          );
        })}
      </div>
    </div>
  );
}
