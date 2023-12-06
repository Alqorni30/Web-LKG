import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className=" px-20 py-[50px] lg:justify-between lg:items-start justify-between items-start md:justify-center md:items-center flex lg:flex-row flex-col gap-[30px]">
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <div className="lg:w-[232px] w-full flex-col justify-center lg:items-start items-center gap-5 flex">
              <Image
                className="lg:w-[72px] lg:h-[37px] w-[97px] h-[50px]"
                width={72}
                height={37}
                alt="Logo Lkg"
                src="/Logo lkg only 1.png"
              />
              <div className="flex-col justify-center lg:items-start items-center gap-[5px] flex">
                <h5 className="w-200px text-zinc-700 lg:text-sm text-lg font-bold leading-tight">
                  PT. Layanan Kolaborasi Global
                </h5>
                <h6 className="text-zinc-700  text-sm font-normal leading-[17.50px]">
                  www.layanankolaborasi.com
                </h6>
              </div>
            </div>
            <p className="w-[300px] text-justify text-zinc-700 text-sm font-normal leading-normal">
              Jl. Diponegoro No.109, Dauh Puri Klod, Kec. Denpasar Barat, Kota
              Denpasar, Bali 80232
            </p>
          </div>
          
          <div className="flex-col justify-start items-start gap-5 flex">
            <p className="text-justify text-neutral-400 text-sm font-normal leading-normal">
              MENU
            </p>
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <Link
                href={"#about"}
                className="text-center text-zinc-700 text-sm font-normal leading-normal"
              >
                About Us
              </Link>
              <Link
                href={"#culturecore"}
                className="text-center text-zinc-700 text-sm font-normal leading-normal"
              >
                Culture & Core Values
              </Link>
              <Link
                href={"#challenges"}
                className="text-center text-zinc-700 text-sm font-normal leading-normal"
              >
                Challenges
              </Link>
              <Link
                href={"#contact"}
                className="text-center text-zinc-700 text-sm font-normal leading-normal"
              >
                Contact Us
              </Link>
            </div>
          </div>

          <div className="flex-col justify-start items-start gap-5 flex ">
            <p className=" text-neutral-400 text-sm font-normal leading-normal">
              CONTACT
            </p>
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <div className="justify-start items-center gap-2.5 flex">
                <div className="w-[30px] h-[30px] relative">
                  <Image
                    className=""
                    width={30}
                    height={30}
                    alt="phone"
                    src="/assets/phone.svg"
                  />
                </div>
                <p className=" text-zinc-700 text-sm font-normal leading-normal">
                  089 505 130 799
                </p>
              </div>
              <div className="justify-start items-center gap-2.5 flex">
                <div className="w-[30px] h-[30px] relative">
                  <Image
                    className=""
                    width={30}
                    height={30}
                    alt="phone"
                    src="/assets/streamline.svg"
                  />
                </div>
                <p className=" text-zinc-700 text-sm font-normal leading-normal">
                  miftah@kolaborasiglobal.com
                </p>
              </div>
            </div>
          </div>

          {/* <div className="justify-start items-start gap-[107px] hidden pt-[30px] ">
            <div className="flex-col justify-start items-start gap-5 inline-flex">
              <div className="text-justify text-neutral-400 text-xs font-normal font-['Inter'] leading-tight">
                MENU
              </div>
              <div className="flex-col justify-start items-start gap-2.5 flex">
                <div className="text-center text-zinc-700 text-[10px] font-normal font-['Inter'] leading-[14px]">
                  About Us
                </div>
                <div className="text-center text-zinc-700 text-[10px] font-normal font-['Inter'] leading-[14px]">
                  Culture & Core Values
                </div>
                <div className="text-center text-zinc-700 text-[10px] font-normal font-['Inter'] leading-[14px]">
                  Challenges
                </div>
                <div className="text-center text-zinc-700 text-[10px] font-normal font-['Inter'] leading-[14px]">
                  Contact Us
                </div>
              </div>
            </div>
            <div className="flex-col justify-start items-end gap-5 inline-flex">
              <div className="text-justify text-neutral-400 text-xs font-normal font-['Inter'] leading-tight">
                CONTACT
              </div>
              <div className="flex-col justify-start items-end gap-2.5 flex">
                <div className="origin-top-left rotate-180 justify-start items-center gap-2.5 inline-flex">
                  <div className="w-[15px] h-[15px] relative">
                    <Image
                      className=""
                      width={15}
                      height={15}
                      alt="phone"
                      src="/assets/phone.svg"
                    />
                  </div>
                  <div className="origin-top-left rotate-180 text-justify text-zinc-700 text-[10px] font-normal font-['Inter'] leading-[14px]">
                    089 505 130 799
                  </div>
                </div>
                <div className="origin-top-left rotate-180 justify-start items-center gap-2.5 inline-flex">
                  <div className="w-[15px] h-[15px] ">
                    <Image
                      className=""
                      width={15}
                      height={15}
                      alt="phone"
                      src="/assets/streamline.svg"
                    />
                  </div>
                  <div className="origin-top-left rotate-180 text-justify text-zinc-700 text-[10px] font-normal font-['Inter'] leading-[14px]">
                    miftah@kolaborasiglobal.com
                  </div>
                </div>
              </div>
            </div>
          </div> */}
        </div>
        <div className="px-20">
          <hr className="border border-zinc-300 " />
          <p className="text-center py-[30px] text-zinc-700 text-sm ">
            Copyright © 2023 LayananKolaborasiGlobal
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
