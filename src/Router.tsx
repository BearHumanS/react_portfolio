import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
/* import ContactPage from '@page/Contact' */
import MainPage from '@page/Main'

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" Component={MainPage} />
        {/*  <Route path="/contact" Component={ContactPage} /> */}
      </Route>
    </Routes>
  )
}

export default Router
