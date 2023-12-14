import Image from "next/image";

const OurWork = () => {
  return (
    <>
      <section className="max-w-7xl lg:max-w-5xl container mx-auto px-20 lg:pt-[600px] pt-[400px] flex-col justify-start items-center gap-[50px] flex">
        <div className="text-center">
          <h4 className="text-rose-400 xl:text-[40px] lg:text-[40px] text-xl font-bold leading-[50px]">
            Our{" "}
            <span className="text-zinc-700">
              Work
            </span>
          </h4>
        </div>
        <div className="xl:w-[1120.43px] xl:h-[446px] s:w-[310px] xs:w-[370px] w-[370px] h-[147.28px] relative">
          <Image
            className="xl:left-0 xl:top-0 absolute xl:w-[221.214px] xl:h-[350px] w-[73.05px] h-[115.58px] left-0
            s:w-[73.05px] s:h-[110px] xs:w-[73.05px] xs:h-[115.58px]"
            width={206}
            height={300}
            alt="simpananku1"
            src="/ourwork/Simpananku.svg"
          />
          <Image
            className="xl:w-[206.301px] xl:h-[300px] xl:left-[914.13px] w-[68.13px] h-[99.07px] left-[301.87px] top-0 absolute s:w-[65px] s:h-[99.07px] xs:w-[68.13px] xs:h-[99.07px] s:left-[250px] xs:left-[301.87px]"
            width={206}
            height={300}
            alt="irma2"
            src="/ourwork/irma.svg"
          />
          <Image
            className="xl:w-[171.81px] xl:h-[350px] xl:left-[795.32px] xl:top-[96px] absolute s:w-[56.74px] s:h-[110px] xs:w-[56.74px] xs:h-[115.58px] s:left-[215px] xs:left-[262.64px] w-[56.74px] h-[115.58px] left-[262.64px] top-[31.70px]"
            width={206}
            height={300}
            alt="kopkar3"
            src="/ourwork/Kopkar.svg"
          />
          <Image
            className="xl:w-[721.32px] xl:h-[350px] s:w-[198.20px] s:h-[115.58px] xs:w-[238.20px] xs:h-[115.58px] w-[238.20px] h-[115.58px] s:left-[20px] xs:left-[24.44px] left-[24.44px] top-[31.70px] xl:left-[74px] xl:top-[96px] absolute"
            width={721}
            height={350}
            alt="mockup4"
            src="/ourwork/Mockup.svg"
          />
        </div>
      </section>
    </>
  );
};

export default OurWork;
