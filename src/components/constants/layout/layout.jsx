import React from 'react'
// import TopNav from '../navigation/topnav'
import WebNav from '../navigation/webnav'
import Responsive from '../navigation/responsive'
// import Footer from '../navigation/footer'
// import ScrollTop from '../navigation/scrollTop'

export default function Layout({children}) {
  return (
   <>
        <header className='fixed w-full top-0 z-40 drop-shadow-md'>
            {/* <TopNav/> */}
            <WebNav/>
            <Responsive/>
        </header>

        <main className=''>
            {children}
            {/* <ScrollTop/> */}
        </main>

        <footer>
            {/* <Footer/> */}
        </footer>
   </>
  )
}