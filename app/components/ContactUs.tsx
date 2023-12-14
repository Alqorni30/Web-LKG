import Image from "next/image";
import Link from "next/link";

const ContactUs = () => {
  return (
    <>
      <section
        id="contact"
        className="px-20 py-[75px] max-w-7xl container mx-auto bg-green-50 md:justify-center md:items-center justify-start items-start flex xl:flex-row flex-col gap-20"
      >
        <div className="relative order-last xl:order-first">
          <Image
            className="xl:w-[580px] xl:h-[350px] md:w-[310px] md:h-[220px] s:h-[150px] xs:w-[full] xs:h-[180px] w-full h-[198.333px] bg-indigo-500 bg-opacity-50 rounded-[20px] flex justify-center items-center"
            width={580}
            height={350}
            alt="Ant Sunset vol 1"
            src="/antimages/Ant Sunset Vol 1.png"
          />
          <Link href={"https://wa.me/6289505130799?text=halo%20saya%20tertarik%20dengan%20layanan%20lkg"} target="_blank">
            <button className="xl:w-[239.80px] xl:h-[70px] s:w-[130px] xs:h-[45px] xs:w-[160px] w-[160px] h-[45px] xs:px-2.5 xs:py-5 s:px-2 s:py-4 s:h-[30px] px-5 py-2.5 m:left-40 left-32 top-[145px] xl:left-[450px] xl:top-[250px] md:left-[250px] md:top-[165px] m:top-[120px] xs:top-[125px] xs:left-32 s:top-[110px] s:left-24 absolute bg-white rounded-[99px] justify-start items-center xs:gap-5 s:gap-2 gap-5 inline-flex">
              <div className="justify-start items-center  inline-flex">
                <div className="w-[34.80px] h-[35px] ">
                  <Image
                    className="xl:w-[34.80px] xl:h-[35px] pt-1 s:w-7 s:h-7 xs:w-7 xs:h-7 w-7 h-7"
                    width={25}
                    height={25}
                    alt="whatsapp"
                    src="/contact/whatsapp.svg"
                  />
                </div>
                <p className="text-zinc-700 xl:text-sm xs:text-[10px] s:text-[7px] text-[10px] font-semibold">
                  Contact Us
                </p>
              </div>
              <Image
                className="xl:w-[50px] xl:h-[50px] s:w-5 s:h-5 xs:w-8 xs:h-8 w-8 h-8 s:p-1 xs:p-2.5 p-2.5 bg-white rounded-[999px] border border-indigo-500 "
                width={50}
                height={50}
                alt="arrow"
                src="/contact/Arrow 6.svg"
              />
            </button>
          </Link>
        </div>

        <div className="xl:mb-24">
          <div className="xl:w-[500px] w-full xl:-order-last order-first xl:text-start text-center">
            <h3 className=" text-indigo-500 xl:text-2xl text-base font-bold  leading-[30px]">
              #Let's Talk to us for
            </h3>
            <h1 className=" text-zinc-700 xl:text-[35px] s:text-sm xs:text-xl font-bold leading-[50px]">
              Make your Idea <span className="text-pink">a Reality</span>
            </h1>
            <p className="mt-5 text-zinc-700 m:text-xl xs:text-lg s:text-sm text-xl font-light leading-7">
              PT. Layanan Kolaborasi Global is a leading IT outsourcing solution
              provider based in Denpasar, Bali. Our company specializes in
              delivering innovative and reliable IT services to businesses and
              organizations worldwide.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ContactUs;
