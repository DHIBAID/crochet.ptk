"use client";

// import components
import Navbar from "@/components/Navbar";
import TestimonialSlider from "../components/testimonials/testimonials";
import ImageSlider from "../components/slider/slider";
import Products from "../components/products/products";

import "./home.css";

export default function Home() {
  return (
    <div className="container">
      <Navbar />

      <main>
        <ImageSlider />

        {/* <section id="about" className="about headings">
          <h2 className="headings">About Us</h2>
          <p>
            At <strong>Crochet Ptk</strong>, we take pride in crafting unique,
            handmade crochet creations. Every piece is made with care and
            attention to detail, perfect for gifts or personal use.
          </p>
        </section> */}

        <Products />

        <section id="testimonials" className="testimonials">
          <h2 style={{ textAlign: "center" }} className="headings">
            What Our Customers Say
          </h2>
          <TestimonialSlider />
        </section>
      </main>

      <footer className="footer">
        <p>
          <br />
          Contact us:
          <br />
          Email: verygood@email.com
          <br />
          Instagram: @crochetptk
          <br />
          Phone: +1 (123) 456-7890
          <br />
          <br />
          {new Date().getFullYear()} Crochet Ptk. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
