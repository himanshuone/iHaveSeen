import React from 'react'
import background from "../../assets/flowerbackground.jpg";
import { Link } from 'react-router-dom';
import Curate from '../../pages/Curate';
import Collective from '../../pages/Collective';


function Navbar() {
  return (
    <>
    
      <div className="relative p-4">
  
          {/* Nav */}
          <div className="relative flex flex-col justify-between w-full text-gray-600 text-shadow-2xs font-extralight      lg:flex xl:flex-row sm:flex-col ">
            <div>
              <Link to="/curate" className="font-[montserrat]"  >ihaveSeen</Link>
            </div>
            <div className="flex gap-4">
              <Link to="/curate" className="font-[montserrat]"> CURATE</Link>
              <Link  to="/collective" className="font-[montserrat]" > COLLECTIVE</Link>
  
            </div>
          </div>
          </div>
    </>
  )
}

export default Navbar