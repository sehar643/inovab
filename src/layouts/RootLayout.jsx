import { Outlet } from 'react-router-dom'
import Navbar from '../components/header/Navbar'
import FooterOne from '../components/footer/FooterOne'
import FooterTwo from '../components/footer/FooterTwo'
import ScrollToTop from '../components/scrollToTop/ScrollToTop'

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <FooterOne />
      <FooterTwo />
      <ScrollToTop/>
    </>
  )
} 