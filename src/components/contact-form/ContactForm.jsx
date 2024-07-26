"use client";

import { useState, useEffect } from "react";
import Button from "../button/Button";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState("");

  return (
    <form className="flex flex-col space-y-8">
      <div className="form_field">
        <label for="name">Name</label>
        <input
          className="text_input"
          type="text"
          id="name"
          name="name"
          required
          placeholder="Enter your name..."
        />
      </div>
      <div className="form_field">
        <label for="email">Email</label>
        <input
          className="text_input"
          type="text"
          id="email"
          name="email"
          required
          placeholder="Enter your email..."
        />
      </div>
      <div className="form_field ">
        <label for="message">Message</label>
        <textarea
          className="text_area"
          type="text"
          id="message"
          name="message"
          required
          placeholder="Enter your message..."
        />
      </div>

      <Button />
    </form>
  );
};

export default ContactForm;
