import React, { useState } from 'react';

function Home() {
  
  const homeStyle = {
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    width: "100vw",
    display: "flex",
  };
  const [hovered, setHovered] = useState(true);
  const toggleHover = () => setHovered(!hovered);

  return (
    <div
      style={homeStyle}
      className="bg-home-mobile md:bg-home-tablet lg:bg-home-desktop h-screen"
    >
        <div className="w-full">
          <div className="lg:ml-[6rem] mt-[25%] md:mt-[15%] lg:mt-[18%] px-[10%] py-[5%] lg:p-0">
            <div className="w-full mx-auto text-white">
              <div className="flex flex-col lg:flex-row gap-16 lg:gap-[0%] sm:items-center">
                <div className="w-full lg:w-1/2 text-center lg:text-left">
                  <p className="uppercase font-barlow text-[16px] md:text-[20px] lg:text-[28px] tracking-[4.75px]">
                    so, you want to travel to
                  </p>
                  <h1 className="uppercase font-bellefair text-[80px] md:text-[150px] lg:my-6 ">
                    space
                  </h1>
                  <p className="font-barlow leading-[32px] font-normal text-[15px] md:text-[16px] lg:text-[18px] w-full lg:w-4/6">
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you
                    a truly out of this world experience!
                  </p>
                </div>
                <div className="h-[18rem] w-[18rem] md:h-[22rem] md:w-[22rem] lg:h-[33rem] lg:w-[33rem] mx-auto">
                <div className="relative">
                    <div className={`rounded-full bg-[#FFFFFF] mix-blend-normal items-center justify-center opacity-10 cursor-pointer  transition-[width] duration-[1s] ease-linear ${hovered ?  'hidden': 'flex h-[18rem] w-[18rem] md:h-[22rem] md:w-[22rem] lg:h-[33rem] lg:w-[33rem]'}`}></div>
                    <div className="absolute left-[3rem] md:left-[3.5rem] lg:left-[5.5rem] top-[3rem] md:top-[3.5rem] lg:top-[5.5rem] h-[12rem] w-[12rem] md:h-[15rem] md:w-[15rem] lg:h-[22rem] lg:w-[22rem] rounded-full uppercase bg-white text-black flex items-center cursor-pointer justify-center font-normal text-[20px] md:text-[32px] tracking-[2px] leading-[37px] font-bellefair" onMouseEnter={toggleHover}
                      onMouseLeave={toggleHover}>
                      explore
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

export default Home