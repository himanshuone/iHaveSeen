import React from "react";
import background from "../assets/flower2.jpg";
import background1 from "../assets/flowerbackground.jpg";
import background3 from "../assets/flower3.jpg";

function Curate() {
  return (
    <div className="flex flex-col">
      <div className="relative w-screen h-[80vh]">
        <div
          className="absolute w-full h-full bg-no-repeat  blur-3xl"
          style={{ backgroundImage: `url(${background})` }}
        ></div>

        <div className="relative flex w-full justify-center pt-20 ">
          <div className="flex items-center w-25 h-25 border-0 rounded-2xl overflow-hidden">
            <img src={background} alt="" className="w-39 " />{" "}
          </div>
        </div>
        <div className="absolute inset-2 flex items-center justify-center flex-col">
          <h1 className="text-9xl font-['Instrument_Serif'] tracking-tight">
            The iHaveSeen Approach
          </h1>

          <div className="text-3xl font-['Instrument_Serif'] tracking-tight flex justify-center w-3/4 items-center text-center">
            {" "}
            Learn how our unique blend of personal tracking, social discovery,
            and curated collections helps you build your cinematic identity and
            explore films through people.
          </div>
        </div>
      </div>

      <div className="relative w-screen h-[130vh] border-0  overflow-hidden">
        <div
          className="absolute w-full h-full bg-no-repeat bg-cover blur-2xl"
          style={{ backgroundImage: `url(${background3})` }}
        ></div>
        <div className="relative w-screen h-[130vh] flex flex-col items-center ">
          <div className="section1  py-20  h-1/3 w-full px-[10vw]">
            <div className="number and title flex flex-col w-full items-center font-['Instrument_Serif'] tracking-tight gap-6">
              <h1 className="text-4xl  text-gray-500">01</h1>
              <h1 className="text-6xl">Memory Preservation</h1>
            </div>
            <div className="number and title flex flex-col w-full h-1/3 items-center text-xs tracking-tight ">
              <div className="items-center flex py-10 w-full  gap-10 ">
                <div className="w-1/3 h-10 flex justify-center items-center">Virtual Session</div>
                <div className="w-1/3 h-10 flex justify-center items-center border-x-1 ">Virtual Session</div>
                <div className="w-1/3 h-10 flex justify-center items-center">Virtual Session</div>
              
              </div>
            </div>
          </div>




        </div>
      </div>
    </div>
  );
}

export default Curate;
