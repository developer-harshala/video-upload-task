import React from 'react'
import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import CreatorInfo from './components/CreatorInfo'
import Footer from './components/Footer'
import Header from './components/Header'

const App = () => {
  return (
    <>
      <ToastContainer
        position='top-center'
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Header />
      <CreatorInfo />
      <Footer />
    </>
  )
}

export default App
