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
<div className="relative flex flex-col justify-between w-screen px-4 text-gray-600 text-shadow-2xs font-medium       lg:flex xl:flex-row sm:flex-col ">
<div>
        <h1 className=" font-[montserrat]  pt-4">Karecare Wellness</h1>
</div>     
<div className="flex">
        <h1 className="font-[montserrat]  pt-4">Approach</h1>
        <h1 className="font-[montserrat]  px-4 pt-4">Get Connected</h1>

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
