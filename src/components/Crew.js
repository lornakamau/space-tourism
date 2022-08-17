import data from "../data/data.json";
import { useState } from "react";

const myCrew = data.crew;

function Crew() {
  const [active, setActive] = useState(myCrew[0]);

  function getActive(id) {
    let found = myCrew.find((el) => el.id === id);
    setActive(found);
  }
  return (
    <>
      <div className="bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop h-screen bg-cover bg-no-repeat w-full flex text-white font-normal">
        <div className="w-full relative">
          <div className="lg:ml-[6rem] mt-[15%] md:mt-[12%] lg:mt-[12%] px-[10%] md:px-[2rem] py-[5%] lg:p-0 text-center lg:text-left">
            <div className="w-full mx-auto mt-[1rem] lg:mt-[3rem] lg:absolute">
              <p className="uppercase sm:text-center md:text-left font-barlowCondensed text-[16px] md:text-[20px] lg:text-[28px] leading-[19.2px] md:leading-[24px] lg:leading-[33.6px] tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px]">
                <span className="opacity-40 mix-blend-normal">02</span> meet
                your crew
              </p>
              <div className="flex flex-col-reverse lg:flex-row gap-[0rem] md:gap-[2rem] lg:gap-[0%] sm:items-center">
                <div className="w-full lg:w-1/2 text-center lg:text-left flex flex-col-reverse lg:flex-col">
                  <div className="lg:absolute top-[1rem] lg:top-[5rem] left-0 w-full lg:w-1/2">
                    <div className="font-bellefair text-[16px] md:text-[24px] lg:text-[32px] uppercase lg:mt-[5rem] leading-[18.34px] md:leading-[27.5px] lg:leading-[36.67px] opacity-50 mix-blend-normal">
                      {active.role}
                    </div>
                    <div className="font-bellefair text-[24px] md:text-[40px] lg:text-[56px] uppercase mt-[0.5rem] lg:mt-[1.5rem] mb-[2rem] leading-[27.5px] md:leading-[45.84px] lg:leading-[64.18px]">
                      {active.name}
                    </div>
                    <p className="font-barlow w-full md:w-11/12 lg:w-1/2 mx-0 md:mx-auto lg:mx-0 lg:mb-[6rem] text-[#D0D6F9] text-[15px] md:text-[16px] lg:text-[18px] leading-[25px] lg:leading-[32px] md:leading-[28px]">
                      {active.bio}
                    </p>
                  </div>
                  <div className="flex gap-[1.5rem] h-[28px] md:h-[34px] justify-between w-fit lg:absolute bottom-0 mx-auto my-[2rem]">
                    {myCrew.map(({ id }) => (
                      <div
                        onClick={() => getActive(id)}
                        key={id}
                        className={
                          "h-[15px] w-[15px] bg-[#FFFFFF] opacity-[0.17] hover:opacity-50 rounded-full mix-blend-normal " +
                          (active.id === id ? "opacity-100" : "")
                        }
                      ></div>
                    ))}
                  </div>
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <img
                    className="h-[223px] w-[327px] md:h-[300px] md:w-[300px] lg:h-[445px] lg:w-[445px] mx-auto mt-[2rem] lg:mt-[10%] object-contain"
                    src={active.images.png}
                    alt={active.name}
                  />
              <div className="bg-[#383B4B] h-[1px] opacity-50 w-11/12 mx-auto md:hidden"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Crew;
