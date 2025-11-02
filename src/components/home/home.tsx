import { About } from "@/components/about";
import { Contact } from "@/components/contact";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Story } from "@/components/story";

const Home = () => {
  return (
    <div className="relative min-h-screen w-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Story /> 
        <Contact />
      </main>
    </div>
  );
};
export default Home;
