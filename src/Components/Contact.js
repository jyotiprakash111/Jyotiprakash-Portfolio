import React from "react";

const Contact = ({ data }) => {
  if (!data) return null;

  const { name, address, phone, email, contactmessage } = data;
  const { street, city, state, zip } = address;

  return (
    <section id="contact">
      <div className="widget widget_contact">
        <h4>Address and Phone</h4>
        <p className="address">
          {name}
          <br />
          {street} <br />
          {city}, {state} {zip}
          <br />
          <span>{phone}</span>
        </p>
      </div>

      <div className="float-container">
        <div className="eight row">
          <div id="message-warning"> Error boy</div>
          <div id="message-success">
            <i className="fa fa-check"></i> Your message was sent, thank you!
            <br />
          </div>
        </div>

        <div className="widget widget_tweets">
          <h4 className="widget-title">Latest Tweets</h4>
          <ul id="twitter">
            <li>
              <span>
                This is Photoshop's version of Lorem Ipsum. Proin gravida nibh
                vel velit auctor aliquet. Aenean sollicitudin, lorem quis
                bibendum auctor, nisi elit consequat ipsum
                <a href="#">http://t.co/CGIrdxIlI3</a>
              </span>
              <b>
                <a href="#">2 Days Ago</a>
              </b>
            </li>
            <li>
              <span>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi
                <a href="#">http://t.co/CGIrdxIlI3</a>
              </span>
              <b>
                <a href="#">3 Days Ago</a>
              </b>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Contact;
