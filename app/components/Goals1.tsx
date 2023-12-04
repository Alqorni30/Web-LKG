import Image from "next/image";

const Goals1 = () => {
  return (
    <div id="goals" className="px-20 pt-[100px] pb-[50px] max-md:px-5">
      <div className="text-center">
        <span className="text-indigo-500 text-2xl font-bold  leading-[30px]">
          #See how
          <br />
        </span>
        <h3 className="text-zinc-700 text-[40px] font-bold  leading-[50px]">
          We can help you reach your <span className="text-pink">goals</span>
        </h3>
      </div>
      
      <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
        <div className="flex flex-col items-stretch w-[24%] pt-[135px] max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch my-auto max-md:mt-10">
            <div className="flex items-center gap-5">
              <div className="text-indigo-500 text-2xl leading-8 tracking-tight whitespace-nowrap my-auto">
                01
              </div>
              <div className="text-zinc-700 text-3xl leading-10 tracking-tight self-stretch whitespace-nowrap">
                Resources
              </div>
            </div>
            <div className="flex items-center gap-5 mt-24 max-md:mt-10">
              <div className="text-indigo-500 text-2xl leading-8 tracking-tight whitespace-nowrap my-auto">
                02
              </div>
              <div className="text-zinc-700 text-3xl leading-10 tracking-tight self-stretch whitespace-nowrap">
                Costs
              </div>
            </div>
            <div className="flex items-center gap-5 mt-24 max-md:mt-10">
              <div className="text-indigo-500 text-2xl leading-8 tracking-tight whitespace-nowrap my-auto">
                03
              </div>
              <div className="text-zinc-700 text-3xl leading-10 tracking-tight self-stretch whitespace-nowrap">
                Business Focus
              </div>
            </div>
            <div className="flex gap-5 mt-24 items-start max-md:mt-10">
              <div className="text-indigo-500 text-2xl leading-8 tracking-tight whitespace-nowrap">
                04
              </div>
              <div className="text-zinc-700 text-3xl leading-10 tracking-tight self-stretch whitespace-nowrap">
                Flexibility
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-stretch w-[76%] ml-5 max-md:w-full max-md:ml-0">
          <div className="flex flex-col items-stretch my-auto max-md:max-w-full max-md:mt-10">
            <div className="w-[785px] max-w-full mt-14 self-end max-md:mt-10">
              <div className="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
                <div className="flex flex-col items-stretch w-[56%] max-md:w-full max-md:ml-0">
                  <div className="bg-orange-50 flex w-full grow flex-col mx-auto px-11 py-9 max-md:mt-10 max-md:px-5">
                    <div className="justify-center items-stretch self-center flex gap-2.5">
                      <Image
                        className=""
                        width={72}
                        height={37}
                        alt="Logo Lkg"
                        src="/Logo lkg only 1.png"
                      />
                      <div className="text-indigo-500 text-xl leading-6 tracking-normal self-center grow whitespace-nowrap my-auto">
                        LKG
                      </div>
                    </div>
                    <div className="text-zinc-700 text-lg font-light leading-7 tracking-normal self-stretch mt-14 max-md:mt-10">
                      Qualified experts, expertise specific to your project.
                    </div>
                    <div className="text-zinc-700 text-lg font-light leading-7 tracking-normal self-stretch mt-16 max-md:mt-10">
                      Efficient, according to the needs of the project.
                    </div>
                    <div className="text-zinc-700 text-lg font-light leading-7 tracking-normal self-stretch mt-20 max-md:mt-10">
                      Focus on core activities business.
                    </div>
                    <div className="text-zinc-700 text-lg font-light leading-7 tracking-normal self-stretch mt-24 max-md:mt-10">
                      Team adjustment with fluctuations project request.
                    </div>
                  </div>
                </div>
                <div className="flex flex-col items-stretch w-[44%] ml-5 max-md:w-full max-md:ml-0">
                  <div className="flex flex-col my-auto max-md:mt-10">
                    <div className="justify-center items-stretch self-center flex gap-2.5">
                      <img
                        loading="lazy"
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/aa207575136ee60f61cba4b798e34be37fee67a2b94bc7ce9411535d2fe0188a?"
                        className="aspect-square object-contain object-center w-10 overflow-hidden shrink-0 max-w-full"
                      />
                      <div className="text-indigo-500 text-xl leading-6 tracking-normal self-center grow whitespace-nowrap my-auto">
                        IN HOUSE
                      </div>
                    </div>
                    <div className="text-zinc-700 text-lg font-light leading-7 tracking-normal self-stretch mt-14 max-md:mt-10">
                      Challenges in finding the right experts during the
                      recruitment process.
                    </div>
                    <div className="text-zinc-700 text-lg font-light leading-7 tracking-normal self-stretch mt-16 max-md:mt-10">
                      High costs, including salaries, benefits and training
                      costs.
                    </div>
                    <div className="text-zinc-700 text-lg font-light leading-7 tracking-normal self-stretch mt-16 max-md:mt-10">
                      Resource allocation for managing IT systems and teams.
                    </div>
                    <div className="text-zinc-700 text-lg font-light leading-7 tracking-normal self-stretch mt-20 max-md:mt-10">
                      takes time to process adjustments with old members.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals1;
