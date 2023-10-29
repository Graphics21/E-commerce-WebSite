import React from "react";
import "./Footer.scss";

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
          Welcome to Hot Store WebSite
We are a WebSite that specializes in providing high-quality products and services to our customers. Our team is made up of experienced professionals who are dedicated to delivering the best possible results.
At our WebSite, we believe in putting our customers first. We are committed to listening to your needs and providing you with personalized solutions that meet your unique requirements.
Thank you for considering our WebSite for your business needs. We look forward to working with you!
We are a WebSite that specializes in providing high-quality products and services to our customers. Our team is made up of experienced professionals who are dedicated to delivering the best possible results.
At our WebSite, we believe in putting our customers first. We are committed to listening to your needs and providing you with personalized solutions that meet your unique requirements.
Thank you for considering our WebSite for your business needs. We look forward to working with you!
   
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            number : +9055343434343
            email : omar.abdelhameed@st.uskudar.edu.tr
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <span className="logo">HotStore</span>
          <span className="copyright">
            © Copyright 2023.
          </span>
        </div>
        <div className="right">
          <img src="/img/payment.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Footer;