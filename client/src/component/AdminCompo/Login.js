import React from 'react'

export default function Login() {
  return (
    <div>
      <h1>Login</h1>
      <div className='flex border rounded-lg w-[500px] justify-center ml-12'>
        <form>
            <div className='pb-2'>
                <input type='email' className='border' placeholder='Enter Email '></input>
            </div>
            <div>
                <input type='password' className='border' placeholder='Enter Password '></input>
            </div>
            <div>
                <button className='bg-[#19191A] hover:bg-[#2a2a2B] w-[100px] h-10 rounded-xl text-white'>Login</button>
            </div>
        </form>
      </div>
      
    </div>
  )
}
