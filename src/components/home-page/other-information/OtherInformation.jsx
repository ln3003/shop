import styles from "./OtherInformation.module.css";

export default function OtherInformation() {
  return (
    <div className={styles["other-information"]}>
      <div className={styles["other-information-top"]}>
        <div>
          <p className={styles.text1}>FREE SHIPPING</p>
          <p>Free shipping worldwide</p>
        </div>
        <div>
          <p className={styles.text1}>24 X 7 SERVICE</p>
          <p>Free shipping worldwide</p>
        </div>
        <div>
          <p className={styles.text1}>FESTIVAL OFFER</p>
          <p>Free shipping worldwide</p>
        </div>
      </div>
      <div className={styles["other-information-bottom"]}>
        <div>
          <p className={styles.text1}>LET'S BE FRIENDS!</p>
          <p>Nisi nisi tempor consequat laboris nisi.</p>
        </div>
        <div>
          <input type="email" placeholder="Enter your email address" />
          <button>Subscribe</button>
        </div>
      </div>
    </div>
  );
}
