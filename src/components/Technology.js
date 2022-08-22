import data from "../data/data.json";
import { useState, useEffect } from "react";

const technologies = data.technology;

function Technology() {
  const [active, setActive] = useState(technologies[0]);
  const [count, setCount] = useState(0);
  const [intervalId, setIntervalId] = useState(0);
  const handleClick = (timed) => {
    if (intervalId) {
      clearInterval(intervalId);
      setIntervalId(0);
      return;
    }
    const newIntervalId = setInterval(() => {
      setCount((prevCount) => {
        let id;
        prevCount > technologies.length - 1 ? (id = 0) : (id = prevCount);
        let found = technologies.find((el) => el.id === id);
        setActive(found);
        return id + 1;
      });
    }, 7000);
    setIntervalId(newIntervalId);
  };
  useEffect(() => {
    handleClick();
  }, []);

  return (
    <>
      <div className="bg-technology-mobile md:bg-technology-tablet lg:bg-technology-desktop h-screen bg-cover bg-no-repeat w-full flex text-white font-normal bg-fixed overflow-y-auto">
        <div className="w-full relative">
        <div className="hidden">{count}</div>
          <div className="lg:ml-[6rem] mt-[15%] md:mt-[12%] lg:mt-[12%] py-[5%] lg:p-0 text-center lg:text-left">
            <div className="w-full mx-auto mt-[1rem] lg:mt-[3rem] lg:absolute">
              <p className="md:pl-[2rem] lg:pl-0 uppercase sm:text-center md:text-left font-barlowCondensed text-[16px] md:text-[20px] lg:text-[28px] leading-[19.2px] md:leading-[24px] lg:leading-[33.6px] tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px]">
                <span className="opacity-40 mix-blend-normal font-[700]">
                  03
                </span>{" "}
                space launch 101
              </p>
              <div className="flex flex-col-reverse lg:flex-row sm:items-center">
                <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col-reverse lg:flex-row-reverse md:gap-2">
                  <div className="lg:absolute top-[1rem] lg:top-[5rem] left-0 w-full lg:w-4/6 lg:left-1/3 lg:-translate-x-1/3">
                    <div className="text-[#D0D6F9] font-barlowCondensed text-[14px] md:text-[16px] lg:text-[16px] uppercase lg:mt-[5rem] leading-[16.8px] md:leading-[19.2px] lg:leading-[19.2px] tracking-[2.36px] md:tracking-[2.7px]">
                      the terminology...
                    </div>
                    <div key={active.name} className="animate-fadeIn font-bellefair text-[24px] md:text-[40px] lg:text-[56px] uppercase mt-[0.5rem] lg:mt-[1.5rem] mb-[2rem] leading-[27.5px] md:leading-[45.84px] lg:leading-[64.18px]">
                      {active.name}
                    </div>
                    <p key={active.description} className="animate-fadeIn font-barlow px-[2rem] lg:px-0 w-full md:w-11/12 lg:w-1/2 mx-0 md:mx-auto lg:mx-0 text-[#D0D6F9] text-[15px] md:text-[16px] lg:text-[18px] leading-[25px] lg:leading-[32px] md:leading-[28px]">
                      {active.description}
                    </p>
                  </div>
                  <div className="flex lg:flex-col gap-[1.5rem] justify-between w-fit lg:absolute bottom-0 lg:bottom-[unset] lg:top-[10rem] lg:left-0 mx-auto my-[1.5rem] lg:my-0">
                    {technologies.map(({ id }) => (
                      <div
                        onClick={() => handleClick(`${id}`)}
                        key={id}
                        className={
                          "transition-['background-color'] duration-[2000ms] ease-in cursor-pointer h-[40px] w-[40px] md:h-[60px] md:w-[60px] lg:h-[80px] lg:w-[80px] border-[0.5px] border-solid border-[#ffffff44] hover:border-[#FFFFFF] rounded-full flex items-center justify-center text-[16px] leading-[18.34px] md:text-[24px] md:leading-[27.5px] font-bellefair " +
                          (active.id === id
                            ? "bg-[#FFFFFF] text-black"
                            : "text-[#FFFFFF]")
                        }
                      >
                        {id}
                      </div>
                    ))}
                  </div>
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <img
                    className="animate-fadeIn  lg:hidden h-[170px] w-screen md:h-[310px] mx-auto mt-[2rem] md:mt-[3.5rem] object-cover"
                    src={active.images?.landscape}
                    alt={active.name}
                  />
                  <img key={active.images?.portrait}
                    className="animate-fadeIn hidden lg:block h-[527px] w-[520px] ml-auto my-auto object-contain"
                    src={active.images?.portrait}
                    alt={active.name}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Technology;
