import styles from "./SignUp.module.css";
import image from "../../images/banner1.jpg";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const navigate = useNavigate();
  //===============FULL NAME INPUT================
  const [nameValue, setNameValue] = useState("");
  const [nameError, setNameError] = useState("");
  const checkNameValue = () => {
    if (nameValue === "") {
      setNameError("Please input name");
    } else {
      setNameError("");
    }
  };
  const nameHandle = (e) => {
    setNameValue(e.target.value);
  };
  //===============EMAIL INPUT================
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
  //===============PASSWORD INPUT================
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
  //===============PHONE INPUT================
  const [telValue, setTelValue] = useState("");
  const [telError, setTelError] = useState("");
  const checkTelValue = () => {
    if (telValue === "") {
      setTelError("Please input phone");
    } else {
      setTelError("");
    }
  };
  const telHandle = (e) => {
    setTelValue(e.target.value);
  };
  //==============HANDLE SUBMIT FORM=================
  const submitHandle = (e) => {
    e.preventDefault();
    checkNameValue();
    checkEmailValue();
    checkPasswordValue();
    checkTelValue();
    if (
      nameValue !== "" &&
      emailValue !== "" &&
      passwordValue.length >= 8 &&
      telValue !== ""
    ) {
      setNameError("");
      setEmailError("");
      setPasswordError("");
      setTelError("");
      //CHECK LOCAL STORAGE
      if (localStorage.getItem("userArray")) {
        let userArray = JSON.parse(localStorage.getItem("userArray"));
        const user = userArray.find((x) => {
          return x.email === emailValue;
        });
        if (!user) {
          userArray.push({
            name: nameValue,
            email: emailValue,
            password: passwordValue,
            tel: telValue,
          });
          try {
            //SAVE USER TO LOCAL STORAGE
            localStorage.setItem("userArray", JSON.stringify(userArray));
            alert("success");
            navigate("/login");
          } catch (e) {
            console.log(e.message);
          }
        } else {
          alert("Email already exists");
        }
      } else {
        let userArray = [];
        userArray.push({
          name: nameValue,
          email: emailValue,
          password: passwordValue,
          tel: telValue,
        });
        try {
          localStorage.setItem("userArray", JSON.stringify(userArray));
          alert("success");
          navigate("/login");
        } catch (e) {
          console.log(e.message);
        }
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
        <h1>Sign Up</h1>
        <form onSubmit={submitHandle}>
          <input
            type="text"
            placeholder="Full Name"
            onChange={nameHandle}
            onBlur={checkNameValue}
            value={nameValue}
          />
          {nameError !== "" && <p>{nameError}</p>}
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
          <input
            type="tel"
            placeholder="Phone"
            onChange={telHandle}
            onBlur={checkTelValue}
            value={telValue}
          />
          {telError !== "" && <p>{telError}</p>}
          <button>SIGN UP</button>
        </form>
        <p>
          Login?{" "}
          <span
            onClick={() => {
              navigate("/login");
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
