import React from "react";
import "./Contact.css";

const Contact = ({ data }) => {
  if (!data) return null;

  const { name, address, phone, email, contactmessage } = data;
  const { city, state } = address;

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <div className="contact-header">
          <h2>Get In Touch</h2>
          <p>{contactmessage || "Let's discuss your next project"}</p>
        </div>

        <div className="contact-content">
          {/* Contact Info */}
          <div className="contact-info">
            <div className="contact-item">
              <i className="fa fa-envelope"></i>
              <div>
                <h4>Email</h4>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fa fa-phone"></i>
              <div>
                <h4>Phone</h4>
                <a href={`tel:${phone}`}>{phone}</a>
              </div>
            </div>
            
            <div className="contact-item">
              <i className="fa fa-map-marker"></i>
              <div>
                <h4>Location</h4>
                <span>{city}, {state}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
