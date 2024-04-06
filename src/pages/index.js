import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/Components/header/Header";
import Login from "@/Components/Login/Login";
import Cardimg from "@/Components/cardimg/Cardimg";
import Card2 from "@/Components/cardimg/Card2";
import Card3 from "@/Components/card3/card3";
import Footer from "@/Components/footer/Footer";
import Section from "@/Components/section/section";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <div>
      <div className="App">
        <Header />
        <Login />
      </div>
      <div style={{ display: "flex" }}>
        <Cardimg />
      </div>
      <div>
        <Card2 />
      </div>
      <div className="card3">
        <Card3 />
      </div>
      <div>
        <Section />
      </div>
      <div>
        <Footer />
      </div>
    </div>
    </>
  );
}
