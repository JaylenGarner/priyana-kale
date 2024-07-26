"use client";

import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Spacer from "@/components/spacer/Spacer";

export default function Home() {
  return (
    <main>
      <Hero firstWord={"Priyana"} secondWord={"Kale"} />
      <Spacer />
      <About />
    </main>
  );
}
