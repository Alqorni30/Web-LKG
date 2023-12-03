import Image from "next/image";

const Tech = () => {
  return (
    <>
      <div className="px-20 py-[50px] bg-gray-200 flex-col justify-start items-center gap-[50px] flex">
        <h1 className="text-center text-zinc-700 text-[40px] font-bold leading-[50px]">
          <span className="text-pink">Techno</span>
          logies
        </h1>
        <div className="justify-center content-center gap-5 flex lg:flex-wrap overflow-x-scroll md:overflow-x-auto">
          <button className="py-2.5 flex gap-5 px-[30px] text-base bg-white rounded-[90px]">
            <Image
              className="w-[25px] h-[25px]"
              width={25}
              height={25}
              alt="flutter"
              src="/logotech/flutter 1.svg"
            />
            Flutter
          </button>
          <button className="py-2.5 flex gap-5 px-[30px] text-base bg-white rounded-[90px]">
            <Image
              className="w-[25px] h-[25px]"
              width={25}
              height={25}
              alt="kotlin"
              src="/logotech/Kotlin 1.svg"
            />
            Kotlin
          </button>
          <button className="py-2.5 flex gap-5 px-[30px] text-base bg-white rounded-[90px]">
            <Image
              className="w-[25px] h-[25px]"
              width={25}
              height={25}
              alt="angular"
              src="/logotech/angular 1.svg"
            />
            Angular
          </button>
          <button className="py-2.5 flex gap-5 px-[30px] text-base bg-white rounded-[90px]">
            <Image
              className="w-[25px] h-[25px]"
              width={25}
              height={25}
              alt="springboot"
              src="/logotech/Springboot 1.svg"
            />
            Springboot
          </button>
          <button className="py-2.5 flex gap-5 px-[30px] text-base bg-white rounded-[90px]">
            <Image
              className="w-[25px] h-[25px]"
              width={25}
              height={25}
              alt="java"
              src="/logotech/Java-logo-1 1.svg"
            />
            Java
          </button>
          <button className="py-2.5 flex gap-5 px-[30px] text-base bg-white rounded-[90px]">
            <Image
              className="w-[25px] h-[25px]"
              width={25}
              height={25}
              alt="NOde js"
              src="/logotech/Nodejs 1.svg"
            />
            Node JS
          </button>
          <button className="py-2.5 flex gap-5 px-[30px] text-base bg-white rounded-[90px]">
            <Image
              className="w-[25px] h-[25px]"
              width={25}
              height={25}
              alt="vue JS"
              src="/logotech/Vuejs 1.svg"
            />
            Vue JS
          </button>
          <button className="py-2.5 flex gap-5 px-[30px] text-base bg-white rounded-[90px]">
            <Image
              className="w-[25px] h-[25px]"
              width={25}
              height={25}
              alt="react js"
              src="/logotech/Reactjs 2.svg"
            />
            React JS
          </button>
          <button className="py-2.5 flex gap-5 px-[30px] text-base bg-white rounded-[90px]">
            <Image
              className="w-[25px] h-[25px]"
              width={25}
              height={25}
              alt="Pyton"
              src="/logotech/python 1.svg"
            />
            Python
          </button>
          <button className="py-2.5 flex gap-5 px-[30px] text-base bg-white rounded-[90px]">
            <Image
              className="w-[25px] h-[25px]"
              width={25}
              height={25}
              alt="Huawei Cloud"
              src="/logotech/Huawei.svg"
            />
            Huawei Cloud
          </button>
          <button className="py-2.5 flex gap-5 px-[30px] text-base bg-white rounded-[90px]">
            <Image
              className="w-[25px] h-[25px]"
              width={25}
              height={25}
              alt="docker"
              src="/logotech/docker.svg"
            />
            Docker
          </button>
          <button className="py-2.5 flex gap-5 px-[30px] text-base bg-white rounded-[90px]">
            <Image
              className="w-[25px] h-[25px]"
              width={25}
              height={25}
              alt="kubernetes"
              src="/logotech/kubernetes 1.svg"
            />
            Kubernetes
          </button>
        </div>
      </div>
    </>
  );
};

export default Tech;
