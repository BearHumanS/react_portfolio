import { useEffect } from 'react'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  useEffect(() => {
    const handleBeforeUnload = () => window.scrollTo(0, 0)

    window.addEventListener('beforeunload', handleBeforeUnload)

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload)
    }
  }, [])
  return <Outlet />
}

export default Layout
