import Image from "next/image";

const OurPartner = () => {
  return (
    <>
      <div className="px-20 py-[150px] flex-col justify-start items-center gap-[50px] flex">
        <div className="">
          <h3 className="text-center text-indigo-500 text-[23px] font-bold  leading-[30px]">
            Successful Collaboration With
          </h3>
          <h1 className="text-pink text-center text-[40px] font-bold  leading-[50px]">
            Our <span className="text-zinc-700 font-bold">Partner</span>
          </h1>
        </div>
        <div className=" justify-start items-start gap-[200px] flex">
          <Image
            className="w-[256.20px] h-20"
            width={256}
            height={80}
            alt="simpananku"
            src="/ourpartner/logo aviana sinar abadi.png"
          />
          <Image
            className="w-[311.69px] h-20"
            width={311}
            height={80}
            alt="simpananku"
            src="/ourpartner/logo irma biru.png"
          />
          <Image
            className="w-[298.41px] h-20"
            width={298}
            height={80}
            alt="simpananku"
            src="/ourpartner/logo pulsapro.png"
          />
        </div>
      </div>
    </>
  );
};

export default OurPartner;
