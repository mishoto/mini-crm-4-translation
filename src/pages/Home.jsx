import React from 'react'
import SignUp from '../components/sign-up/Signup'
import { AuthProvider } from '../context/authContext'

const Home = () => {
  return (
    <AuthProvider>
    <SignUp/>
    </AuthProvider>
  )
}

export default Home