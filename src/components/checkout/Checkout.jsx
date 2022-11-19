import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from "./Checkout.module.css";
import Item from "./Item";
import { updateCart } from "../../store/store";

export default function Checkout() {
  //==============GET STATE FROM THE STORE=================
  const cart = useSelector((state) => {
    return state.cart.cart;
  });
  const dispatch = useDispatch();
  //==============GET CART ARRAY FROM LOCAL STORAGE=================
  useEffect(() => {
    if (localStorage.getItem("cartArray")) {
      const cartArray = JSON.parse(localStorage.getItem("cartArray"));
      dispatch(updateCart(cartArray));
    } else {
      localStorage.setItem("cartArray", JSON.stringify([]));
    }
  }, [dispatch]);
  //=============CALCULATE SUM OF ALL PRODUCTS IN CART==================
  const total = cart.reduce((sum, x) => {
    return sum + x.quantity * x.item.price;
  }, 0);
  //===============PUT DOT TO TOTAL PRICE================
  const totalWithDot = total.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  return (
    <div className={styles.checkout}>
      <div className={styles["checkout-top"]}>
        <h2>CHECKOUT</h2>
        <p>
          <span>HOME / CART /</span> CHECKOUT
        </p>
      </div>
      <h3>BILLING DETAILS</h3>
      <div className={styles["checkout-bottom"]}>
        <div className={styles["checkout-form"]}>
          <label htmlFor="name">FULL NAME:</label>
          <input
            id="name"
            type="text"
            placeholder="Enter Your Full Name Here!"
          ></input>
          <label htmlFor="email">EMAIL:</label>
          <input
            id="email"
            type="email"
            placeholder="Enter Your Email Here!"
          ></input>
          <label htmlFor="tel">PHONE NUMBER:</label>
          <input
            id="tel"
            type="tel"
            placeholder="Enter Your Phone Number Here!"
          ></input>
          <label htmlFor="address">ADDRESS:</label>
          <input
            id="address"
            type="text"
            placeholder="Enter Your Address Here!"
          ></input>
          <button>Place order</button>
        </div>
        <div className={styles.total}>
          <h3>YOUR ORDER</h3>
          {cart.map((x) => {
            return <Item key={x.item._id.$oid} item={x} />;
          })}
          <div className={styles["total-number"]}>
            <p className={styles["total-number-total"]}>TOTAL</p>
            <p className={styles["total-number-number"]}>{totalWithDot} VND</p>
          </div>
        </div>
      </div>
    </div>
  );
}
