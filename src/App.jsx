import { Outlet } from 'react-router-dom'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import useScrollToTop from './components/hooks/useScrollToTop'

const App = () => {
  useScrollToTop()
  return (
    <>
      <Header />
        <Outlet />
      <Footer />
    </>
  )
}

export default App


