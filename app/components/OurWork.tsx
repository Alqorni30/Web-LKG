import Image from "next/image";

const OurWork = () => {
  return (
    <>
      <div className="px-20 flex-col justify-start items-center gap-[50px] flex">
        <div className="text-center">
          <span className="text-rose-400 text-[40px] font-extrabold  leading-[50px]">
            Our{" "}
          </span>
          <span className="text-zinc-700 text-[40px] font-extrabold  leading-[50px]">
            Work
          </span>
        </div>
        <div className="w-[1120.43px] h-[446px] relative">
          <Image
            className="left-0 top-0 absolute"
            width={206}
            height={300}
            alt="simpananku"
            src="/ourwork/simpananku.png"
          />
          <Image
            className="w-[206.30px] h-[300px] left-[914.13px] top-0 absolute"
            width={206}
            height={300}
            alt="irma"
            src="/ourwork/irma.png"
          />
          <Image
            className="w-[171.81px] h-[350px] left-[795.32px] top-[96px] absolute"
            width={206}
            height={300}
            alt="kopkar"
            src="/ourwork/kopkar.png"
          />
          <Image
            className="w-[721.32px] h-[350px] left-[74px] top-[96px] absolute"
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
