import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import AppLayout from '../layouts/AppLayout'

const AppRoute = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={AppLayout}>
          <Route path="/" Component={Home}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoute