import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import logo from "../assets/images/logo/logo.png";
import { AuthContext } from '../contexts/AuthProvider';
import CartPage from '../shop/CartPage';

const Navitems = () => {
  const [menuToggle, setMenuToggle] = useState(false);
  const [socialToggle, setSocialToggle] = useState(false);
  const [headerFixed, setHeaderFixed] = useState(false);

  const { user, logOut } = useContext(AuthContext);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
      setHeaderFixed(true);
    } else {
      setHeaderFixed(false);
    }
  });

  return (
    <header
      className={`header-section style-4 ${
        headerFixed ? "header-fixed fadeInUp" : ""
      }`}
    >
      {/* header top start */}
      <div className={`header-top d-md-none ${socialToggle ? "open" : ""}`}>
        <div className="container">
          <div className="header-top-area">
            <Link to="/Signup" className="lab-btn me-3">
              <span>Create Account</span>
            </Link>
            <Link to="/login">Log in</Link>
          </div>
        </div>
      </div>

      {/* header Bottom */}
      <div className="header-bottom">
        <div className="container">
          <div className="header-wrapper">
            {/* Logo */}
            <div className="logo-search-acte">
              <div className="logo">
                <Link to="/">
                  <img src={logo} alt="" />
                </Link>
              </div>
            </div>

            {/* Menu Area */}
            <div className="menu-area">
              <div className="menu">
                <ul className={`lab-ul ${menuToggle ? "active" : ""}`}>
                  <li><Link to="/">Home</Link></li>
                  <li><Link to="/shop">Shop</Link></li>
                  <li><Link to="/blog">Blog</Link></li>
                  <li><Link to="/about">About</Link></li>
                  <li><Link to="/contact">Contact</Link></li>
                </ul>
              </div>

              {/* sign in & log in */}
              {user ? (
                <div className="user-menu">
                  <button onClick={() => setMenuToggle(!menuToggle)}>
                  <i class="icofont-panda-face"></i>
                  </button>
                  <ul className={`dropdown-menu ${menuToggle ? "show" : ""}`}>
                    <button className='btn'><li onClick={logOut}>Logout</li></button>
                    {/* <li>
                       <button><li> Cart</li></button> 
                    </li> */}
                    {/* <li>
                        <Link to="/profile" className="btn">Profile</Link>
                    </li>
                    <li>
                        <Link to="/orders" className="btn">Orders</Link>
                    </li> */}
                    </ul>
                </div>
              ) : (
                <>
                  <Link to="/sign-up" className="lab-btn me-3 d-none d-md-block">
                    Create Account
                  </Link>
                  <Link to="/login" className="d-none d-md-block">
                    Log-In
                  </Link>
                </>
              )}

              {/* menu toggler */}
              <div
                onClick={() => setMenuToggle(!menuToggle)}
                className={`header-bar d-lg-none ${menuToggle ? "active" : ""}`}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>

              {/* social toggler */}
              <div
                className={"ellepsis-bar d-md-none"}
                onClick={() => setSocialToggle(!socialToggle)}
              >
                <i className="icofont-info-square"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navitems;
