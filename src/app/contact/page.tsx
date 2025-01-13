import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-pacifico",
  weight: "400",
});

export default function Contact() {
  return (
    <div className="home-container">
      <Navbar />
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", padding: "2rem" }}>
        <h1 style={{ fontSize: "64px" }} className={`welcome ${pacifico.variable}`}>Contact Me!</h1>
        <Image src="/logo.png" alt="logo" width={300} height={300} />
        {/* add socials here like instagram, email, phone number */}
        
      </div>
    </div>
  );
}
