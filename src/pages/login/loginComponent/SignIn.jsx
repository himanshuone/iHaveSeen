import React from 'react'

function SignIn() {
  return (
      <div>
          <div className='text-2xl mt-8  font-semibold'>Welcome back</div>
          <div className='mt-2' > <p className='font-sans text-gray-500 text-sm'>Sign in to your account</p></div>
          <div className='mt-4 font-sans'>
              <form onSubmit={() => console.log("Hello")}>
                  <div>
                      <label htmlFor="Email">Email</label>
                      <div className='border border-gray-300 rounded p-2 focus-within:border-pink-500 bg-gray-200'><input type="email" className='w-full h-full outline-0' />
                      </div>
                  </div>
                  <div className='mt-4'>
                      <label htmlFor="Password">Password</label>
                      <div className='flex items-center w-full gap-3'><div className='border border-gray-300 rounded p-2 focus-within:border-pink-500 bg-gray-200 w-[90%]'><input type="email" className='w-full h-full outline-0' />

                      </div>
                          <div className='h-full ' onClick={() => console.log("Password Visible")}>👀</div>
                      </div></div>
                  <div className='text-sm font-light mt-2 w-full flex justify-end'>Forget Password?</div>
                  <div className=' flex w-full border-0 bg-gray-300 p-2.5 rounded-xl items-center justify-center mt-2'>Sign In</div>

              </form>
              <div className='flex items-center text-xs mt-4'>
                  <div className='h-px flex-1 bg-gray-400'></div>
                  <span className='px-2 text-gray-400'>or continue with</span>
                  <div className='h-px flex-1 bg-gray-400'></div>
              </div>
              <div className='flex w-full gap-2 mt-4'>
                  <div className='border-0 flex flex-1 bg-gray-200 p-2 rounded-xl items-center justify-center'>Google</div>
                  <div className='border-0 flex flex-1 bg-gray-200 p-2 rounded-xl justify-center items-center'>Github</div>
              </div>
              <div>
                  <div className='flex text-sm justify-center items-center mt-4 gap-1'><div className='font-light text-gray-400'> Don't have an account?</div> <div className='font'>Create one</div></div>
              </div>

          </div>
      </div>
  )
}

export default SignIn