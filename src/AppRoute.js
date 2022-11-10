import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Active from './Pages/Active/Active'
import All from './Pages/All/All'
import Completed from './Pages/Completed/Completed'


const AppRoute = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<All />} />
      <Route path="active" element={<Active />} />
      <Route path="completed" element={<Completed />} />
    </Routes>
  </>
  )
}

export default AppRoute