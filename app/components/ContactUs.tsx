import Image from "next/image";

const ContactUs = () => {
  return (
    <>
      <div id="contact" className="px-20 py-[75px] bg-green-50 justify-start items-start flex gap-20">
        <div className="relative">
          <Image
            className="w-[580px] h-[350px]  bg-indigo-500 bg-opacity-30 rounded-[20px]"
            width={580}
            height={350}
            alt="Ant Sunset"
            src="/antimages/ant sunset vol 1.png"
          />
          <button className="w-[239.80px] h-[70px] px-5 py-2.5 left-[480px] top-[254px] absolute bg-white rounded-[99px] justify-start items-center gap-5 flex">
            <div className="justify-start items-center gap-2.5 flex">
              <div className="w-[34.80px] h-[35px] relative">
                <Image
                  className="w-[34.80px] h-[35px] left-0 top-0 absolute"
                  width={25}
                  height={25}
                  alt="whatsapp"
                  src="/contact/whatsapp.png"
                />
              </div>
              <p className="text-zinc-700 text-sm font-semibold  leading-tight">
                Contact Us
              </p>
            </div>
            <Image
              className="w-[50px] h-[50px] p-2.5 bg-white rounded-[999px] border border-indigo-500 flex-col justify-center items-center gap-2.5 flex"
              width={50}
              height={50}
              alt="arrow"
              src="/contact/arrow 6.svg"
            />
          </button>
        </div>
        <div>
          <div className="w-[500px]">
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
      </div>
    </>
  );
};

export default ContactUs;
