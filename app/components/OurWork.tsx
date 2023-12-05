import Image from "next/image";

const OurWork = () => {
  return (
    <>
      <div className="px-20 pt-[600px] flex-col justify-start items-center gap-[50px] flex">
        <div className="text-center">
          <h4 className="text-rose-400 lg:text-[40px] text-xl font-bold leading-[50px]">
            Our{" "}
            <span className="text-zinc-700">
              Work
            </span>
          </h4>
        </div>
        <div className="lg:w-[1120.43px] lg:h-[446px] w-[370px] h-[147.28px] relative">
          <Image
            className="lg:left-0 lg:top-0 absolute lg:w-[221.214px] lg:h-[350px] w-[73.05px] h-[115.58px] left-0"
            width={206}
            height={300}
            alt="simpananku"
            src="/ourwork/simpananku.png"
          />
          <Image
            className="lg:w-[206.301px] lg:h-[300px]  lg:left-[914.13px] w-[68.13px] h-[99.07px] left-[301.87px] top-0 absolute"
            width={206}
            height={300}
            alt="irma"
            src="/ourwork/irma.png"
          />
          <Image
            className="lg:w-[171.81px] lg:h-[350px] lg:left-[795.32px] lg:top-[96px] absolute w-[56.74px] h-[115.58px] left-[262.64px] top-[31.70px]"
            width={206}
            height={300}
            alt="kopkar"
            src="/ourwork/kopkar.png"
          />
          <Image
            className="lg:w-[721.32px] lg:h-[350px] w-[238.20px] h-[115.58px] left-[24.44px] top-[31.70px] lg:left-[74px] lg:top-[96px] absolute"
            width={721}
            height={350}
            alt="mockup"
            src="/ourwork/mockup.png"
          />
        </div>
      </div>
    </>
  );
};

export default OurWork;
