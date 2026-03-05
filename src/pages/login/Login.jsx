import React from 'react'

function Login() {
    return (
        <>
            <div className='w-screen h-screen flex'>
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
                <div className='w-[57%] bg-gray-300  h-full justify-center flex items-center'> 
                    <div className=' flex  bg-gray-100 h-fit border-0 rounded-xl w-full max-w-105 p-5 items-center justify-center'>

                        <div className='bg-gray-200 p-2 flex rounded-xl space-x-1 w-full justify-evenly'> <div className='bg-white items-center w-full p-2 flex justify-center rounded-xl'>Sign In</div> <div className='bg-white items-center w-full p-2 flex justify-center rounded-xl'>Create Account</div></div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login