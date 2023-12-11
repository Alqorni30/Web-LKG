import Image from "next/image";
import { IoCheckmarkOutline } from "react-icons/io5";


const Hero = () => {
  return (
    <>
      <section className="pt-28 text-center mb-20">
        <div className="mb-11 gap-3 flex flex-col justify-center items-center mx-auto">
          <h3 className="lg:text-3xl md:text-2xl text-xl font-bold text-pink">
            #Your Trusted
          </h3>
          <h1 className="font-bold lg:text-5xl md:text-4xl text-2xl ">
            IT Outsourcing Sollution
          </h1>
          <p className="lg:text-sm lg:w-1/3 w-80 text-xs">
            Just focus on carrying out the mission to achieve your business
            success, we help in business digitization.
          </p>
          <div className="flex lg:gap-6 gap-2">
            <p className="flex gap-1 justify-center items-center font-bold lg:text-xs text-[10px] ">
              <IoCheckmarkOutline />
              Project<span className="text-pink">Management</span>
            </p>
            <p className="flex gap-1 justify-center items-center font-bold lg:text-xs text-[10px]">
              <IoCheckmarkOutline />
              Human<span className="text-pink">Resources</span>
            </p>
            <p className="flex gap-1 justify-center items-center font-bold lg:text-xs text-[10px]">
              <IoCheckmarkOutline />
              Service
              <span className="text-pink">Functions</span>
            </p>
          </div>
        </div>
        <div className="grid justify-center items-center relative">
          <span className="z-0 lg:w-[380px] lg:h-[380px] w-[200px] h-[200px] bg-primary rounded-full"></span>
          <Image
            src={"/assets/BACKGROUND 1.svg"}
            alt="background"
            width={445}
            height={440}
            className="lg:w-[450px] lg:h-[430px] w-[250px] h-[240px] bg-transparent absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          />
          <Image
            src={"/assets/up.svg"}
            alt="up1"
            width={80}
            height={80}
            className="hidden lg:flex absolute z-10 lg:top-1/2 lg:right-80 lg:transform lg:-translate-x-1/2 lg:-translate-y-1/3 lg:ml-10 lg:mt-20"
          />
        </div>
        <div className="flex justify-end items-end absolute inset-0">
          <Image  
            src={"/assets/up.svg"}
            alt="up2"
            width={80}
            height={80}
            className="z-10 mb-10 lg:hidden fixed"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
