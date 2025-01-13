"use client";
import Navbar from "@/components/Navbar";
import "../home.css"
import "./style.css"
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
    subsets: ["latin"],
    display: "swap",
    weight: "400",
    variable: "--font-pacifico",
});

export default function Order() {
    return (
        <div className="home-container container">
            <Navbar />
            <main>
                <section id="order" className="order">
                    <form className="order-form">                                                                                   
                <h2 style={{ textAlign: "center", fontSize: "48px", color: "#4a4a4a                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     " }} className={`${pacifico.className}`}>Place Your Order</h2>
                        <input type="text" placeholder="Your Name" required />
                        <input type="email" placeholder="Your Email" required />
                        <input type="tel" placeholder="Your Phone Number" required />
                        <input type="text" placeholder="Your Address" required />
                        <input type="text" placeholder="Product Name" required />
                        <textarea placeholder="Optional Notes"></textarea>
                        <button type="submit">Place Order</button>
                    </form>
                </section>
            </main>

        </div>
    );
}