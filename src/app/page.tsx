"use client";

// pages/index.tsx
import Head from "next/head";
import Navbar from "@/components/Navbar";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  display: "swap",
  weight: "400",
});

import "./home.css";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Crochet Ptk - Handmade Creations</title>
        <meta name="description" content="Explore beautiful handmade crochet creations at Crochet Ptk." />
      </Head>

      <Navbar />
      <header className="header">
        <div className="hero">
          <h1 className={`${pacifico.className}`}>Handmade Crochet Creations</h1>
          <p>Beautiful, cozy, and crafted with love.</p>
          <a href="#products" className="cta-button">Shop Now</a>
        </div>
      </header>

      <main>
        <section id="about" className="about">
          <h2>About Us</h2>
          <p>
            At <strong>Crochet Ptk</strong>, we take pride in crafting unique, handmade crochet creations.
            Every piece is made with care and attention to detail, perfect for gifts or personal use.
          </p>
        </section>

        <section id="products" className="products">
          <h2>Our Products</h2>
          <div className="product-grid">
            <div className="product-card">
              <img src="/product1.jpg" alt="Crochet Product 1" />
              <h3>Cozy Beanie</h3>
              <p>$25.00</p>
            </div>
            <div className="product-card">
              <img src="/product2.jpg" alt="Crochet Product 2" />
              <h3>Knitted Scarf</h3>
              <p>$30.00</p>
            </div>
            <div className="product-card">
              <img src="/product3.jpg" alt="Crochet Product 3" />
              <h3>Yarn Basket</h3>
              <p>$20.00</p>
            </div>
          </div>
        </section>

        <section id="contact" className="contact">
          <h2>Contact Us</h2>
          <p>Have a question or want a custom order? We'd love to hear from you!</p>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send Message</button>
          </form>
        </section>
      </main>

      <footer className="footer">
        <p>&copy; {new Date().getFullYear()} Crochet Ptk. All rights reserved.</p>
      </footer>
    </div>
  );
};
