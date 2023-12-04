import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer className="">
        <div className=" px-20 py-[50px] justify-between items-start flex ">
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <div className="w-[232px] flex-col justify-center items-start gap-5 flex">
              <Image
                className=""
                width={72}
                height={37}
                alt="Logo Lkg"
                src="/Logo lkg only 1.png"
              />
              <div className="flex-col justify-center items-start gap-[5px] flex">
                <h5 className="w-200px text-zinc-700 text-sm font-bold leading-tight">
                  PT. Layanan Kolaborasi Global
                </h5>
                <h6 className="text-zinc-700 text-sm font-normal leading-[17.50px]">
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

          <div className="flex-col justify-start items-start gap-5 flex">
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
        </div>
        <div className="px-20">
          <hr className="border border-zinc-400 " />
          <p className="text-center py-[30px] text-zinc-700 text-sm ">
            Copyright © 2023 LayananKolaborasiGlobal
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
