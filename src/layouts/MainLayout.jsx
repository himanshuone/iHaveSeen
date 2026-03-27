import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import background from "../assets/flowerbackground.jpg";

function MainLayout() {
  return (
    <>
    <div>
        <div
      className="flex w-screen h-screen bg-cover   bg-[center_top_75%]  bg-no-repeat blur-3xl"
      style={{ backgroundImage: `url(${background})` }}
    >

    </div>
    <h1 className="font-montserrat text-3xl font-bold">Karecare Wellness</h1>
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
