import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import AboutCard from "./components/AboutCard";
import Challenges from "./components/Challenges";
import Solutions from "./components/Solutions";
import Technologies from "./components/Technologies";

export default function Home() {
  return (
    <>
      <Hero />
      <AboutUs />
      <AboutCard />
      <Challenges />
      <Solutions/>
      <Technologies/>
    </>
  );
}
