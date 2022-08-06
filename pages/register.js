import React, { useState, useRef } from "react";
import Styles from "../styles/Login_Register.module.css";
import Image from "next/image";
import Link from "next/link";
import { useAuth } from "../context/AuthContext";
import { getDatabase, set, ref } from "firebase/database";
import { doc, setDoc } from "firebase/firestore";
import { database } from "../config/firebase";

let user = 1;
let userRealtime = 1;
// real-time database *****************************

function writeUserData(userRealtime, email, password) {
  const db = getDatabase();
  set(ref(db, `users/ +${userRealtime++}`), {
    email: email,
    password: password,
  });
}
// *************************************************

const register = () => {
  const { registerUser } = useAuth();
  const enteredEmail = useRef();
  const enteredPassword = useRef();
  const enteredRepeatPassword = useRef();

  // firestore database *******************************************
  const addRegisterData = async () => {
    try {
      const docRef = await setDoc(
        doc(database, "RegisterUsers", `User ${user++}`),
        {
          email: enteredEmail.current.value,
          password: enteredPassword.current.value,
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  // ***************************************************************
  const handleRegister = async (e) => {
    e.preventDefault();
    addRegisterData();
    const email = enteredEmail.current.value;
    const password = enteredPassword.current.value;
    writeUserData(userRealtime, email, password);
    try {
      await registerUser(email, password);
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
            <h2>Register</h2>
          </div>
          <div className={`${Styles.access_dashboard} access_dashboard`}>
            <h5>Access to our Dashboard</h5>
          </div>
          <h6 className={Styles.email}>Email</h6>
          <div className={Styles.input_div}>
            <input
              type="text"
              className={Styles.login_input}
              ref={enteredEmail}
            />
          </div>
          <h6 className={`${Styles.password} ${Styles.email}`}>Password</h6>
          <input
            type="password"
            className={Styles.login_input}
            ref={enteredPassword}
          />
          <h6 className={`${Styles.password} ${Styles.email}`}>
            Repeat Password
          </h6>
          <input
            type="password"
            className={Styles.login_input}
            ref={enteredRepeatPassword}
          />
          <Link href="/">
            <div className={Styles.login_button_div}>
              <button className={Styles.login_button} onClick={handleRegister}>
                Register
              </button>
            </div>
          </Link>
          <h6 className={`${Styles.footer} footer`}>
            Already have an account?{" "}
            <span>
              <a href="/login">Login</a>
            </span>
          </h6>
        </div>
      </div>
    </>
  );
};

export default register;
