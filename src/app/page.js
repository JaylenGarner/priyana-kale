"use client";

import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import Gallery from "@/components/gallery/Gallery";
import Spacer from "@/components/spacer/Spacer";

export default function Home() {
  return (
    <main>
      <Hero firstWord={"Priyana"} secondWord={"Kale"} />
      <Spacer />
      <About />
      <Spacer />
      <Gallery />
      <Spacer />
    </main>
  );
}
