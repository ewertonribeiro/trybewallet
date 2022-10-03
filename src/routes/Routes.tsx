import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import Login from '../Pages/Login'
import Wallet from '../Pages/Wallet'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/carteira',
    element: <Wallet />
  }
])

export default router
