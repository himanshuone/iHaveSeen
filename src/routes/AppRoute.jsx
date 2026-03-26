import React from 'react'
import NotValidRoute from '../pages/NotValidRoute'
import MainLayout from '../Layouts/MainLayout'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import DashBoard from '../Pages/DashBoard'
import Login from '../pages/login/Login'
import AddMovie from '../pages/AddMovie'
import MovieDetail from '../pages/MovieDetail'
import MovieList from '../pages/MovieList'



function AppRoute() {
  return (
      <Routes>
          <Route element={<MainLayout />}>
              <Route path='/' element={<DashBoard/>} />
              <Route path='login' element={<Login/>} />     
                <Route path='addmovie' element={<AddMovie/>} />
        
              <Route path='MovieList' element={<MovieList/>} />
              <Route path='MovieDetail' element={<MovieDetail/>} />
          </Route>
          <Route path='*' element={<NotValidRoute />} />
      </Routes>
  )
}

export default AppRoute