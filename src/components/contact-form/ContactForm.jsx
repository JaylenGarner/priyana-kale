"use client";

import { useState, useEffect } from "react";
import Button from "../button/Button";
import { motion } from "framer-motion";
import { contactFormAnimationVariants } from "./helpers";
import { successMessageAnimationVariants } from "./helpers";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // form logic
    setSubmitted(true);
    setIsLoading(false);
  };

  return (
    <>
      {submitted ? (
        <motion.p
          className="text-xl"
          variants={successMessageAnimationVariants}
          initial="initial"
          animate="animate"
        >
          Your message has been recieved, I will be in touch with you shortly.
        </motion.p>
      ) : (
        <motion.form
          onSubmit={handleSubmit}
          className="flex flex-col space-y-8 "
          variants={contactFormAnimationVariants}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          <div className="form_field">
            <label for="name">Name</label>
            <input
              className="text_input"
              type="text"
              id="name"
              name="name"
              required
              placeholder="Enter your name..."
              value={name}
              onChange={(e) => setName(e.target.value)}
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
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form_field ">
            <label for="message">Message</label>
            <textarea
              className="text_area"
              type="textarea"
              id="message"
              name="message"
              required
              placeholder="Enter your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>

          <Button isLoading={isLoading} />
        </motion.form>
      )}
    </>
  );
};

export default ContactForm;
