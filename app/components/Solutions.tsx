"use client";
import React, { useState } from "react";
import Image from "next/image";

const Solutions = () => {
  const [selectedSection, setSelectedSection] = useState("projectManagement");

  const handleButtonClick = (section: string) => {
    setSelectedSection(section);
  };
  return (
    <>
      <div id="solutions" className="pt-36 pb-24 lg:px-20 md:px-20 px-10">
        <div className="flex flex-col justify-center items-center mb-20">
          <h3 className="font-bold text-center text-primary lg:text-2xl text-base">
            Introducing
          </h3>
          <h1 className="font-bold text-center lg:w-[930px] w-[370px] lg:text-4xl md:text-2xl text-xl">
            <span className="text-pink">Solutions</span> to your business
            digitization problems
          </h1>
          <p className="lg:w-[650px] w-[370px] text-center text-zinc-700 lg:text-lg text-sm font-light pt-5">
            We solve the problem of Business Digitization by helping to provide
            services according to your needs.
          </p>
        </div>

        <div className="flex overflow-x-scroll pb-10 hide-scroll-bar lg:hidden">
          <div className="flex justify-center items-center content-center gap-5 lg:flex-wrap flex-nowrap">
            <button
              onClick={() => handleButtonClick("projectManagement")}
              className="w-[159px] h-[50px] px-5 py-2.5 bg-orange-50 rounded-[10px] border border-orange-400 justify-center items-center gap-2.5 inline-flex"
            >
              <div>
                <span className="text-black text-xs font-semibold font-['Inter'] leading-[15px]">
                  Project Management
                  <br />
                </span>
                <span className="text-black text-xs font-normal font-['Inter'] leading-[15px]">
                  Solution
                </span>
              </div>
            </button>
            <button
              onClick={() => handleButtonClick("humanResources")}
              className="w-[159px] h-[50px] px-5 py-2.5 bg-orange-50 rounded-[10px] border border-orange-400 justify-center items-center gap-2.5 inline-flex"
            >
              <div>
                <span className="text-black text-xs font-semibold font-['Inter'] leading-[15px]">
                  Human Resources
                  <br />
                </span>
                <span className="text-black text-xs font-normal font-['Inter'] leading-[15px]">
                  Solution
                </span>
              </div>
            </button>
            <button
              onClick={() => handleButtonClick("serviceFunctions")}
              className="w-[159px] h-[50px] px-5 py-2.5 bg-orange-50 rounded-[10px] border border-orange-400 justify-center items-center gap-2.5 inline-flex"
            >
              <div>
                <span className="text-black text-xs font-semibold font-['Inter'] leading-[15px]">
                  Service Functions
                  <br />
                </span>
                <span className="text-black text-xs font-normal font-['Inter'] leading-[15px]">
                  as Needed
                </span>
              </div>
            </button>
          </div>
        </div>

        <div className="justify-start items-start flex gap-[50px]">
          <div className="flex-col justify-start items-start gap-[30px] lg:flex md:flex hidden">
            <button
              onClick={() => handleButtonClick("projectManagement")}
              className="flex justify-start items-start "
            >
              <div
                className={`p-6  ${
                  selectedSection === "projectManagement"
                    ? "border-l-2 border-orange-400 transition-all"
                    : ""
                } flex items-center gap-5 hover:bg-orange-muda`}
              >
                <div className="w-20 h-20 flex justify-center items-center">
                  <Image
                    src={"/Layer 1.svg"}
                    alt="layer"
                    width={80}
                    height={80}
                  />
                </div>
                <div className="flex-col justify-start text-start items-start gap-2.5">
                  <p className="text-zinc-700 text-base font-bold leading-tight">
                    Project Management
                  </p>
                  <p className="text-zinc-700 text-base font-normal leading-tight">
                    Solution
                  </p>
                </div>
              </div>
            </button>
            <button
              onClick={() => handleButtonClick("humanResources")}
              className="flex justify-start items-start "
            >
              <div
                className={`p-6 ${
                  selectedSection === "humanResources"
                    ? "border-l-2 border-orange-400 transition-all"
                    : ""
                } flex justify-start items-center gap-5 hover:bg-orange-muda `}
              >
                <div className="w-20 h-20 flex justify-center items-center">
                  <Image
                    src={"/programmer.svg"}
                    alt="programmer"
                    width={85}
                    height={70}
                  />
                </div>
                <div className="flex-col text-start justify-center items-start gap-2.5">
                  <div className="text-zinc-700 text-base font-bold leading-tight">
                    Human Resources
                  </div>
                  <div className="text-zinc-700 text-base font-normal leading-tight">
                    Solution
                  </div>
                </div>
              </div>
            </button>
            <button
              onClick={() => handleButtonClick("serviceFunctions")}
              className="flex justify-start items-start "
            >
              <div
                className={`p-6 ${
                  selectedSection === "serviceFunctions"
                    ? "border-l-2 border-orange-400 transition-all"
                    : ""
                } flex justify-start items-center gap-5 hover:bg-orange-muda`}
              >
                <div className="w-20 h-20 flex justify-center items-center">
                  <Image
                    src={"/videocall.svg"}
                    alt="videocall"
                    width={85}
                    height={70}
                  />
                </div>
                <div className="flex-col text-start justify-center items-start gap-2.5">
                  <div className="text-zinc-700 text-base font-bold leading-tight">
                    Service Functions
                  </div>
                  <div className="text-zinc-700 text-base font-normal leading-tight">
                    as Needed
                  </div>
                </div>
              </div>
            </button>
          </div>

          <hr className="border h-96 border-r-2 border-hover border-dashed hidden md:block" />
          {selectedSection === "projectManagement" && (
            <div className=" flex-col justify-start items-start gap-5 flex">
              <div className="flex lg:flex-row flex-col lg:justify-start lg:items-start  gap-[50px]">
                <div className="w-36 h-30 pl-4 pr-4 justify-center items-center">
                  <Image
                    src={"/layer 1.svg"}
                    alt="layer"
                    width={145}
                    height={120}
                  />
                </div>
                <div className="flex-col lg:justify-start lg:items-start justify-center items-center gap-5">
                  <div className="">
                    <p className="text-zinc-700 text-sm font-normal leading-normal">
                      #End-to-end{" "}
                      <span className="text-zinc-700 text-sm font-bold leading-normal">
                        Project Management Solution
                      </span>
                    </p>
                  </div>
                  <div className="flex-col justify-start items-start gap-2.5">
                    <div className="text-start">
                      <h3 className="text-zinc-700 text-2xl font-bold leading-[30px]">
                        How we make IT{" "}
                        <span className="text-pink text-2xl font-bold leading-[30px]">
                          Works
                        </span>
                      </h3>
                    </div>
                    <p className="w-full text-zinc-700 text-sm font-normal leading-normal">
                      Experienced teams and an agile framework, we prioritize
                      the commercial goals of the client to deliver the highest
                      business value.
                    </p>
                  </div>
                </div>
              </div>

              <div className="w-[785px] h-[284px] relative">
                <div className="w-[210px] h-[100px] left-0 top-0 absolute">
                  <h2 className="left-0 top-0 absolute text-indigo-500 text-[32px] font-bold  leading-10">
                    01
                  </h2>
                  <p className="left-[48px] top-[8px] absolute text-zinc-700 text-sm font-bold  leading-normal">
                    Product Discovery
                  </p>
                  <p className="w-[210px] left-0 top-[40px] absolute text-zinc-700 text-xs font-normal  leading-tight">
                    We break down your project into iterations to cover all of
                    the required functionality
                  </p>
                </div>
                <div className="w-[210px] h-[100px] left-[288px] top-0 absolute">
                  <h2 className="left-0 top-0 absolute text-indigo-500 text-[32px] font-bold  leading-10">
                    03
                  </h2>
                  <p className="left-[53px] top-[8px] absolute text-zinc-700 text-sm font-bold  leading-normal">
                    Product Development
                  </p>
                  <p className="w-[210px] left-0 top-[40px] absolute text-zinc-700 text-xs font-normal  leading-tight">
                    We write code to agreed standards, it's pair programmed and
                    continuously integrated
                  </p>
                </div>
                <div className="w-[210px] h-[100px] left-[575px] top-0 absolute">
                  <h2 className="left-0 top-0 absolute text-indigo-500 text-[32px] font-bold  leading-10">
                    05
                  </h2>
                  <p className="left-[53px] top-[8px] absolute text-zinc-700 text-sm font-bold  leading-normal">
                    Deployment & Support
                  </p>
                  <p className="w-[210px] left-0 top-[40px] absolute text-zinc-700 text-xs font-normal  leading-tight">
                    We will constantly improve and refactor to create stable
                    well-performing system
                  </p>
                </div>
                <div className="w-[210px] h-[100px] left-[144px] top-[184px] absolute">
                  <h2 className="left-0 top-0 absolute text-indigo-500 text-[32px] font-bold  leading-10">
                    02
                  </h2>
                  <p className="left-[52px] top-[8px] absolute text-zinc-700 text-sm font-bold  leading-normal">
                    Product Design
                  </p>
                  <p className="w-[210px] left-0 top-[40px] absolute text-zinc-700 text-xs font-normal  leading-tight">
                    We bring logic and structure, looking for the simplest and
                    safest solutions that will minimize your costs
                  </p>
                </div>
                <div className="w-[200px] h-[100px] left-[432px] top-[184px] absolute">
                  <h2 className="left-0 top-0 absolute text-indigo-500 text-[32px] font-bold  leading-10">
                    04
                  </h2>
                  <p className="left-[54px] top-[8px] absolute text-zinc-700 text-sm font-bold  leading-normal">
                    Test & Optimize
                  </p>
                  <p className="w-[200px] left-0 top-[40px] absolute text-zinc-700 text-xs font-normal  leading-tight">
                    Project goes through a series of tests, to determine if the
                    developed features works
                  </p>
                </div>
                <div className="w-[727px] h-[0px] left-[6px] top-[144px] absolute border border-rose-400"></div>
                <div className="w-5 h-10 left-0 top-[114px] absolute">
                  <Image
                    src={"/Group 16.svg"}
                    alt="layer"
                    width={80}
                    height={80}
                  />
                  <div className="w-2.5 h-2.5 left-[5px] top-[25px] absolute bg-rose-400 rounded-full" />
                  <div className="w-5 h-5 left-0 top-[20px] absolute rounded-full border border-rose-400" />
                </div>
                <div className="left-[719px] top-[192px] absolute text-zinc-700 text-sm font-bold  leading-normal">
                  Thats All
                </div>
                <div className="w-5 h-10 left-[144px] top-[134px] absolute">
                  <Image
                    src={"/Group 15.svg"}
                    alt="layer"
                    width={80}
                    height={80}
                  />
                  <div className="w-2.5 h-2.5 left-[5px] top-[5px] absolute bg-rose-400 rounded-full" />
                  <div className="w-5 h-5 left-0 top-0 absolute rounded-full border border-rose-400" />
                </div>
                <div className="w-5 h-10 left-[288px] top-[114px] absolute">
                  <Image
                    src={"/Group 16.svg"}
                    alt="layer"
                    width={80}
                    height={80}
                  />
                  <div className="w-2.5 h-2.5 left-[5px] top-[25px] absolute bg-rose-400 rounded-full" />
                  <div className="w-5 h-5 left-0 top-[20px] absolute rounded-full border border-rose-400" />
                </div>
                <div className="w-5 h-10 left-[432px] top-[134px] absolute">
                  <Image
                    src={"/Group 15.svg"}
                    alt="layer"
                    width={80}
                    height={80}
                  />
                  <div className="w-2.5 h-2.5 left-[5px] top-[5px] absolute bg-rose-400 rounded-full" />
                  <div className="w-5 h-5 left-0 top-0 absolute rounded-full border border-rose-400" />
                </div>
                <div className="w-5 h-10 left-[575px] top-[114px] absolute">
                  <Image
                    src={"/Group 16.svg"}
                    alt="layer"
                    width={80}
                    height={80}
                  />
                  <div className="w-2.5 h-2.5 left-[5px] top-[25px] absolute bg-rose-400 rounded-full" />
                  <div className="w-5 h-5 left-0 top-[20px] absolute rounded-full border border-rose-400" />
                </div>
                <div className="w-5 h-10 left-[719px] top-[134px] absolute">
                  <Image
                    src={"/Group 15.svg"}
                    alt="layer"
                    width={80}
                    height={80}
                  />
                  <div className="w-2.5 h-2.5 left-[5px] top-[5px] absolute bg-rose-400 rounded-full" />
                  <div className="w-5 h-5 left-0 top-0 absolute rounded-full border border-rose-400" />
                </div>
              </div>
            </div>
          )}
          {selectedSection === "humanResources" && (
            <div className="flex-col lg:justify-start lg:items-start justify-center items-center gap-10 flex ">
              <div className=" justify-center items-center gap-12 lg:flex">
                <Image
                  className="mx-auto pb-3"
                  src={"/programmer.svg"}
                  alt="layer"
                  width={144}
                  height={112}
                />
                <div className="flex-col lg:justify-start lg:items-start justify-center items-center gap-1 inline-flex">
                  <p className="text-zinc-700 text-sm font-normal leading-normal">
                    #Talk to us for{" "}
                    <span className="text-zinc-700 text-sm font-bold leading-normal">
                      Services Function as Needed
                    </span>
                  </p>
                  <div className="flex-col lg:justify-start lg:items-start justify-center items-center gap-2.5 flex">
                    <h3 className="text-zinc-700 text-center text-2xl font-bold leading-[30px]">
                      Driving Business Digital{" "}
                      <span className="text-pink text-2xl font-bold leading-[30px]">
                        Transform
                      </span>
                    </h3>
                    <p className="w-80 text-zinc-700 text-sm font-normal leading-normal">
                      We can help you find the right functional service
                      requirements for your product.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap lg:justify-start lg:items-start justify-center items-center gap-8">
                <div className="flex-col gap-2.5 inline-flex">
                  <div className="w-56 px-2.5 py-0.5 bg-indigo-500 justify-start items-center gap-2.5 inline-flex">
                    <p className="text-white text-sm font-bold leading-normal">
                      FRONT END DEV
                    </p>
                  </div>
                  <p className="w-56 text-zinc-700 text-xs font-normal leading-tight">
                    Frontend is the rest of the body – that’s the anatomy of
                    application.
                  </p>
                </div>
                <div className="flex-col gap-2.5 inline-flex">
                  <div className="w-56 px-2.5 py-0.5 bg-indigo-500 justify-start items-center gap-2.5 inline-flex">
                    <p className="text-white text-sm font-bold leading-normal">
                      MOBILE APP DEV
                    </p>
                  </div>
                  <p className="w-56 text-zinc-700 text-xs font-normal leading-tight">
                    Our devs will work on one code base that runs on Android and
                    iOS.
                  </p>
                </div>
                <div className="flex-col gap-2.5 inline-flex">
                  <div className="w-56 px-2.5 py-0.5 bg-indigo-500 justify-start items-center gap-2.5 inline-flex">
                    <p className="text-white text-sm font-bold leading-normal">
                      BACK END DEV
                    </p>
                  </div>
                  <p className="w-56 text-zinc-700 text-xs font-normal leading-tight">
                    Backend is the brain. So this side is taking care of
                    processing input, to make your new application run well and
                    smooth.
                  </p>
                </div>
                <div className="flex-col gap-2.5 inline-flex">
                  <div className="w-56 px-2.5 py-0.5 bg-indigo-500 justify-start items-center gap-2.5 inline-flex">
                    <p className="text-white text-sm font-bold leading-normal">
                      SOFTWARE QA
                    </p>
                  </div>
                  <p className="w-56 text-zinc-700 text-xs font-normal leading-tight">
                    Quality assurance helps find weak spots in customer’s
                    journey as well.
                  </p>
                </div>
                <div className="flex-col gap-2.5 inline-flex">
                  <div className="w-56 px-2.5 py-0.5 bg-indigo-500 justify-start items-center gap-2.5 inline-flex">
                    <p className="text-white text-sm font-bold leading-normal">
                      UX/UI DESIGNER
                    </p>
                  </div>
                  <p className="w-56 text-zinc-700 text-xs font-normal leading-tight">
                    Seamless and super-engaging user experience is the key to
                    win the hearts of your customers.
                  </p>
                </div>
              </div>
            </div>
          )}
          {selectedSection === "serviceFunctions" && (
            <div className="flex-col lg:justify-start lg:items-start justify-center items-center gap-10 flex">
              <div className=" justify-center items-center gap-12 lg:flex">
                <Image
                  className="mx-auto pb-3"
                  src={"/videocall.svg"}
                  alt="videocall"
                  width={145}
                  height={120}
                />
                <div className="flex-col lg:justify-start lg:items-start justify-center items-center gap-[5px] inline-flex">
                  <p className="text-zinc-700 text-sm font-normal leading-normal">
                    #Talk to us for{" "}
                    <span className="text-zinc-700 font-bold">Human Resource Solution</span>
                  </p>
                  <div className="flex-col lg:justify-start lg:items-start justify-center items-center gap-2.5 flex">
                    <h3 className=" text-zinc-700 text-2xl font-bold leading-[30px]">
                      Resources Tailored to{" "}
                      <span className="text-pink text-2xl font-bold leading-[30px]">
                        ur Needs
                      </span>
                    </h3>
                    <p className="w-80 text-zinc-700 text-sm font-normal leading-normal">
                      Looking for a team of expert or someone who will fit
                      perfectly in your own team? Then you should talk to me.
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex flex-wrap lg:w-[787px] w-[380px] lg:justify-start lg:items-start justify-center items-center gap-[27px]">
                <div className="px-5 py-2.5 bg-white rounded-[5px] shadow justify-start items-center gap-2.5 flex">
                  <div className="w-[60px] h-[60px] pl-[4.50px] pr-[4.33px] py-[3.75px] justify-center items-center flex">
                    <div className="w-[51.17px] h-[52.50px] relative">
                      <Image
                        src={"/human1.svg"}
                        alt="human"
                        width={145}
                        height={120}
                      />
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                    <p className="text-center text-indigo-500 text-base font-bold leading-tight">
                      Design Product
                    </p>
                    <p className="w-[270px] text-indigo-500 text-sm font-normal leading-[17.50px]">
                      Shaping Great User Experiences through Creative Design.
                    </p>
                  </div>
                </div>
                <div className="px-5 py-2.5 bg-white rounded-[5px] shadow justify-start items-center gap-2.5 flex">
                  <div className="w-[60px] h-[60px] pl-[4.50px] pr-[4.33px] py-[3.75px] justify-center items-center flex">
                    <div className="w-[51.17px] h-[52.50px] relative">
                      <Image
                        src={"/human1.svg"}
                        alt="human"
                        width={145}
                        height={120}
                      />
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                    <p className="text-center text-indigo-500 text-base font-bold leading-tight">
                      Data Visualization
                    </p>
                    <p className="w-[270px] text-indigo-500 text-sm font-normal leading-[17.50px]">
                      Turning Complex Data into Powerful Visual Insights.
                    </p>
                  </div>
                </div>
                <div className="px-5 py-2.5 bg-white rounded-[5px] shadow justify-start items-center gap-2.5 flex">
                  <div className="w-[60px] h-[60px] pl-[4.50px] pr-[4.33px] py-[3.75px] justify-center items-center flex">
                    <div className="w-[51.17px] h-[52.50px] relative">
                      <Image
                        src={"/human1.svg"}
                        alt="human"
                        width={145}
                        height={120}
                      />
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                    <p className="text-center text-indigo-500 text-base font-bold leading-tight">
                      Software Test
                    </p>
                    <p className="w-[270px] text-indigo-500 text-sm font-normal leading-[17.50px]">
                      Ensuring Best Performance and Quality Assurance
                      Excellence.
                    </p>
                  </div>
                </div>
                <div className="px-5 py-2.5 bg-white rounded-[5px] shadow justify-start items-center gap-2.5 flex">
                  <div className="w-[60px] h-[60px] pl-[4.50px] pr-[4.33px] py-[3.75px] justify-center items-center flex">
                    <div className="w-[51.17px] h-[52.50px] relative">
                      <Image
                        src={"/human1.svg"}
                        alt="human"
                        width={145}
                        height={120}
                      />
                    </div>
                  </div>
                  <div className="flex-col justify-start items-start gap-[5px] inline-flex">
                    <p className="text-center text-indigo-500 text-base font-bold leading-tight">
                      Cloud Migration
                    </p>
                    <p className="w-[270px] text-indigo-500 text-sm font-normal leading-[17.50px]">
                      Move Your Business to the Cloud Smoothly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Solutions;
