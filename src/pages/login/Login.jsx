import React, { useState } from 'react'

function Login() {
    const [account, setaccount] = useState(true);
    return (
        <>
            <div className='w-screen h-screen flex font-playfair'>
                <div className='w-[43%] bg-[#1a1a1e] h-full p-15'>
                    <div>
                        <div className='text-white font-stretch-ultra-expanded text-3xl flex space-x-3.5 items-center '>
                            <div className=' bg-gray-700 rounded-full border-2 size-6 flex items-center justify-center'>
                                <div className=' bg-white rounded-full border-2 size-3'></div>
                            </div>
                            <div className='font-serif '> ihaveSeen</div></div>
                        <div className='max-w-[320px] font-serif text-3xl text-gray-200 mt-10 leading-relaxed'>
                            <p>Every film you've lived through,<br />
                                remembered the way you felt it.

                            </p>
                        </div>
                        <div className='mt-10'>
                            <ul className='list-none font-extralight text-gray-500 space-y-3.5'>
                                <li className='flex items-center'> <div className='border-0 rounded justify-center items-center flex size-8 bg-[#2A2F33] mr-2'>🎬</div>
                                    Track every movie you've watched</li>
                                <li className='flex items-center'> <div className='border-0 rounded justify-center items-center flex size-8 bg-[#2A2F33] mr-2'>🎭</div>
                                    Tag by mood, not just genre</li>
                                <li className='flex items-center'> <div className='border-0 rounded justify-center items-center flex size-8 bg-[#2A2F33] mr-2'>🤖</div>
                                    AI recommendations coming soon</li>
                                <li className='flex items-center'> <div className='border-0 rounded justify-center items-center flex size-8 bg-[#2A2F33] mr-2'>👥</div>
                                    Share lists with friends</li>
                            </ul>
                        </div>
                    </div>

                </div>
                <div className='w-[57%] bg-gray-300  h-full justify-center flex items-center min-w-105'>
                    <div className='bg-gray-100 h-fit border border-gray-300 rounded-xl w-full max-w-105 min-w-105 p-10 items-center justify-center shadow-black'>

                        <div className='bg-gray-200 p-1 flex rounded-xl space-x-1 w-full justify-evenly'> <div className='bg-white items-center w-full p-2 flex justify-center rounded-xl'>Sign In</div> <div className='bg-white items-center w-full p-2 flex justify-center rounded-xl'>Create Account</div></div>
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


                    </div>
                </div>
            </div>
        </>
    )
}

export default Login