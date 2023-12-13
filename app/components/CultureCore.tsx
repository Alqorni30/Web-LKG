import Image from "next/image";

const AboutCard = () => {
  return (
    <>
      <section id="culturecore" className="pt-12">
        <div className="max-w-7xl container mx-auto">
          <h1 className="font-bold text-center md:text-2xl text-xl lg:text-4xl">
            Culture & Core <span className="text-pink">Values</span>
          </h1>
          <div className="flex justify-center items-center py-12">
            <div className="gap-7 flex justify-center items-center lg:flex-nowrap flex-wrap px-20 w-full">
              <div className=" lg:w-[290px] lg:h-[390px] md:w-[290px] md:h-[390px] px-5 py-[30px] bg-card rounded-[20px] flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-20 h-20 justify-center items-center inline-flex">
                <Image src={"/assets/square.svg"} alt="square" width={80} height={80} />
                </div>
                <div className="self-stretch h-[108px] flex-col justify-start items-start gap-2.5 flex">
                  <div className="self-stretch text-zinc-700 text-xl font-bold  leading-[25px]">
                    Expertise & Experience in the industry
                  </div>
                  <div className="self-stretch  text-zinc-700 text-sm font-normal  leading-normal">
                    Have in-depth understanding in various industrial sectors
                  </div>
                </div>
              </div>
              
              <div className="lg:w-[290px] lg:h-[390px] md:w-[290px] md:h-[390px] px-5 py-[30px] bg-card rounded-[20px] flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-20 h-20 justify-center items-center inline-flex">
                <Image src={"/assets/circle.svg"} alt="circle" width={80} height={80} />
                </div>
                <div className="self-stretch h-[132px] flex-col justify-start items-start gap-2.5 flex">
                  <div className="self-stretch text-zinc-700 text-xl font-bold  leading-[25px]">
                    Responsive & collaborative
                  </div>
                  <div className="self-stretch  text-zinc-700 text-sm font-normal  leading-normal">
                    An active, transparent and customer-oriented approach with
                    an effective and efficient methodology
                  </div>
                </div>
              </div>

              <div className="lg:w-[290px] lg:h-[390px] md:w-[290px] md:h-[390px] px-5 py-[30px] bg-card rounded-[20px] flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-20 h-20 justify-center items-center inline-flex">
                <Image src={"/assets/flower.svg"} alt="flower" width={80} height={80} />
                </div>
                <div className="self-stretch h-[132px] flex-col justify-start items-start gap-2.5 flex">
                  <div className="self-stretch text-zinc-700 text-xl font-bold  leading-[25px]">
                    Focuses on Client Success
                  </div>
                  <div className="self-stretch  text-zinc-700 text-sm font-normal  leading-normal">
                    Our mission is to deliver high quality software development
                    services and achieve the business goals
                  </div>
                </div>
              </div>

              <div className="lg:w-[290px] lg:h-[390px] md:w-[290px] md:h-[390px] px-5 py-[30px] bg-card rounded-[20px] flex-col justify-start items-start gap-5 inline-flex">
                <div className="w-20 h-20 justify-center items-center inline-flex">
                <Image src={"/assets/line.svg"} alt="line" width={80} height={80} />
                </div>
                <div className="self-stretch h-[225px] flex-col justify-start items-start gap-2.5 flex">
                  <div className="self-stretch text-zinc-700 text-xl font-bold  leading-[25px]">
                    Community Support
                  </div>
                  <div className="self-stretch  text-zinc-700 text-sm font-normal  leading-normal">
                    Immediate access to the latest knowledge and expertise in
                    the industry
                  </div>
                  <Image
                  src={"/antimages/Ant collaboration.svg"}
                  className="w-[124.20px] h-[50px]"
                  alt="ant coolaboration"
                  width={125}
                  height={50}
                />
                  <div className="self-stretch  text-zinc-700 text-sm font-normal  leading-normal">
                    ant collaboration with 1000+ devs member
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutCard;
