import data from "../data/data.json";
import { useState, useEffect } from "react";

const destinations = data.destinations;

function  Destinations() {
  const [active, setActive] = useState(destinations[0]);
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
        prevCount > destinations.length - 1 ? (id = 0) : (id = prevCount);
        let found = destinations.find((el) => el.id === id);
        setActive(found);
        return id + 1;
      });
    }, 7000);
    setIntervalId(newIntervalId);
  };

  useEffect(() => {
    handleClick();
  }, []);

  function getActive(name, id) {
    // let found = destinations.find((el) => el.name === name);
    // setActive(found);
    handleClick(`${id}`);
    // if (intervalId) {
    //   clearInterval(intervalId);
    //   setIntervalId(0);
    // }
  }

  return (
    <>
    <div className="bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop h-screen bg-cover bg-no-repeat w-full flex text-white font-normal bg-fixed overflow-y-auto">
      <div className="w-full">
      <div className="hidden">{count}</div>
        <div className="lg:ml-[6rem] mt-[18%] md:mt-[12%] px-[10%] md:px-[2rem] py-[5%] lg:p-0 text-center lg:text-left">
          <p className="uppercase sm:text-center md:text-left font-barlowCondensed text-[16px] md:text-[20px] lg:text-[28px] leading-[19.2px] md:leading-[24px] lg:leading-[33.6px] tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px]">
            <span className="opacity-40 font-[700] mix-blend-normal">01</span> Pick your destination
          </p>
          <div className="flex flex-col lg:flex-row gap-[1rem] md:gap-[2rem] lg:gap-[0%] sm:items-center w-full mx-auto h-full mt-[1rem] lg:mt-[3rem]">
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <img key={active.images?.png} className="animate-fadeIn h-[170px] w-[170px] md:h-[300px] md:w-[300px] lg:h-[445px] lg:w-[445px] mx-auto mt-[1rem] lg:mt-[10%] object-cover" src={active.images?.png} alt={active.name} />
            </div>
            <div className="w-full lg:w-1/2 text-center lg:text-left">
              <div className="flex gap-[2.5rem] h-[28px] md:h-[34px] justify-between w-fit mx-auto lg:ml-0">
                {destinations.map(
                  ({ name, id }) => (
                    <div onClick={() => getActive(name, id)}
                    key={name} className={"transition-['border-color'] duration-[2000ms] ease-in text-[#D0D6F9] cursor-pointer text-[14px] md:text-[16px] uppercase font-barlowCondensed leading-[16.8px] md:leading-[19.2px] tracking-[2.36px] md:tracking-[2.7px] border-b-[3px] border-transparent hover:border-white hover:border-opacity-25 " + (active.name === name? 'no-hover-border' : '')}>
                      {name}
                    </div>
                  )
                )}
              </div>
              <div key={active.name} className="animate-fadeIn font-bellefair text-[56px] md:text-[80px] lg:text-[100px] uppercase mt-[1rem] lg:mt-[4rem]">
                {active.name}
              </div>
              <p key={active.description} className="animate-fadeIn font-barlow w-full md:w-11/12 lg:w-1/2 mx-0 md:mx-auto lg:mx-0 text-[#D0D6F9] text-[15px] md:text-[16px] lg:text-[18px] leading-[25px] lg:leading-[32px] md:leading-[28px]">{active.description}</p>
              <div className="bg-[#383B4B] h-[1px] opacity-50 w-11/12 lg:w-4/6 mx-auto lg:ml-0 mt-[4rem] mb-[1.5rem] md:mt-[2rem] lg:mt-[4rem]"></div>
              <div className="flex flex-col md:flex-row justify-between gap-[4rem] w-full md:w-4/6 mx-auto lg:ml-0">
              <div className="flex flex-col">
                  <p className="font-barlowCondensed text-[#D0D6F9] text-[14px] leading-[16.8px] tracking-[2.36px]">
                    AVG. DISTANCE
                  </p>
                  <p key={active.distance} className="animate-fadeIn font-bellefair uppercase text-[28px] md:text-[28px] leading-[25px] md:leading-[32.09px] mt-[1rem]">
                    {active.distance}
                  </p>
                </div>
                <div className="flex flex-col">
                  <p className="font-barlowCondensed text-[#D0D6F9] text-[14px] leading-[16.8px] tracking-[2.36px]">
                    EST. TRAVEL TIME
                  </p>
                  <p key={active.travel} className="animate-fadeIn font-bellefair uppercase text-[28px] md:text-[28px] leading-[25px] md:leading-[32.09px] mt-[1rem]">
                    {active.travel}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Destinations
