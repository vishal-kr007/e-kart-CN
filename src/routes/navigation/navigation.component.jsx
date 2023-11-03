import "./navigation.styles.scss";
import React from "react";

import { Outlet, Link } from "react-router-dom";

import CartIcon from "../../components/cart-icon/cart-icon.component";
function Navigation() {
  return (
    <>
      <div className="navBar">
        <div className="sectionOne">
          <Link className="navLinks" to="allProds">
            <h2 className="logo">e-Kart</h2>
          </Link>
          <Link className="navLinks" to="allProds">
            Products
          </Link>
          <Link className="navLinks" to="addProd">
            Add Product
          </Link>
        </div>

        <div className="sectionTwo">
          <Link className="navLinks" to="cart">
            <CartIcon />
          </Link>

          <div className="navItem">
            <img
              className="avatar"
              src="https://t3.ftcdn.net/jpg/06/34/25/66/240_F_634256699_b8fEg1ecPuC7p2rFl6EgyazAHkDrnNxw.jpg"
              alt=""
            />
            <p className="name">vishal verma</p>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default Navigation;
