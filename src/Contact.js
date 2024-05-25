// Contact.js

import React, { useState } from 'react';

const Contact = () => {
  const [userData, setUserData] = useState({
    Name: '', Email: '', Number: '', Subject: '', Message: ''
  });
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Corrected from e.preaventDefault() to e.preventDefault()
    const { Name, Email, Number, Subject, Message } = userData;

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json' // Corrected 'Content-type': 'aplication/json'
      },
      body: JSON.stringify({ Name, Email, Number, Subject, Message })
    };

    try {
      const res = await fetch('https://my-portfolio-1d042-default-rtdb.firebaseio.com/Messages.json', options);
      console.log(res);
    } catch (error) {
      console.error("Error submitting the form:", error);
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">
        Contact <span>Me!</span>
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input
            type="text"
            placeholder="Full name"
            name="Name"
            value={userData.Name}
            onChange={handleChange}
          />
          <input
            type="email"
            placeholder="Email Address"
            name="Email"
            value={userData.Email}
            onChange={handleChange}
          />
        </div>
        <div className="input-box">
          <input
            type="number"
            placeholder="Mobile Number"
            name="Number"
            value={userData.Number}
            onChange={handleChange}
          />
          <input
            type="text"
            placeholder="Email Subject"
            name="Subject"
            value={userData.Subject}
            onChange={handleChange}
          />
        </div>
        <textarea
          cols="30"
          rows="10"
          placeholder="Your Message"
          name="Message"
          value={userData.Message}
          onChange={handleChange}
        ></textarea>
        <input type="submit" value="Send Message" className="btn" />
      </form>
    </section>
  );
};

export default Contact;
