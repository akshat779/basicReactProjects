import { useState } from 'react'
import Nav from './Navigation/Nav'
import Products from './Products/products'
import Recommended from './recommended/recommended'
import './index.css'
function App() {


  return (
    <>
    <Nav />
    <Products />
    <Recommended />
    </>
  )
}

export default App
