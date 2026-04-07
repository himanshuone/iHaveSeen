import React from 'react'
import NotValidRoute from '../pages/NotValidRoute'
import MainLayout from '../layouts/MainLayout'
import { Route, Routes } from 'react-router-dom'


import Login from '../pages/login/Login'
import Curate from '../pages/Curate'
import MovieDetail from '../pages/MovieDetail'
import MovieList from '../pages/MovieList'
import LandingPage from '../pages/LandingPage'



function AppRoute() {
  return (
      <Routes>
          <Route element={<MainLayout />}>
              <Route path='/' element={<LandingPage/>} />
              <Route path='login' element={<Login/>} />     
                <Route path='/curate' element={<Curate/>} />
        
              <Route path='/movieList' element={<MovieList/>} />
              <Route path='/movieDetail' element={<MovieDetail/>} />
          </Route>
          <Route path='*' element={<NotValidRoute />} />
      </Routes>
  )
}

export default AppRoute