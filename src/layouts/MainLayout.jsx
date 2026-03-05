import { Outlet } from 'react-router-dom'
import Navbar from '../components/Nav/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'


function MainLayout() {
  return (
      <div className='w-screen p-0 m-0 h-screen bg-gray-300'>
          <Navbar />
          {/* <Sidebar /> */}

          <main>
              <Outlet />
          </main>
      </div>
  )
}

export default MainLayout