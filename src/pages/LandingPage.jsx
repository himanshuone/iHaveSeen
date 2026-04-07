import React from 'react'
import background from "../assets/flowerbackground.jpg";

function LandingPage() {
  return (
      <>
  <div
          className="absolute flex w-screen h-screen bg-cover   bg-[right_top_35%]  bg-no-repeat blur-3xl"
          style={{ backgroundImage: `url(${background})` }}
        >
          {/* Background Image */}
        </div>
        
  
        <div className="relative ">
        
          {/* Nav--end */}
          <div className="flex ">
            
            <div>
                <div className="flex-1 mt-5 flex ">
                    <div className=" xl:w-1/5 lg:w-1/5 md:w-1/5  flex">
            </div>
              <div className="xl:w-3/5 lg:w-3/5 text-3xl font-['Instrument_Serif']">
                <h1 className=" tracking-tighter">
                  Where Vision Meets Infinity.    </h1>
                <br>
                </br>
                <h1 className=" tracking-tighter ">
                  Movies are the eighth wonder of the world—a digital portal that allows us to see the world without boundaries and feel the pulse of life without limits. Our approach invites you to step through the screen and discover a life of perspective, empathy, and profound wonder.  
                  </h1>
  
              </div>
            </div>
            <div className="relative flex w-full justify-center mt-20 ">
              <div className="flex items-center w-35 h-35 border-0 rounded-2xl overflow-hidden">
    <img
      src={background}
      alt=""
      className="w-39 "
    /> </div></div> 
            </div>
  
  
  
          </div>
          
          
        
        </div>
        
  
      </>
    );
}

export default LandingPage