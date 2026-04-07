import { Outlet } from "react-router-dom";
import Navbar from "../components/Nav/Navbar";



function MainLayout() {
  return (
    
   <div className=''>
            <div className='w-90% '>
                <Navbar />
            </div>


          <main className=''>
              <Outlet />
          </main>
          </div> 

  );
}

export default MainLayout;


