import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="max-w-7xl container mx-auto lg:px-20 px-10 py-[50px] lg:justify-between lg:items-start justify-between items-start md:justify-center md:items-center flex lg:flex-row flex-col gap-[30px]">
          <div className="flex-col justify-start items-start gap-[30px] flex">
            <div className="lg:w-[232px] w-full flex-col justify-center lg:items-start items-center gap-5 flex">
              <Image
                className="lg:w-[72px] lg:h-[37px] w-[97px] h-[50px]"
                width={72}
                height={37}
                alt="Logo Lkg"
                src="/antimages/Logo LKG Only 1.svg"
              />
              <div className="flex-col justify-center lg:items-start items-center gap-[5px] flex">
                <h5 className="w-200px text-zinc-700 lg:text-sm s:text-base xs:text-lg text-lg font-bold leading-tight">
                  PT. Layanan Kolaborasi Global
                </h5>
                <h6 className="text-zinc-700  text-sm font-normal leading-[17.50px]">
                  www.layanankolaborasi.com
                </h6>
              </div>
            </div>
            <p className="lg:w-[300px] text-justify text-zinc-700 text-sm font-normal leading-normal">
              Jl. Diponegoro No.109, Dauh Puri Klod, Kec. Denpasar Barat, Kota
              Denpasar, Bali 80232
            </p>
          </div>

          <div className="flex-col lg:justify-start md:hidden lg:items-start md:justify-start md:items-start gap-5 lg:flex ">
            <p className=" text-neutral-400 text-sm font-normal leading-normal">
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

          <div className="flex-col lg:justify-start md:hidden lg:items-start md:justify-start md:items-start gap-5 lg:flex">
            <p className=" text-neutral-400 text-sm font-normal leading-normal">
              CONTACT
            </p>
            <div className="flex-col justify-start items-start gap-2.5 flex">
              <div className="justify-start items-center gap-2.5 flex">
                <div className="w-[30px] h-[30px]">
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
                <div className="w-[30px] h-[30px]">
                  <Image
                    className=""
                    width={30}
                    height={30}
                    alt="streamline"
                    src="/assets/streamline.svg"
                  />
                </div>
                <p className=" text-zinc-700 text-sm font-normal leading-normal">
                  miftah@kolaborasiglobal.com
                </p>
              </div>
            </div>
          </div>
           
           {/* tampilan md */}
          <div className="hidden md:flex justify-between gap-20 lg:hidden">
            <div className="flex-col lg:justify-start lg:items-start md:justify-start md:items-start gap-5 flex ">
              <p className=" text-neutral-400 text-sm font-normal leading-normal">
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

            <div className="flex-col lg:justify-start lg:items-start md:justify-start md:items-start gap-5 flex">
              <p className=" text-neutral-400 text-sm font-normal leading-normal">
                CONTACT
              </p>
              <div className="flex-col justify-start items-start gap-2.5 flex">
                <div className="justify-start items-center gap-2.5 flex">
                  <div className="w-[30px] h-[30px]">
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
                  <div className="w-[30px] h-[30px]">
                    <Image
                      className=""
                      width={30}
                      height={30}
                      alt="streamline"
                      src="/assets/streamline.svg"
                    />
                  </div>
                  <p className=" text-zinc-700 text-sm font-normal leading-normal">
                    miftah.lkg@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:px-20 px-10 container mx-auto">
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
