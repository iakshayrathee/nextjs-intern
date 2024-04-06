import AddNewService from "@/components/AddNewService";
import Footer from "@/components/Footer";
import Landing from "@/components/Landing";
import Navbar from "@/components/Navbar";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
   <Navbar/>
   <Landing/>
   <Services/>
   <AddNewService/>
   <Testimonials/>
   <Footer/>
    </main>
  );
}
