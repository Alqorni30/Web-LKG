import Image from "next/image";

const OurPartner = () => {
  return (
    <>
      <section className="px-20 py-[150px] flex-col justify-start items-center gap-[50px] flex">
        <div className="">
          <h3 className="text-center text-indigo-500 lg:text-[23px] text-base  font-bold  leading-[30px]">
            Successful Collaboration With
          </h3>
          <h1 className="text-pink text-center lg:text-[40px] text-xl font-bold  leading-[50px]">
            Our <span className="text-zinc-700 font-bold">Partner</span>
          </h1>
        </div>
        <div className="flex lg:w-full w-[430px] justify-between items-start px-[30px] py-0">
          <Image
            className="lg:w-[256.20px] lg:h-20 w-[80.06px] h-[25px]"
            width={256}
            height={80}
            alt="simpananku"
            src="/ourpartner/logo aviana sinar abadi.svg"
          />
          <Image
            className="lg:w-[311.69px] lg:h-20 w-[97.40px] h-[25px]"
            width={311}
            height={80}
            alt="simpananku"
            src="/ourpartner/logo irma biru.svg"
          />
          <Image
            className="lg:w-[298.41px] lg:h-20 w-[93.25px] h-[25px]"
            width={298}
            height={80}
            alt="simpananku"
            src="/ourpartner/logo pulsapro.svg"
          />
        </div>
      </section>
    </>
  );
};

export default OurPartner;
