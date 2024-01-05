import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import MainPage from './page/Main'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" Component={MainPage} />
      </Route>
    </Routes>
  )
}

export default Router
