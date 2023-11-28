import Image from "next/image";
import { IoCheckmarkOutline } from "react-icons/io5";

const Hero = () => {
  return (
    <>
      <div className="pt-28 text-center">
        <div className="mb-14 gap-4 flex flex-col justify-center items-center mx-auto">
          <h3 className="lg:text-3xl md:text-2xl text-xl font-bold text-pink">
            #Your Trusted
          </h3>
          <h1 className="font-bold lg:text-5xl md:text-4xl text-2xl">
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
          <Image
            src={"/Rectangle9.png"}
            alt="alt"
            width={380}
            height={380}
            className="z-0 lg:w-[380px] lg:h-[380px] w-[200px] h-[200px]"
          />
          <Image
            src={"/Group.png"}
            alt="alt"
            width={442}
            height={442}
            className="lg:w-[442px] lg:h-[442px] w-[260px] h-[250px] bg-transparent absolute z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ml-8 mt-5"
          />
          <Image
            src={"/up.png"}
            alt="alt"
            width={80}
            height={80}
            className="hidden lg:block absolute z-10 top-full left-1/2 transform -translate-x-1/4 -translate-y-1/2 ml-40 "
          />
          <Image
            src={"/up.png"}
            alt="alt"
            width={80}
            height={80}
            className=" absolute z-10 bottom-0 right-0  mr-8"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
