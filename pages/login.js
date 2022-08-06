import React, { useRef } from "react";
import Styles from "../styles/Login_Register.module.css";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { database } from "../config/firebase";
import { getDatabase, ref, child, get } from "firebase/database";

// real-time database ***************************************

const dbRef = ref(getDatabase());
get(child(dbRef, `users/`))
  .then((snapshot) => {
    if (snapshot.exists()) {
      console.log(snapshot.val());
    } else {
      console.log("No data available");
    }
  })
  .catch((err) => {
    console.log(err);
  });
// *********************************************************

// firebase databse *****************************************

const loginData = async () => {
  const query = await getDocs(collection(database, "RegisterUsers"));
  query.forEach((doc) => {
    console.log(doc.data({}));
  });
};
//  ***********************************************************

const login = () => {
  const { loginUser } = useAuth();
  const enteredEmail = useRef();
  const enteredPassword = useRef();

  const handleLogin = async (e) => {
    e.preventDefault();
    loginData();
    const email = enteredEmail.current.value;
    const password = enteredPassword.current.value;
    try {
      await loginUser(email, password);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <div className={Styles.apply_jobs}>
        <button className={Styles.apply_jobs_button}>Apply Job</button>
      </div>
      <div className={Styles.loginLogo}>
        <Image src="/logoLarge.png" height={100} width={100}></Image>
      </div>
      <div className={Styles.login_wrapper}>
        <div className={Styles.login_form}>
          <div className={`${Styles.Login} Login`}>
            <h2>Login</h2>
          </div>
          <div className={`${Styles.access_dashboard} access_dashboard`}>
            <h5>Access to our Dashboard</h5>
          </div>
          <h6 className={Styles.email}>Email Address</h6>
          <div className={Styles.input_div}>
            <input
              type="text"
              className={Styles.login_input}
              ref={enteredEmail}
            />
          </div>
          <div className={Styles.password_div}>
            <h6 className={`${Styles.password}`}>Password</h6>
            <a href="#">
              <h6 className={`${Styles.password} ${Styles.forgot_password}`}>
                Forgot Password?
              </h6>
            </a>
          </div>
          <input
            type="password"
            className={Styles.login_input}
            ref={enteredPassword}
          />
          <Link href="/">
            <div className={Styles.login_button_div}>
              <button className={Styles.login_button} onClick={handleLogin}>
                Login
              </button>
            </div>
          </Link>
          <h6 className={`${Styles.footer} footer`}>
            Don't have an account yet?{" "}
            <span>
              <a href="/register">Register</a>
            </span>
          </h6>
        </div>
      </div>
    </>
  );
};

export default login;
