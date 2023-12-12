import Image from "next/image";

const Challenges = () => {
  return (
    <>
      <section
        id="challenges"
        className="w-full lg:pt-36 pt-12 pb-24 bg-zinc-950 flex-col items-center gap-10 flex"
      >
        <h1 className="text-center lg:w-[920px] w-[370px]">
          <span className="text-pink md:text-2xl text-lg lg:text-4xl font-bold  lg:leading-[50px]">
            Challenges of Digitalization{" "}
          </span>
          <span className="text-white md:text-2xl text-lg lg:text-4xl font-bold  lg:leading-[50px]">
            in company growth and world market competition
          </span>
        </h1>

        <div className="w-full container flex-col flex">
          <div className="flex-col justify-center gap-10 flex">
            <h6 className="px-20 py-2.5 text-pink gap-10 lg:px-20 flex justify-center items-center lg:justify-start lg:items-start font-bold text-lg leading-[30px]">
              Real Challenges Faced
            </h6>
            <div className="gap-10 lg:px-20 px-16 flex lg:flex-nowrap flex-wrap justify-center items-center">
              <div className="w-[290px] h-[242px] p-5 bg-neutral-900 rounded-[20px] flex-col gap-5 flex">
                <div className="justify-center items-center flex">
                  <Image
                    src={"/assets/human.svg"}
                    alt=""
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex-col justify-start items-center gap-[5px] flex">
                  <h4 className="text-center text-white text-base font-bold leading-[25px]">
                    IT Resources
                  </h4>
                  <p className="text-center text-white text-sm font-normal leading-normal">
                    Limited IT experts and high operational costs.
                  </p>
                </div>
              </div>

              <div className="lg:w-[290px] w-[300px] h-[242px] lg:h-[242px] p-5 bg-neutral-900 rounded-[20px] flex-col gap-5 flex">
                <div className="justify-center items-center flex">
                  <Image
                    src={"/assets/static.svg"}
                    alt=""
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex-col justify-start items-center gap-[5px] flex">
                  <h4 className="text-center text-white text-base font-bold leading-[25px]">
                    Scalability and Flexibility
                  </h4>
                  <p className="text-center text-white text-sm font-normal leading-normal">
                    Challenges of adapting to development demands and capacity
                    constraints of internal teams.
                  </p>
                </div>
              </div>

              <div className="w-[290px] h-[242px] p-5 bg-neutral-900 rounded-[20px] flex-col gap-5 flex">
                <div className="justify-center items-center flex">
                  <Image
                    src={"/assets/focus.svg"}
                    alt=""
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex-col justify-start items-center gap-[5px] flex">
                  <h4 className="text-center text-white text-base font-bold leading-[25px]">
                    Bias Towards Focus
                  </h4>
                  <p className="text-center text-white text-sm font-normal leading-normal">
                    Diverted core resources, lacking speed and development time
                    efficiency.
                  </p>
                </div>
              </div>

              <div className="w-[290px] h-[242px] p-5 bg-neutral-900 rounded-[20px] flex-col gap-5 flex">
                <div className="pl-2 pr-[8.41px] pb-[0.88px] justify-center items-center flex">
                  <Image
                    src={"/assets/skill.svg"}
                    alt=""
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex-col justify-start items-center gap-[5px] flex">
                  <h4 className="text-center text-white text-base font-bold leading-[25px]">
                    Skill Limitations
                  </h4>
                  <p className="text-center text-white text-sm font-normal leading-normal">
                    Limited technological knowledge, experience across
                    industries and platforms.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Challenges;
