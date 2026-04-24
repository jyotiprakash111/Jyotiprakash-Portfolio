import React from "react";

const Contact = ({ data }) => {
  if (!data) return null;

  const { name, address, phone, email, contactmessage } = data;
  const { city, state } = address;

  return (
    <section id="contact" className="contact-section" data-reveal>
      <div className="contact-container">
        <div className="contact-header" data-reveal>
          <h2>Get In Touch</h2>
          <p>{contactmessage || "Let's discuss your next project"}</p>
        </div>

        <div className="contact-content" data-reveal>
          <div className="contact-info">
            <div className="contact-item" data-reveal>
              <i className="fa fa-envelope"></i>
              <div>
                <h4 className="text-header">Email</h4>
                <a href={`mailto:${email}`}>{email}</a>
              </div>
            </div>
            
            <div className="contact-item" data-reveal>
              <i className="fa fa-phone"></i>
              <div>
                <h4 className="text-header">Phone</h4>
                <a href={`tel:${phone}`}>{phone}</a>
              </div>
            </div>
            
            <div className="contact-item" data-reveal>
              <i className="fa fa-map-marker"></i>
              <div>
                <h4 className="text-header">Location</h4>
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
