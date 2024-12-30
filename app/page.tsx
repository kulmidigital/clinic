import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Products from "@/components/Products";
import MissionVision from "@/components/MissionVision";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className='relative'>
      <Navbar />
      <Hero />
      <About />
      <Products />
      <MissionVision />
      <Contact />
      <Footer />
    </main>
  );
}
