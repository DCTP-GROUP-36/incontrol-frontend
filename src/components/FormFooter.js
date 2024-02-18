import {
    FaFacebookSquare,
    FaInstagram,
    FaTwitterSquare
  } from "react-icons/fa";

function FormFooter() {
  <>
    <div className="social-icons-container">
      <a href="www.facebook.com">
        <FaFacebookSquare size={30} />
      </a>
      <a href="www.instagram.com">
        <FaInstagram size={30} />
      </a>
      <a href="www.twitter.com">
        <FaTwitterSquare size={30} />
      </a>
    </div>
  </>;
}

export default FormFooter;