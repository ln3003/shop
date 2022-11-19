import styles from "./ChatBox.module.css";
import image from "../../images/person2.jpg";
import {
  faPaperPlane,
  faSmile,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//===============ADD ICON TO LIBRARY================
library.add(faPaperPlane, faSmile, faPaperclip);

export default function ChatBox() {
  return (
    <div className={styles["chat-box"]}>
      <div className={styles["chat-box-top"]}>
        <h3>Customer Support</h3>
        <p>Let's Chat App</p>
      </div>
      <div className={styles["chat-box-mid"]}>
        <p>Xin chào</p>
        <p>Làm thế nào để xem các sản phẩm</p>
        <div className={styles.support}>
          <img src={image} alt="customer support" />
          <p>ADMIN: Chào bạn</p>
        </div>
        <div className={styles.support}>
          <img src={image} alt="customer support" />
          <p>ADMIN: Bạn có thể vào mục Shop để xem các sản phẩm</p>
        </div>
      </div>
      <div className={styles["chat-box-bottom"]}>
        <img src={image} alt="customer support" />
        <input type="text" placeholder="Enter Message!" />
        <FontAwesomeIcon icon={["fas", "paperclip"]} />
        <FontAwesomeIcon icon={["fas", "smile"]} />
        <FontAwesomeIcon
          className={styles.send}
          icon={["fas", "paper-plane"]}
        />
      </div>
    </div>
  );
}
