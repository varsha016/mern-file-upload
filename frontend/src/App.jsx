import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from './component/Navbar'
import MultiDocs from './pages/MultiDocs'
import MultiImage from './pages/multiImage'
import SingleImage from './pages/SingleImage'

export default function App() {
  return <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<h1>Home Page</h1>} />
        <Route path='/multi-image' element={<MultiImage />} />
        <Route path='/single-image' element={<SingleImage />} />
        <Route path='/multi-doc' element={<MultiDocs />} />
        <Route path='*' element={<p>Page Not Found</p>} />
      </Routes>
    </BrowserRouter>


  </>
}
