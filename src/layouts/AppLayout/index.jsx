import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import AppHeader from './AppHeader'
import AppFooter from './AppFooter'

const AppLayout = () => {
  return (
    <div className='w-full'>
      <AppHeader />
      <Outlet />
      <AppFooter />
    </div>
  )
}

export default AppLayout