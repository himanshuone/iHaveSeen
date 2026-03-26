import React from 'react'
import NotValidRoute from '../pages/NotValidRoute'
import MainLayout from '../layouts/MainLayout'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../components/Sidebar/Sidebar'
import DashBoard from '../pages/DashBoard'
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
                <Route path='/addmovie' element={<AddMovie/>} />
        
              <Route path='/movieList' element={<MovieList/>} />
              <Route path='/movieDetail' element={<MovieDetail/>} />
          </Route>
          <Route path='*' element={<NotValidRoute />} />
      </Routes>
  )
}

export default AppRoute