import { LOGO_URL } from "../utils/constants";
import { useState } from "react";

const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header Rendered");

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li> 🛒 Cart</li>
          <li>
            <button
              className="login"
              onClick={() => {
                btnNameReact == "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
                console.log(setBtnNameReact);
              }}
            >
              {btnNameReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
