import React, { useState } from "react";
import "./Login.css";
import Modal from "react-modal";

function Login() {
  const [modalIsopen, setModalIsOpen] = useState(true);

  return (
    <div>
      <Modal
        className="container_1"
        id="container"
        isOpen={modalIsopen}
        onRequestClose={() => {
          setModalIsOpen(false);
        }}
      >
        <div className="container_1">
          <div onClick={() => setModalIsOpen(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              id="close"
              height="30px"
              viewBox="0 0 24 24"
              width="36px"
              fill="#000000"
            >
              <path d="M0 0h24v24H0z" fill="none" />
              <path d="M14.59 8L12 10.59 9.41 8 8 9.41 10.59 12 8 14.59 9.41 16 12 13.41 14.59 16 16 14.59 13.41 12 16 9.41 14.59 8zM12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
            </svg>
          </div>
          <form>
            <div class="alert alert-success" role="alert" id="alert">
            Let's learn, share & inspire each other with our passion for computer engineering. Sign up now 🤘🏼
            </div>
            <div className="container">

            <div className = "container" id="heading">
                <span><h2>Create Account</h2></span>
                <span id="desktop-view">Already have an account? Sign In</span>
            </div>
            <div id="heading-1">
                <span id="info-container">
                    <input id="half" placeholder="First Name"/>
                    <input id="half" placeholder="Last Name"/><br/>
                    <input id="full" placeholder="Email"/><br/>
                    <input id="full" placeholder="Password"/><br/>
                    <input id="full" placeholder="Confirm password"/><br/><br/>
                    <div className="button">
            <button className="sign-in">Sign In</button><br/>
            <button className="facebook"><span><img className="f-icon" src="\images-removebg-preview.png" /></span>Sign in with facebook</button><br/>
            <button className="google"><span><img className="g-icon" src="\google-suite-icon-google-icon-LmAAJV07-removebg-preview.png"/></span>&nbsp; &nbsp;Sign in with google</button><br/>
           
            </div>
                </span>
                
                <span>
                    <img  className="login-img" src="\Screenshot_2021-09-12_110829-removebg-preview.png"/>
                </span>
            </div>
           
            </div>
          </form>
        </div>
      </Modal>
    </div>
  );
}

export default Login;
