import data from "../data/data.json";
import { useState, useEffect } from "react";

function Crew() {
  const crew = data.crew;
  const [active, setActive] = useState(crew[0]);
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
        prevCount > crew.length - 1 ? (id = 0) : (id = prevCount);
        let found = crew.find((el) => el.id === id);
        setActive(found);
        return id + 1;
      });
    }, 7000);
    setIntervalId(newIntervalId);
  };

  useEffect(() => {
    handleClick();
  }, []);
  
  function getActive(id) {
    let found = crew.find((el) => el.id === id);
    setActive(found);
  }

  return (
    <>
      <div className="bg-destination-mobile md:bg-destination-tablet lg:bg-destination-desktop h-screen bg-cover bg-no-repeat w-full flex text-white font-normal bg-fixed  md:overflow-auto lg:overflow-y-[unset]">
        <div className="w-full relative md:h-screen lg:h-[unset]">
          <div className="lg:ml-[6rem] mt-[15%] md:mt-[12%] lg:mt-[12%] px-[10%] md:px-[2rem] py-[5%] md:pb-0 lg:p-0 text-center lg:text-left">
            <div className="w-full mx-auto mt-[1rem] lg:mt-[3rem] lg:h-max-content">
              <p className="uppercase sm:text-center md:text-left font-barlowCondensed text-[16px] md:text-[20px] lg:text-[28px] leading-[19.2px] md:leading-[24px] lg:leading-[33.6px] tracking-[2.7px] md:tracking-[3.38px] lg:tracking-[4.72px]">
                <span className="opacity-40 mix-blend-normal font-[700]">02</span> meet
                your crew
              </p>
              <div className="flex flex-col-reverse md:flex-col lg:flex-row sm:items-center lg:items-start lg:justify-start">
                <div className="w-full lg:w-1/2 text-center lg:text-left md:mt-0 flex lg:block flex-col-reverse md:flex-col lg:mt-[9rem]">
                  <div className="w-full md:min-h-[250px] lg:h-[320px]">
                    <div key={active.role} className="animate-fadeInRole font-bellefair text-[16px] md:text-[24px] lg:text-[32px] uppercase md:mt-[2rem] leading-[18.34px] md:leading-[27.5px] lg:leading-[36.67px] opacity-50 mix-blend-normal">
                      {active.role}
                    </div>
                    <div key={active.name} className="animate-fadeIn font-bellefair text-[24px] md:text-[40px] lg:text-[56px] uppercase mt-[0.5rem] lg:mt-[1.5rem] mb-[2rem] leading-[27.5px] md:leading-[45.84px] lg:leading-[64.18px]">
                      {active.name}
                    </div>
                    <p key={active.bio} className="animate-fadeIn font-barlow w-full md:w-11/12 lg:w-2/3 mx-0 md:mx-auto lg:mx-0 lg:mb-[6rem] text-[#D0D6F9] text-[15px] md:text-[16px] lg:text-[18px] leading-[25px] lg:leading-[32px] md:leading-[28px]">
                      {active.bio}
                    </p>
                  </div>
                  <div className="flex gap-[1.5rem] md:h-[34px] lg:h-[unset] justify-between items-center w-fit mx-auto my-[2rem] lg:my-[2rem] lg:ml-0 lg:mt-[4rem]">
                    {crew.map(({ id }) => (
                      <div
                        onClick={() => getActive(id)}
                        key={id}
                        className={
                          "transition-['opacity'] duration-[2000ms] ease-in cursor-pointer h-[15px] w-[15px] bg-[#FFFFFF] opacity-[0.17] hover:opacity-50 rounded-full mix-blend-normal " +
                          (active.id === id ? "opacity-100" : "")
                        }
                      ></div>
                    ))}
                  </div> 
                </div>
                <div className="w-full lg:w-1/2 text-center lg:text-left h-[210px] md:h-[600px] lg:h-[unset] mt-[2rem] md:mt-0 lg:absolute lg:bottom-0 lg:right-0">
                  <img key={active.images?.webp} className="animate-fadeIn mx-auto lg:ml-0 h-[inherit] w-auto lg:h-full lg:w-[unset]"
                    src={active.images?.webp}
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

export default Crew
