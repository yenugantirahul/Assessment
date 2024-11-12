import React from "react";

import "../AboutStyles/ContactDetails.css";
const ContactDeatils = () => {
  return (
    <div className="contact-details">
      <h3 className="contact-heading">Contact Details</h3>
      <div className="college-contacts">
        <h3 className="contact-name">
          Jawaharlal Nehru Technological University Kakinada
        </h3>
        <p className="contact-location">Kakinada, Andhra Pradesh 533003</p>
        <span className="phone-numbers">
          <p>Phone: +91 884 230 0900</p>
          <p>Fax: +91 884 230 0901</p>
        </span>
        <div className="contact-buttons">
          <button className="contact-us">Contact us</button>
          <button className="view-location">Views Location</button>
        </div>
      </div>
    </div>
  );
};

export default ContactDeatils;
