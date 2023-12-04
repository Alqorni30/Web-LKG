import Image from "next/image";

const Goals = () => {
  return (
    <>
      <div
        id="goals"
        className="px-20 pt-[100px] pb-[50px] flex-col justify-start items-center gap-[52px] flex"
      >
        <div className="text-center">
          <span className="text-indigo-500 text-2xl font-bold  leading-[30px]">
            #See how
            <br />
          </span>
          <h3 className="text-zinc-700 text-[40px] font-bold  leading-[50px]">
            We can help you reach your <span className="text-pink">goals</span>
          </h3>
        </div>

        <div className="w-[1280px] relative">
          <div className="px-20">
            <div className="w-[400px] h-[554px] left-[493px] top-0 absolute bg-orange-muda"/>
            <h3 className="left-5 top-[125.41px] absolute text-indigo-500 text-2xl font-normal  leading-[30px]">
              01
            </h3>
            <h2 className="left-[76px] top-[120.41px] absolute text-zinc-700 text-3xl font-normal  leading-10">
              Resources
            </h2>
            <p className="w-[310px] left-[538px] top-[120.41px] absolute text-zinc-700 text-lg font-light  leading-7">
              Qualified experts, expertise specific to your project.
            </p>
            <p className="w-[250px] left-[968px] top-[120.41px] absolute text-zinc-700 text-lg font-light  leading-7">
              Challenges in finding the right experts during the recruitment
              process.
            </p>
            <h3 className="left-5 top-[241.41px] absolute text-indigo-500 text-2xl font-normal  leading-[30px]">
              02
            </h3>
            <h2 className="left-[76px] top-[236.41px] absolute text-zinc-700 text-3xl font-normal  leading-10">
              Costs
            </h2>
            <p className="w-[310px] left-[538px] top-[236.41px] absolute text-zinc-700 text-lg font-light  leading-7">
              Efficient, according to the needs of the project.
            </p>
            <p className="w-[250px] left-[968px] top-[236.41px] absolute text-zinc-700 text-lg font-light  leading-7">
              High costs, including salaries, benefits and training costs.
            </p>
            <h3 className="left-5 top-[357.41px] absolute text-indigo-500 text-2xl font-normal  leading-[30px]">
              03
            </h3>
            <h2 className="left-[76px] top-[352.41px] absolute text-zinc-700 text-3xl font-normal  leading-10">
              Business Focus
            </h2>
            <p className="w-[310px] left-[538px] top-[352.41px] absolute text-zinc-700 text-lg font-light  leading-7">
              Focus on core activities business.
            </p>
            <p className="w-[250px] left-[968px] top-[352.41px] absolute text-zinc-700 text-lg font-light  leading-7">
              Resource allocation for managing IT systems and teams.
            </p>
            <div className="w-[121px] h-[37px] left-[633px] top-[33.41px] absolute justify-center items-center gap-2.5 flex">
              <Image
                className=""
                width={72}
                height={37}
                alt="Logo Lkg"
                src="/Logo lkg only 1.png"
              />
              <h4 className="text-indigo-500 text-xl font-normal  leading-[25px]">
                LKG
              </h4>
            </div>
            <div className="w-[148px] h-10 left-[1049px] top-[30.41px] absolute justify-center items-center gap-2.5 inline-flex">
              <div className="w-10 h-10 relative" ></div>
              <h4 className="text-indigo-500 text-xl font-normal  leading-[25px]">
                IN HOUSE
              </h4>
            </div>
            <hr className="w-[1280px] h-[0px] left-0 top-[90.45px] absolute border border-zinc-300 "></hr>
            <hr className="w-[1280px] h-[0px] left-0 top-[206.45px] absolute border border-zinc-300"></hr>
            <hr className="w-[1280px] h-[0px] left-0 top-[322.45px] absolute border border-zinc-300"></hr>
            <hr className="w-[1280px] h-[0px] left-0 top-[438.45px] absolute border border-zinc-300"></hr>
            <h3 className="left-5 top-[473.41px] absolute text-indigo-500 text-2xl font-normal  leading-[30px]">
              04
            </h3>
            <h2 className="left-[76px] top-[468.41px] absolute text-zinc-700 text-3xl font-normal  leading-10">
              Flexibility
            </h2>
            <p className="w-[310px] left-[538px] top-[468.41px] absolute text-zinc-700 text-lg font-light  leading-7">
              Team adjustment with fluctuations project request.
            </p>
            <p className="w-[250px] left-[968px] top-[468.41px] absolute text-zinc-700 text-lg font-light  leading-7">
              takes time to process adjustments with old members.
            </p>
            
          </div>
        </div>
      </div>

      {/* <div className="w-[1200px] relative mx-[20px]">
          <div className="w-[400px] h-[554px] left-[493px] top-0 absolute bg-orange-muda" />
          <h3 className="left-0 top-[125.41px] absolute text-indigo-500 text-2xl font-normal  leading-[30px]">
            01
          </h3>
          <h2 className="left-[76px] top-[120.41px] absolute text-zinc-700 text-3xl font-normal  leading-10">
            Resources
          </h2>
          <p className="w-[310px] left-[538px] top-[120.41px] absolute text-zinc-700 text-lg font-light  leading-7">
            Qualified experts, expertise specific to your project.
          </p>
          <p className="w-[310px] left-[968px] top-[120.41px] absolute text-zinc-700 text-lg font-light  leading-7">
            Challenges in finding the right experts during the recruitment
            process.
          </p>
          <h3 className="left-0 top-[241.41px] absolute text-indigo-500 text-2xl font-normal  leading-[30px]">
            02
          </h3>
          <h2 className="left-[76px] top-[236.41px] absolute text-zinc-700 text-[32px] font-normal  leading-10">
            Costs
          </h2>
          <p className="w-[310px] left-[538px] top-[236.41px] absolute text-zinc-700 text-lg font-light  leading-7">
            Efficient, according to the needs of the project.
          </p>
          <p className="w-[310px] left-[968px] top-[236.41px] absolute text-zinc-700 text-lg font-light  leading-7">
            High costs, including salaries, benefits and training costs.
          </p>
          <h3 className="left-0 top-[357.41px] absolute text-indigo-500 text-2xl font-normal  leading-[30px]">
            03
          </h3>
          <h3 className="left-[76px] top-[352.41px] absolute text-zinc-700 text-[32px] font-normal  leading-10">
            Business Focus
          </h3>
          <p className="w-[310px] left-[538px] top-[352.41px] absolute text-zinc-700 text-lg font-light  leading-7">
            Focus on core activities business.
          </p>
          <p className="w-[310px] left-[968px] top-[352.41px] absolute text-zinc-700 text-lg font-light  leading-7">
            Resource allocation for managing IT systems and teams.
          </p>
          <div className="w-[121px] h-[37px] left-[633px] top-[33.41px] absolute justify-center items-center gap-2.5 inline-flex">
            <Image
              className=""
              width={72}
              height={37}
              alt="Logo Lkg"
              src="/Logo lkg only 1.png"
            />
            <h4 className="text-indigo-500 text-xl font-normal  leading-[25px]">
              LKG
            </h4>
          </div>
          <div className="w-[148px] h-10 left-[1049px] top-[30.41px] absolute justify-center items-center gap-2.5 inline-flex">
            <div className="w-10 h-10 relative" />
            <h4 className="text-indigo-500 text-xl font-normal  leading-[25px]">
              IN HOUSE
            </h4>
          </div>
          <div className="w-[1280px] h-[0px] left-0 top-[90.45px] absolute border border-zinc-300"></div>
          <div className="w-[1280px] h-[0px] left-0 top-[206.45px] absolute border border-zinc-300"></div>
          <div className="w-[1280px] h-[0px] left-0 top-[322.45px] absolute border border-zinc-300"></div>
          <h3 className="left-0 top-[473.41px] absolute text-indigo-500 text-2xl font-normal  leading-[30px]">
            04
          </h3>
          <h2 className="left-[76px] top-[468.41px] absolute text-zinc-700 text-[32px] font-normal  leading-10">
            Flexibility
          </h2>
          <p className="w-[310px] left-[538px] top-[468.41px] absolute text-zinc-700 text-lg font-light  leading-7">
            Team adjustment with fluctuations project request.
          </p>
          <p className="w-[310px] left-[968px] top-[468.41px] absolute text-zinc-700 text-lg font-light  leading-7">
            takes time to process adjustments with old members.
          </p>
          <div className="w-[1280px] h-[0px] left-0 top-[438.45px] absolute border border-zinc-300"></div>
        </div> */}
    </>
  );
};

export default Goals;
