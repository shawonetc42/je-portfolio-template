import Image from "next/image";
import NavigationMenu from "./components/Header Component/NavigationMenu";
import Services from "./components/Services";
import ServiceList from "./components/Services Section/ServiceList";
import Works from "./components/Works";
import Resume from "./components/Resume";
import Skills from "./components/Skills";
import Testimonials from "./components/Testimonials";
import Blogs from "./components/Blogs";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div>
      <NavigationMenu />
      <Services />
      <ServiceList />
      <Works />
      <Resume />
      <Skills />
      <Testimonials />
      <Blogs />
      <Contact />
      <Footer />
    </div>
  );
}
