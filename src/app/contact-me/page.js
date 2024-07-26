"use client";

import Hero from "@/components/hero/Hero";
import ContactForm from "@/components/contact-form/ContactForm";
import Spacer from "@/components/spacer/Spacer";

const Contact = () => {
  return (
    <main>
      <Hero firstWord={"Contact"} secondWord={"Me"} />
      <Spacer />
      <ContactForm />
      <Spacer />
    </main>
  );
};

export default Contact;
