import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import CultureCore from "./components/CultureCore";
import Challenges from "./components/Challenges";
import Solutions from "./components/Solutions";
import Technologies from "./components/Technologies";
import OurWork from "./components/OurWork";
import OurPartner from "./components/OurPartner";
import Goals1 from "./components/Goals1";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <CultureCore />
      <Challenges />
      <Solutions/>
      <Technologies/>
      <Goals1/>
      <OurWork/>
      <OurPartner/>
      <ContactUs/>
      <Footer/>
    </>
  );
}
