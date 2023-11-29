import Image from "next/image";

const Challenges = () => { 
  return (
    <>
      <div id="challenges" className="lg:pt-36 pt-12 pb-24 bg-zinc-950 flex-col justify-start items-center lg:gap-[145px] gap-10 inline-flex">
        <h1 className="text-center ">
          <span className="text-pink md:text-2xl text-lg lg:text-4xl font-bold  lg:leading-[50px]">
            Challenges of Digitalization{" "}
          </span>
          <span className="text-white md:text-2xl text-lg lg:text-4xl font-bold  lg:leading-[50px]">
            in company growth
            <br />
            and world market competition
          </span>
        </h1>
        <div className="flex-col justify-start items-start gap-[37px] flex">
          <div className="flex-col justify-start items-start gap-10 flex">
            <div className="w-full px-20 py-2.5 justify-start items-center gap-2.5 inline-flex">
              <h6 className="text-pink font-bold text-lg leading-[30px]">
                Real Challenges Faced
              </h6>
            </div>
            <div className="w-full h-auto px-20 flex lg:flex-nowrap flex-wrap gap-8">
              <div className="w-full p-5 bg-neutral-900 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
                <div className="w-20 h-20 pl-1.5 pr-[5.78px] py-[5px] justify-center items-center inline-flex">
                  <Image src={"/human.svg"} alt="" width={80} height={80} />
                </div>
                <div className="self-stretch h-[78px] flex-col justify-start items-center gap-[5px] flex">
                  <div className="self-stretch text-center text-white text-base font-bold leading-[25px]">
                    IT Resources
                  </div>
                  <div className="self-stretch text-center text-white text-sm font-normal leading-normal">
                    Limited IT experts and high operational costs.
                  </div>
                </div>
              </div>

              <div className="w-full h-auto p-5 bg-neutral-900 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
                <div className="w-20 h-20 pr-[0.85px] pt-[7px] pb-[6.95px] justify-center items-center inline-flex">
                  <Image src={"/static.svg"} alt="" width={80} height={80} />
                </div>
                <div className="self-stretch h-[102px] flex-col justify-start items-center gap-[5px] flex">
                  <div className="self-stretch text-center text-white text-base font-bold leading-[25px]">
                    Scalability and Flexibility
                  </div>
                  <div className="self-stretch text-center text-white text-sm font-normal leading-normal">
                    Challenges of adapting to development demands and capacity
                    constraints of internal teams.
                  </div>
                </div>
              </div>

              <div className="w-full p-5 bg-neutral-900 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
                <div className="w-20 h-20 pl-2.5 pr-[10.76px] pb-[0.92px] justify-center items-center inline-flex">
                  <Image src={"/focus.svg"} alt="" width={80} height={80} />
                </div>
                <div className="self-stretch h-[102px] flex-col justify-start items-center gap-[5px] flex">
                  <div className="self-stretch text-center text-white text-base font-bold leading-[25px]">
                    Bias Towards Focus
                  </div>
                  <div className="self-stretch text-center text-white text-sm font-normal leading-normal">
                    Diverted core resources, lacking speed and development time
                    efficiency.
                  </div>
                </div>
              </div>

              <div className="w-full p-5 bg-neutral-900 rounded-[20px] flex-col justify-start items-center gap-5 inline-flex">
                <div className="w-20 h-20 pl-2 pr-[8.41px] pb-[0.88px] justify-center items-center inline-flex">
                  <Image src={"/skill.svg"} alt="" width={80} height={80} />
                </div>
                <div className="self-stretch h-[102px] flex-col justify-start items-center gap-[5px] flex">
                  <div className="self-stretch text-center text-white text-base font-bold leading-[25px]">
                    Skill Limitations
                  </div>
                  <div className="self-stretch text-center text-white text-sm font-normal leading-normal">
                    Limited technological knowledge, experience across
                    industries and platforms.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </>
  );
};

export default Challenges;
