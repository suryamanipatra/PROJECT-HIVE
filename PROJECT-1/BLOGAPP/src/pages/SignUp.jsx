import { Button, Label, TextInput } from 'flowbite-react'
import React from 'react'
import { Link } from 'react-router-dom'

const SignUp = () => {
  return (
    <div className='min-h-screen mt-20' > 
      <div className='flex p-3 max-x-3xl mx-auto flex-col md:flex-row md:items-center gap-5'>
        {/* left */}
        <div className='flex-1'>
        <Link to="/" className='font-bold dark:text-white text-4xl'>
        <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Surya's</span>Blog
        </Link>
        <p className='mt-5 text-sm'>This is a Blog App. You can signup with your email and password or with google .</p>
        </div>
        {/* right */}
        <div className='flex-1'>
          <form className='flex flex-col gap-4'>
            <div className=''>
              <Label value='Your Username' />
              <TextInput type='text' placeholder='Username' id='username'/>
              <Label value='Your Email' />
              <TextInput type='text' placeholder='name@company.com' id='email'/>
              <Label value='Your Password' />
              <TextInput type='text' placeholder='Password' id='password'/>
            </div>
            <Button gradientDuoTone="purpleToPink">
              Sign Up
            </Button>
          </form>
          <div>
            <span className='flex gap-2 mt-5 text-sm'>
              Have an account ? 
            </span>
            <Link to="/signin" className='text-indigo-500 dark:text-indigo-400' >signin</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUp