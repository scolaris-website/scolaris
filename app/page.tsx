import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problem from "./components/Problem";
import Solution from "./components/Solution";
import Modules from "./components/Modules";
import Pilots from "./components/Pilots";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-bg-deep text-white overflow-x-hidden">
      <Navbar />
      <Hero />
      <Problem />
      <Solution />
      <Modules />
      <Pilots />
      <CTA />
      <Footer />
    </main>
  );
}
