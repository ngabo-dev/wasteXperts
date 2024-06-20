import React from 'react';
import './Home.css'; // Import the CSS file

function Home() {
  return (
    <div className="home-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="container">
          <div className="logo">Waste Management System</div>
          <ul className="nav-links">
            <li><a href="#home">HOME</a></li>
            <li><a href="#about">ABOUT</a></li>
            <li><a href="#services">OUR SERVICES</a></li>
            <li><a href="#contact">CONTACT</a></li>
          </ul>
          <div className="login-signup">
            <a href="/signin"><button>Login/Signup</button></a>
          </div>
        </div>
      </nav>

      {/* Header */}
      <header className="header">
        <div className="container">
          <h1>Welcome to the Waste Management System!</h1>
          <p>This platform helps you manage your waste efficiently and reduce your environmental impact.</p>
        </div>
      </header>

      {/* Main Content Section */}
      <section className="main-content">
        <div className="container">
          <h2>Explore Our Services</h2>
          <p>Learn how we can help you handle your waste responsibly.</p>
          <div className="services-grid">
            {/* New Services */}
            <div className="service">
              <h3>Waste Collection and Disposal</h3>
              <p>Regular and efficient collection of residential, commercial, and industrial waste, ensuring proper disposal according to regulations.</p>
            </div>
            <div className="service">
              <h3>Recycling Services</h3>
              <p>Facilitation of recycling programs to sort, process, and recycle various materials, reducing landfill waste and promoting sustainability.</p>
            </div>
            <div className="service">
              <h3>Composting</h3>
              <p>Processing organic waste into compost, which can be used to enrich soil and reduce the need for chemical fertilizers.</p>
            </div>
            <div className="service">
              <h3>Hazardous Waste Management</h3>
              <p>Proper handling and disposal of hazardous materials to protect public health and the environment, adhering to strict safety protocols.</p>
            </div>
            <div className="service">
              <h3>Waste-to-Energy Solutions</h3>
              <p>Conversion of waste into energy through technologies like incineration or anaerobic digestion, contributing to renewable energy production.</p>
            </div>
            <div className="service">
              <h3>Consulting and Education</h3>
              <p>Providing expertise, training, and educational programs on waste reduction, recycling practices, and sustainable waste management strategies for communities and businesses.</p>
            </div>
            {/* Existing Services */}
            <div className="service">
              <h3>Waste Sorting Guide</h3>
              <p>Learn how to properly sort your waste for recycling and disposal.</p>
              <button>Explore Sorting Guide</button>
            </div>
            <div className="service">
              <h3>Schedule a Pickup</h3>
              <p>Schedule a convenient pickup for your recyclable and non-recyclable waste.</p>
              <button>Schedule Pickup</button>
            </div>
            <div className="service">
              <h3>Find Recycling Centers</h3>
              <p>Locate nearby recycling centers to drop off your recyclable materials.</p>
              <button>Find Recycling Centers</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-section">
              <h3>Quick Links</h3>
              <ul>
                <li><a href="#home">Home</a></li>
                <li><a href="#services">Our Services</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Our Services</h3>
              <ul>
                <li>Waste Collection and Recycling</li>
                <li>Resource Management through Intelligent Technologies</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>About</h3>
              <ul>
                <li>About Us</li>
                <li>Our Team</li>
              </ul>
            </div>
            <div className="footer-section">
              <h3>Contact Us</h3>
              <ul>
                <li>Contact Information</li>
                <li>FAQs</li>
                <li>Emails</li>
                <li>Be the first to know our new info</li>
              </ul>
              <form className="email-subscribe">
                <input type="email" placeholder="Enter Email Address" />
                <button>Subscribe</button>
              </form>
            </div>
          </div>
          <div className="copyright">
            <p>&copy; 2024 All rights reserved | Made by WasteXpertdesigner</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;