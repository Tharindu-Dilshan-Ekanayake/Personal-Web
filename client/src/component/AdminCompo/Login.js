import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import toast from 'react-hot-toast'

export default function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    toast.promise(
      axios.post('/login', {
        admin_email: email,
        password: password
      }, {
        withCredentials: true
      }),
      {
        loading: 'Logging in...',
        success: (response) => {
          navigate('/admindash')
          return 'Login successful!'
        },
        error: (error) => {
          console.error('Login error:', error)
          return error.response?.data?.error || 'An error occurred during login'
        }
      }
    )
  }

  return (
    <div>
      <h1>Login</h1>
      <div className='flex border rounded-lg w-[500px] justify-center ml-12'>
        <form onSubmit={handleSubmit}>
          <div className='pb-2'>
            <input 
              type='email' 
              className='border' 
              placeholder='Enter Email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <input 
              type='password' 
              className='border' 
              placeholder='Enter Password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <div>
            <button 
              type='submit'
              className='bg-[#19191A] hover:bg-[#2a2a2B] w-[100px] h-10 rounded-xl text-white'
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}