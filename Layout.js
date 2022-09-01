import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { BrowserRouter } from 'react-router-dom'

function Layout({ children, searchResultHandler, inputHandler }) { // In layout {Children} is always used as a prop 
  return (
    <>
      <BrowserRouter>
        <Header searchResultHandler={searchResultHandler} inputHandler={inputHandler} />
        {children}
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default Layout