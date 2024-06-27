import React from 'react'

import './App.css'
import './index.css'
import { Brand, CTA, Navbar } from './compoents';
import { Blog, Possibility, Header, Footer, WhatGPT3, Features } from './containers';

const App = () => {
  return (
    <div className="App">
      <div className="gradient__bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <CTA />
      <Blog />
      <Footer />
    </div>
  )
}

export default App