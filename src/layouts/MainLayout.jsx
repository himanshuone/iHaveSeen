import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import background from "../assets/flowerbackground.jpg";

function MainLayout() {
  return (
    <>

      <div
        className="absolute flex w-screen h-screen bg-cover   bg-[right_top_35%]  bg-no-repeat blur-3xl"
        style={{ backgroundImage: `url(${background})` }}
      >

      </div>
      <div className="relative p-4">

        {/* Nav */}
        <div className="relative flex flex-col justify-between w-full text-gray-600 text-shadow-2xs font-extralight      lg:flex xl:flex-row sm:flex-col ">
          <div>
            <h1 className=" font-[montserrat] ">Karecare Wellness</h1>
          </div>
          <div className="flex gap-4">
            <h1 className="font-[montserrat]  ">CURATE</h1>
            <h1 className="font-[montserrat] ">COLLECTIVE</h1>

          </div>
        </div>
        {/* Nav--end */}
        <div className="flex flex-col">
          <div className=" xl:w-1/5 flex">

          </div>
          <div className="flex-1 mt-5">
            <div className="xl:w-3/5 lg:w-3/5 text-3xl font-['Instrument_Serif']">
              <h1 className=" tracking-tighter">
                Where Vision Meets Infinity.    </h1>
              <br>
              </br>
              <h1 className=" tracking-tighter ">
                Movies are the eighth wonder of the world—a digital portal that allows us to see the world without boundaries and feel the pulse of life without limits. Our approach invites you to step through the screen and discover a life of perspective, empathy, and profound wonder.  </h1>

            </div>
          </div>
          <div className="flex w-full justify-center mt-20">
            <div className="flex items-center w-35 h-35 border-0 rounded-2xl overflow-hidden">
  <img
    src={background}
    alt=""
    className="w-39 "
  /> </div></div> 



        </div>
        
        
      
      </div>
      

    </>
  );
}

export default MainLayout;

{
  /* <div className='flex-col w-full m-4 rounded'>
            <div className=' w-90% '>
                <Navbar />
            </div>


          <main className='flex-1  bg-red-600 justify-center items-center'>
              <Outlet />
          </main>
          </div> */
}
