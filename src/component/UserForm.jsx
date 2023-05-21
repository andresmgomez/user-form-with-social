import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaFacebook,
  FaGoogle,
} from "react-icons/fa";

import "./UserForm.css";

function FormDesign() {
  return (
    <div className="form-area">
      <div className="container-form">
        <div className="wrapper-form">
          <form className="form">
            <div className="form-title">
              <h1>Form Name</h1>
            </div>
            <div className="form-field">
              <input
                className="input-effect"
                type="text"
                name="username"
                placeholder="Username"
              />
              <span className="focus-effect"></span>
              <span className="icon-effect">
                <FaUser />
              </span>
            </div>
            <div className="form-field">
              <input
                className="input-effect"
                type="text"
                name="email"
                placeholder="Your Email"
              />
              <span className="focus-effect"></span>
              <span className="icon-effect">
                <FaEnvelope />
              </span>
            </div>
            <div className="form-field">
              <input
                className="input-effect"
                type="text"
                name="password"
                placeholder="Your Password"
              />
              <span className="focus-effect"></span>
              <span className="icon-effect">
                <FaLock />
              </span>
            </div>
            <div className="form-button">
              <button>Send</button>
            </div>
            <div className="form-action">
              <span>Or Login with</span>
            </div>
            <Link to="/" className="social-buttons">
              <FaFacebook className="btn-facebook" /> Facebook
            </Link>
            <Link to="/" className="social-buttons">
              <FaGoogle className="btn-google" /> Google
            </Link>
          </form>
        </div>
      </div>
    </div>
  );
}

export default FormDesign;
