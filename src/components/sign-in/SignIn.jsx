import styles from "./SignIn.module.css";
import image from "../../images/banner1.jpg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { onLogin } from "../../store/store";
import { useNavigate } from "react-router-dom";

export default function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  //==============EMAIL INPUT, CHECK ERROR=================
  const [emailValue, setEmailValue] = useState("");
  const [emailError, setEmailError] = useState("");
  const checkEmailValue = () => {
    if (emailValue === "") {
      setEmailError("Please input email");
    } else {
      setEmailError("");
    }
  };
  const emailHandle = (e) => {
    setEmailValue(e.target.value);
  };
  //==============PASSWORD INPUT, CHECK ERROR=================
  const [passwordValue, setPasswordValue] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const checkPasswordValue = () => {
    if (passwordValue.length < 8) {
      setPasswordError("Password must more than 8 charater");
    } else {
      setPasswordError("");
    }
  };
  const passwordHandle = (e) => {
    setPasswordValue(e.target.value);
  };
  //==============HANDLE SUBMIT FORM=================
  const submitHandle = (e) => {
    e.preventDefault();
    checkEmailValue();
    checkPasswordValue();
    if (emailValue !== "" && passwordValue.length >= 8) {
      setEmailError("");
      setPasswordError("");
      if (localStorage.getItem("userArray")) {
        const userArray = JSON.parse(localStorage.getItem("userArray"));
        const user = userArray.find((x) => {
          return x.email === emailValue && x.password === passwordValue;
        });
        if (user) {
          alert("success");
          localStorage.setItem("currentUser", JSON.stringify(user));
          dispatch(onLogin(user));
          navigate("/");
        } else {
          alert("Your user ID or password is incorrect");
          setPasswordValue("");
        }
      } else {
        alert("Your user ID or password is incorrect");
        setPasswordValue("");
      }
    }
  };
  //===============HANDLE KEYBOARD================
  const keyDownHandle = (e) => {
    if (e.key === "enter") {
      submitHandle();
    }
  };
  return (
    <div onKeyDown={keyDownHandle} className={styles["sign-up"]}>
      <div className={styles["center-box"]}>
        <h1>Sign In</h1>
        <form onSubmit={submitHandle}>
          <input
            type="email"
            placeholder="Email"
            onChange={emailHandle}
            onBlur={checkEmailValue}
            value={emailValue}
          />
          {emailError !== "" && <p>{emailError}</p>}
          <input
            type="password"
            placeholder="Password"
            onChange={passwordHandle}
            onBlur={checkPasswordValue}
            value={passwordValue}
          />
          {passwordError !== "" && <p>{passwordError}</p>}

          <button>SIGN IN</button>
        </form>
        <p>
          Create an account?{" "}
          <span
            onClick={() => {
              navigate("/register");
            }}
          >
            Click
          </span>
        </p>
      </div>
      <img src={image} alt="" />
    </div>
  );
}
