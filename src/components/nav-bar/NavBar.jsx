import styles from "./NavBar.module.css";
import {
  faCartShopping,
  faUser,
  faSortDown,
} from "@fortawesome/free-solid-svg-icons";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { onLogin, onLogout } from "../../store/store";
import { useLocation, useNavigate } from "react-router-dom";
//===============ADD ICON TO LIBRARY================
library.add(faCartShopping, faUser, faSortDown);

export default function NavBar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  //===============GET CURRENT USER FROM LOCAL STORAGE================
  useEffect(() => {
    if (localStorage.getItem("currentUser")) {
      const user = JSON.parse(localStorage.getItem("currentUser"));
      dispatch(onLogin(user));
    }
  }, [dispatch]);
  //==============GET STATE FROM STORE=================
  const auth = useSelector((state) => {
    return state.auth.auth;
  });
  const currentUser = useSelector((state) => {
    return state.auth.currentUser;
  });
  //==============HANDLE LOGOUT BUTTON=================
  const logoutHandle = () => {
    localStorage.removeItem("currentUser");
    dispatch(onLogout());
    navigate("/login");
  };
  return (
    <nav className={styles["nav-bar"]}>
      <div className={styles["nav-bar-left"]}>
        <p
          className={location.pathname === "/" ? styles.active : ""}
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </p>
        <p
          className={location.pathname === "/shop" ? styles.active : ""}
          onClick={() => {
            navigate("/shop");
          }}
        >
          Shop
        </p>
      </div>
      <h1>BOUTIQUE</h1>
      <div className={styles["nav-bar-right"]}>
        <FontAwesomeIcon
          className={styles["nav-icon"]}
          icon={["fas", "cart-shopping"]}
        />
        <p
          onClick={() => {
            navigate("/cart");
          }}
          className={styles.cart}
        >
          Cart
        </p>
        <FontAwesomeIcon
          className={styles["nav-icon"]}
          icon={["fas", "user"]}
        />
        {auth ? (
          <p>
            {currentUser.name}&nbsp;
            <FontAwesomeIcon
              className={styles["nav-icon"]}
              icon={["fas", "sort-down"]}
            />
            &nbsp;
          </p>
        ) : (
          <p
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </p>
        )}
        {auth && <p onClick={logoutHandle}>{"( Logout )"}</p>}
      </div>
    </nav>
  );
}
