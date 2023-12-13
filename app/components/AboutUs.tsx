import Image from "next/image";
import CultureCore from "./CultureCore";

const AboutUs = () => {
  return (
    <>
      <section id="about" className="w-full px-4 sm:px-6 md:px-8 py-8 md:py-16 lg:py-24">
        <div className="container mx-auto max-w-7xl lg:grid grid-cols-1 lg:grid-cols-3 gap-8 ">
          <div className="lg:col-span-2 p-5">
            <h3 className="lg:text-left text-center font-bold text-primary text-xl md:text-2xl lg:text-2xl mb-3 md:mb-5">
              Who we are?
            </h3>
            <h1 className="lg:text-left text-center font-bold text-lg md:text-4xl lg:text-4xl mb-6 md:mb-11">
              We are just a bunch of practitioners working in the{" "}
              <span className="text-pink">technology industry.</span>
            </h1>
            <p className="text-sm md:text-base lg:text-base ">
              PT. Layanan Kolaborasi Global is a leading IT outsourcing solution
              provider based in Denpasar, Bali. Our company specializes in
              delivering innovative and reliable IT services to businesses and
              organizations worldwide. With a team of highly skilled
              professionals and cutting-edge technology, we cater to a diverse
              range of industries, helping our clients optimize their
              operations, enhance efficiency, and reduce costs through tailored
              IT solutions.
            </p>
          </div>
          <div className="lg:col-span-1 lg:flex hidden p-5">
            <Image
              src={"/assets/Group 28.svg"}
              width={440}
              height={338}
              alt="Group28"
              className=""
            />
          </div>
        </div>
      </section>
      
      <CultureCore />
    </>
  );
};

export default AboutUs;
