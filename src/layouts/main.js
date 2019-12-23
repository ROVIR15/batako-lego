import React from 'react';
import {pages} from './pages'

import Appbar from '../components/Appbar'
import Footer from '../components/Footer'

export default function App() {
  return (
  	<>
      <Appbar/>
      {pages}
      <Footer/>
    </>
  )
}