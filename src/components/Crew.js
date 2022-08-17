import data from "../data/data.json";
import { useState } from 'react';

const myCrew = data.crew;

function Crew() {
  const [active, setActive] = useState(myCrew[0]);

  function getActive(id) {
    let found = myCrew.find((el) => el.id === id);
    setActive(found)
  }
  return (
    <>
      <div className="bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop h-fit lg:h-screen bg-cover bg-no-repeat w-full flex text-white font-normal">
        <div className="w-full relative bg-yellow-500">
          <div className="lg:ml-[6rem] mt-[15%] md:mt-[12%] lg:mt-[12%] px-[10%] md:px-[2rem] py-[5%] lg:p-0 text-center lg:text-left">
            <p className="uppercase sm:text-center md:text-left font-barlowCondensed text-[16px] md:text-[20px] lg:text-[28px] leading-[19.2px] md:leading-[24px] lg:leading-[33.6px] tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px]">
              <span className="opacity-40">02</span> meet your crew
            </p>
            {/* <div className="flex flex-col lg:flex-row gap-[1rem] md:gap-[2rem] lg:gap-[0%] sm:items-center w-full mx-auto h-full mt-[1rem] lg:mt-[3rem] absolute">
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <div className="flex gap-[1.5rem] h-[28px] md:h-[34px] justify-between w-fit mx-auto">
                  {myCrew.map(
                    ({ id }) => (
                        <div onClick={() => getActive(id)} key={id} className={"h-[15px] w-[15px] bg-[#FFFFFF] opacity-[0.17] hover:opacity-50 rounded-full " + (active.id === id? 'opacity-100' : '')}></div>
                    )
                  )}
                </div>
                <div className="font-bellefair text-[56px] md:text-[80px] lg:text-[100px] uppercase mt-[1rem] lg:mt-[4rem]">
                  {active.name}
                </div>
                <p className="font-barlow w-full md:w-11/12 lg:w-1/2 mx-0 md:mx-auto lg:mx-0 text-[#D0D6F9] text-[15px] md:text-[16px] lg:text-[18px] leading-[25px] lg:leading-[32px] md:leading-[28px]">{active.bio}</p>
                <div className="bg-[#383B4B] h-[1px] opacity-50 w-11/12 lg:w-4/6 mx-auto lg:ml-0 mt-[4rem] mb-[1.5rem] md:mt-[2rem] lg:mt-[4rem]"></div>
              </div>
              <div className="w-full lg:w-1/2 text-center lg:text-left bg-red-900">
                <img className="h-[170px] w-[170px] md:h-[300px] md:w-[300px] lg:h-[445px] lg:w-[445px] mx-auto mt-[1rem] lg:mt-[10%] object-cover" src={active.images.png} alt={active.name} />
              </div>
            </div> */}
          </div>
          <div className="flex flex-col lg:flex-row gap-[1rem] md:gap-[2rem] lg:gap-[0%] sm:items-center w-full mx-auto h-full mt-[1rem] lg:mt-[3rem] absolute">
              <div className="w-full lg:w-1/2 text-center lg:text-left">
                <div className="flex gap-[1.5rem] h-[28px] md:h-[34px] justify-between w-fit mx-auto">
                  {myCrew.map(
                    ({ id }) => (
                        <div onClick={() => getActive(id)} key={id} className={"h-[15px] w-[15px] bg-[#FFFFFF] opacity-[0.17] hover:opacity-50 rounded-full " + (active.id === id? 'opacity-100' : '')}></div>
                    )
                  )}
                </div>
                <div className="font-bellefair text-[56px] md:text-[80px] lg:text-[100px] uppercase mt-[1rem] lg:mt-[4rem]">
                  {/* {active.name} */}
                </div>
                <p className="font-barlow w-full md:w-11/12 lg:w-1/2 mx-0 md:mx-auto lg:mx-0 text-[#D0D6F9] text-[15px] md:text-[16px] lg:text-[18px] leading-[25px] lg:leading-[32px] md:leading-[28px]">{active.bio}</p>
                <div className="bg-[#383B4B] h-[1px] opacity-50 w-11/12 lg:w-4/6 mx-auto lg:ml-0 mt-[4rem] mb-[1.5rem] md:mt-[2rem] lg:mt-[4rem]"></div>
              </div>
              <div className="w-full lg:w-1/2 text-center lg:text-left bg-red-900">
                <img className="h-[170px] w-[170px] md:h-[300px] md:w-[300px] lg:h-[445px] lg:w-[445px] mx-auto mt-[1rem] lg:mt-[10%] object-cover" src={active.images.png} alt={active.name} />
              </div>
            </div>
        </div>
      </div>
    </>
  );
};

export default Crew
