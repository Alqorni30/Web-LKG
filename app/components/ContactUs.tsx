import Image from "next/image";

const ContactUs = () => {
  return (
    <>
      <section
        id="contact"
        className="px-20 py-[75px] container mx-auto bg-green-50 md:justify-center md:items-center justify-start items-start flex lg:flex-row flex-col gap-20"
      >
        <div className="relative order-last lg:order-first">
          <Image
            className="lg:w-[580px] lg:h-[350px] md:w-[310px] md:h-[220px] w-full h-[198.333px] bg-indigo-500 bg-opacity-50 rounded-[20px] flex justify-center items-center"
            width={580}
            height={350}
            alt="Ant Sunset vol 1"
            src="/antimages/Ant Sunset Vol 1.png"
          />
          <button className="lg:w-[239.80px] lg:h-[70px] w-[160px] h-[45px] px-5 py-2.5 left-40 top-[143.44px] lg:left-[450px] lg:top-[254px] md:left-[250px] md:top-[165px] absolute bg-white rounded-[99px] justify-start items-center gap-5 inline-flex">
            <div className="justify-start items-center gap-2.5 inline-flex">
              <div className="w-[34.80px] h-[35px] ">
                <Image
                  className="lg:w-[34.80px] lg:h-[35px] w-7 h-7"
                  width={25}
                  height={25}
                  alt="whatsapp"
                  src="/contact/whatsapp.svg"
                />
              </div>
              <p className="text-zinc-700 lg:text-sm text-[10px] font-semibold">
                Contact Us
              </p>
            </div>
            <Image
              className="lg:w-[50px] lg:h-[50px] w-8 h-8 p-2.5 bg-white rounded-[999px] border border-indigo-500 justify-center items-center flex"
              width={50}
              height={50}
              alt="arrow"
              src="/contact/Arrow 6.svg"
            />
          </button>
        </div>

        <div>
          <div className="lg:w-[500px] w-full lg:-order-last order-first lg:text-start text-center">
            <h3 className=" text-indigo-500 lg:text-2xl text-base font-bold  leading-[30px]">
              #Let's Talk to us for
            </h3>
            <h1 className=" text-zinc-700 lg:text-[35px] text-xl font-bold leading-[50px]">
              Make your Idea <span className="text-pink">a Reality</span>
            </h1>
            <p className="mt-5 text-zinc-700 text-lg font-light leading-7">
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
