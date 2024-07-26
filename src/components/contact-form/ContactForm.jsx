"use client";

import { useState } from "react";
import Button from "../button/Button";
import { motion } from "framer-motion";
import { contactFormAnimationVariants } from "./helpers";
import { successMessageAnimationVariants } from "./helpers";

import axios from "axios";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setIsLoading(true);

    try {
      const response = await axios.post("/api/email", {
        submitter: name,
        email,
        message,
      });
    } catch (error) {
      console.log("error");
      setError(true);
    }

    setSubmitted(true);
    setIsLoading(false);
  };

  return (
    <>
      {submitted || error ? (
        <motion.p
          className="text-xl"
          variants={successMessageAnimationVariants}
          initial="initial"
          animate="animate"
        >
          {submitted && !error
            ? "Your message has been recieved, I will be in touch with you shortly."
            : "There was an error, please try again later. "}
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
            <label htmlFor="name">Name</label>
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
            <label htmlFor="email">Email</label>
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
            <label htmlFor="message">Message</label>
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
