import React from 'react'
import NotValidRoute from '../pages/NotValidRoute'
import DashBoard from '../pages/DashBoard'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import MainLayout from '../layouts/MainLayout'


function AppRoute() {
  return (
      <Routes>
          <Route element={<MainLayout />}>

              <Route path='/' element={<DashBoard/>} />
              <Route path='contact' element={<Sidebar/>} />
          </Route>
          <Route path='*' element={<NotValidRoute />} />
      </Routes>
  )
}

export default AppRoute