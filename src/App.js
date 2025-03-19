import React, { useState } from "react";
import "./App.css";

const App = () => {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "about":
        return <AboutPage />;
      case "customers":
        return <CustomerPage />;
      case "services":
        return <ServicesPage />;
      case "contact":
        return <ContactPage />;
      default:
        return <LandingPage setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="app-container">
      <header className="header">
        <nav className="nav">
          <h1 className="logo">PharmaCo</h1>
        </nav>
      </header>

      <ul className="linksnav">
        <li>
          <button onClick={() => setActivePage("home")}>Home</button>
        </li>
        <li>
          <button onClick={() => setActivePage("about")}>About</button>
        </li>
        <li>
          <button onClick={() => setActivePage("customers")}>Customers</button>
        </li>
        <li>
          <button onClick={() => setActivePage("services")}>Services</button>
        </li>
        <li>
          <button onClick={() => setActivePage("contact")}>Contact</button>
        </li>
      </ul>
      {renderPage()}
    </div>
  );
};

const LandingPage = ({ setActivePage }) => {
  const [activeTab] = useState("about");

  return (
    <div className="main ">
      {/* <h1 className="title">Welcome to PharmaCo</h1> */}
      <div className="tab-buttons">
        {/* <button
            className={activeTab === "about" ? "active" : ""}
            onClick={() => setActiveTab("about")}
          >
            About
          </button>
          <button
            className={activeTab === "customers" ? "active" : ""}
            onClick={() => setActiveTab("customers")}
          >
            Customers
          </button> */}
      </div>
      {activeTab === "about" ? <HomePage /> : <CustomerPage />}
    </div>
  );
};

const HomePage = () => (
  <div>
    <div className="box">
      <h1>PharmaCO</h1>
      <p style={{ color: "#eeeeee" }}>Leading in top in the market</p>
    </div>
    <div className="content">
      <h2 className="section-title">PharmaCo</h2>

      <img className="img" src="j.avif" height="350px" width="100%" alt="#" />

      <p className="description">
        We are dedicated to providing quality pharmaceutical products for a
        healthier world. Our mission is to improve lives by delivering trusted
        healthcare solutions.
      </p>
      <p className="description">
        We are dedicated to providing quality pharmaceutical products for a
        healthier world. Our mission is to improve lives by delivering trusted
        healthcare solutions.
      </p>
    </div>
  </div>
);
const AboutPage = () => (
  <div className="content">
    <h2 className="section-title">About Us</h2>
    <img className="img" src="abt.jpg" height="350px" width="100%" alt="#" />

    <p className="description">
      We are dedicated to providing quality pharmaceutical products for a
      healthier world. Our mission is to improve lives by delivering trusted
      healthcare solutions.
    </p>
    <p className="description">
      We are dedicated to providing quality pharmaceutical products for a
      healthier world. Our mission is to improve lives by delivering trusted
      healthcare solutions.
    </p>
  </div>
);

const CustomerPage = () => (
  <div className="content">
    <h2 className="section-title">Our Customers</h2>
    <img className="img" src="c.webp" height="350px" width="100%" alt="#" />
    <p className="description">
      At PharmaCo, we value our customers and ensure their satisfaction with our
      premium products. Join our community for exceptional healthcare solutions.
    </p>
  </div>
);

const ServicesPage = () => (
  <div className="content">
    <h2 className="section-title">Our Services</h2>

    <img className="img" src="ser.jpg" height="350px" width="100%" alt="#" />

    <p className="description">
      We offer a wide range of pharmaceutical solutions, including research,
      manufacturing, and distribution of quality medicines. Our services ensure
      efficient healthcare delivery.
    </p>
  </div>
);

const ContactPage = () => (
  <div className="content">
    <h2 className="section-title">Contact Us</h2>

    <img className="img" src="cont.webp" height="350px" width="100%" alt="#" />
    <p className="description">
      Have questions or need support? Reach out to our customer care team at
      support@pharmaco.com or call us at +1-800-123-4567. We’re here to help!
    </p>

    <br />
    <h3> Call Us :+91 12345689 </h3>
  </div>
);

export default App;
