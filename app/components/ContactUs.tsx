import Image from "next/image";

const ContactUs = () => {
  return (
    <>
      <section
        id="contact"
        className="px-20 py-[75px] bg-green-50 justify-start items-start flex lg:flex-row flex-col gap-20"
      >
        <div className="relative order-last lg:order-first">
          <Image
            className="lg:w-[580px] lg:h-[350px] md:w-[310px] md:h-[220px] w-[340px] h-[198.333px] bg-indigo-500 bg-opacity-30 rounded-[20px]"
            width={580}
            height={350}
            alt="Ant Sunset"
            src="/antimages/ant sunset vol 1.png"
          />
          <button className="lg:w-[239.80px] lg:h-[70px] w-[150px] h-[45px] px-5 py-2.5 left-[180px] top-[143.44px] lg:left-[450px] lg:top-[254px] absolute bg-white rounded-[99px] justify-start items-center gap-5 inline-flex">
            <div className="justify-start items-center gap-2.5 inline-flex">
              <div className="w-[34.80px] h-[35px] ">
                <Image
                  className="lg:w-[34.80px] lg:h-[35px] w-7 h-7"
                  width={25}
                  height={25}
                  alt="whatsapp"
                  src="/contact/whatsapp.png"
                />
              </div>
              <p className="text-zinc-700 lg:text-sm text-[10px] font-semibold">
                Contact Us
              </p>
            </div>
            <Image
              className="lg:w-[50px] lg:h-[50px] w-8 h-8 p-2.5 bg-white rounded-[999px] border border-indigo-500 flex-col justify-center items-center gap-2.5 flex"
              width={50}
              height={50}
              alt="arrow"
              src="/contact/arrow 6.svg"
            />
          </button>
        </div>

        <div>
          <div className="lg:w-[500px] w-full lg:-order-last order-first lg:text-start text-center">
            <h3 className=" text-indigo-500 text-2xl font-bold  leading-[30px]">
              #Let's Talk to us for
            </h3>
            <h1 className=" text-zinc-700 text-[35px] font-bold leading-[50px]">
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
      {/* <div className="w-full lg:px-20 p-[30px] bg-gray-200 lg:flex-row flex-col justify-start items-end gap-2.5 flex ">
        <div className="w-[370px] h-[155px] relative">
          <h3 className=" lg:text-start text-center text-indigo-500 text-base font-bold leading-tight">
            #Let's Talk to us for
          </h3>
          <h1 className="lg:text-start text-center text-zinc-700 text-xl font-bold leading-[25px]">
            Make your Idea <span className="text-pink">a Reality</span>
          </h1>
          <p className="w-[370px] pt-7 text-justify text-zinc-700 text-xs font-normal leading-tight">
            PT. Layanan Kolaborasi Global is a leading IT outsourcing solution
            provider based in Denpasar, Bali. Our company specializes in
            delivering innovative and reliable IT services to businesses and
            organizations worldwide.
          </p>
        </div>
        <div className="w-[370px] h-[198.33px] relative lg:order-first">
          <div className="w-[340px] h-[198.33px] left-0 top-0 absolute bg-indigo-500 bg-opacity-30 rounded-md" />
          <div className="w-[164px] h-[45px] px-5 py-2.5 left-[206px] top-[131.44px] absolute bg-white rounded-[99px] justify-start items-center gap-5 flex">
            <div className="justify-start items-center gap-2.5 flex">
              <div className="w-[15px] h-[15px] relative">
                <div className="w-[14.91px] h-[15px] left-0 top-0 absolute">
                  <div className="w-[34.80px] h-[35px]">
                    <Image
                      className="lg:w-[34.80px] lg:h-[35px] w-[14px] h-[15px] "
                      width={25}
                      height={25}
                      alt="whatsapp"
                      src="/contact/whatsapp.png"
                    />
                  </div>
                </div>
              </div>
              <div className="text-zinc-700 text-[10px] font-semibold leading-3">
                Contact Us
              </div>
            </div>
            <div className="w-[25px] h-[25px] p-2.5 bg-white rounded-[999px] border border-indigo-500 flex-col justify-center items-center gap-2.5 flex" />
          </div>
        </div>
      </div> */}
    </>
  );
};

export default ContactUs;
