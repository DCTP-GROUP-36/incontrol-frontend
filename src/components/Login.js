import { useRef, useState, useEffect } from "react";
import {Link } from 'react-router-dom';
import {
  faCheck,
  faTimes,
  faInfoCircle,
} from "@fortawesome/free-solid-svg-icons";
import {
  FaDribbbleSquare,
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
  FaWhatsappSquare,
  FaPhoneSquareAlt,
  FaEnvelope,
  FaLinkedin,
} from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "../middlewares/axios";
import "../CSS/registerForm.css";
import Register from "./RegisterPage";

const LOGIN_URL = "/login";

const Login = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [email, setEmail] = useState("");
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [pwdFocus, setPwdFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ email, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );
      console.log(response?.data);
      console.log(response?.accessToken);
      console.log(JSON.stringify(response));
      setSuccess(true);
      //clear state and controlled inputs
      //need value attrib on inputs for this
      setEmail("");
      setPwd("");
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Wrong Login Credentials");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <>
      (
        <section className="register-section-container">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <div className="register-form-container  form-logo-div">
            <img src="../../incontrol-logo.png" alt="incontrol-logo"></img>
          </div>
          <div className="register-form-container">
            <h5>Login</h5>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              id="email"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
              aria-describedby="uidnote"
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
              placeholder="Email"
            />

            <input
              type="password"
              id="password"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
              aria-describedby="pwdnote"
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
              placeholder="password"
            />
            <p
              id="pwdnote"
              className={errMsg ? "errmsg" : "offscreen"}
            >
              <FontAwesomeIcon icon={faInfoCircle} />
              {errMsg}
            </p>

            <button
              disabled={false}
            >
            Login
            </button>
          </form>
          <p className="already-registered">
            Not registered?
            <br />
            <span className="line">
              {/*put router link here*/}
              <Link to="/register-component"></Link>
            </span>
          </p>
          <div>
            <p className="already-registered">------ Or Continue With-------</p>
            <div>
              <a href="www.facebook.com" >
                <FaFacebookSquare size={30} />
              </a>
              <a href="www.instagram.com" >
                <FaInstagram size={30} />
              </a>
              <a href="www.twitter.com" >
                <FaTwitterSquare size={30} />
              </a>
            </div>
          </div>
        </section>
      )
    </>
  );
};

export default Login;
