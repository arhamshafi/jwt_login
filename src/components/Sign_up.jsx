import React, { useContext } from 'react'
import { FaPlus } from "react-icons/fa6";
import { MdOutlineStars } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { App_context } from '../context';
import { useNavigate } from 'react-router-dom';

function Sign_up() {
    let { sing_handle, sign_up_data, Sign_up } = useContext(App_context)
    let navigate = useNavigate()
    return (
        <div className='w-full h-max py-15 bg-[#1a1a1a] flex justify-center items-center'>
            <div className='w-[85%] h-[max]  rounded-2xl bg-[#333333] py-.05 pb-10'>
                <h1 className='text-white tw_sh text-center text-4xl tracking-[2px] mt-8 '>Sign up Your Account</h1>
                <p className='text-[#FFB347] tracking-wider to_sh text-sm mt-2 text-center'>Join creators shaping the future</p>

                <div className='w-[90%] h-max py-10 bg-black/80 mx-auto  rounded-2xl mt-3'>
                    <div className='w-full h-max flex justify-center flex-col items-center gap-5'>
                        <input onChange={sing_handle} value={sign_up_data.name} name='name' type='Name' placeholder='Enter Your Name' className='bg-white/40 outline-none px-5 border-3 border-transparent focus:border-orange-600 transition-all duration-150 ease-in text-white rounded-xl h-[50px] w-[550px]' />
                        <input onChange={sing_handle} value={sign_up_data.email} name='email' type='email' placeholder='Enter Your Email' className='bg-white/40 outline-none px-5 border-3 border-transparent focus:border-orange-600 transition-all duration-150 ease-in text-white rounded-xl h-[50px] w-[550px]' />
                        <input onChange={sing_handle} value={sign_up_data.number} name='number' type="number" placeholder="Enter Your Number" className="bg-white/40 outline-none px-5 border-3 border-transparent focus:border-orange-600 transition-all duration-150 ease-in text-white rounded-xl h-[50px] w-[550px] custom-number-input" />
                        <input onChange={sing_handle} value={sign_up_data.password} name='password' type='password' placeholder='Enter Your Password' className='bg-white/40 outline-none px-5 border-3 border-transparent focus:border-orange-600 transition-all duration-150 ease-in text-white rounded-xl h-[50px] w-[550px]' />
                    </div>

                    <button className='w-[550px] h-[50px] rounded-2xl wx_sh bg-white mx-auto block mt-5 hover:scale-103 cursor-pointer transition-all duration-200 ease-in-out ' onClick={Sign_up} >Sign up</button>
                    <button className='w-[550px] h-[50px] ox_sh rounded-2xl bg-[#CC5500] mx-auto block text-white mt-5 hover:scale-103 cursor-pointer transition-all duration-200 ease-in-out' onClick={()=>navigate("/")} >You Already Have Account</button>
                    <div className='w-[90%] mx-auto mt-5 flex justify-center gap-10 items-center'>
                        <div className='w-[35%] border border-white'></div>
                        <p className=' text-[#FFB347] to_sh text-md'>Or Continue With</p>
                        <div className='w-[35%] border border-white'></div>
                    </div>
                    <div className='w-full mt-3 flex justify-center gap-5 items-center'>
                        <button className="flex items-center transition-all duration-200 ease-in-out cursor-pointer hover:-translate-y-1">
                            <span dangerouslySetInnerHTML={{ __html: `<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 48 48"><path fill="#fbc02d" d="M43.6 20.5H42V20H24v8h11.3C33.4 32.4 29.2 35 24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11c2.6 0 5 .9 6.9 2.4l6.1-6.1C33.3 6.1 28.9 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 20-8 20-20 0-1.3-.1-2.7-.4-3.9z"/><path fill="#e53935" d="M6.3 14.6l6.6 4.8C14.3 16 18.8 13 24 13c2.6 0 5 .9 6.9 2.4l6.1-6.1C33.3 6.1 28.9 4 24 4 15.3 4 7.9 9.8 6.3 14.6z"/><path fill="#4caf50" d="M24 44c5.2 0 10-1.8 13.7-4.9l-6.4-5.2C29.2 35 26.6 36 24 36c-5.1 0-9.4-3.4-10.9-8.1l-6.6 5.1C9.6 39.5 16.3 44 24 44z"/><path fill="#1565c0" d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-4.1 5.5-7.3 6.1l.1.1 6.4 5.2c-.4.3 6.6-4.8 6.6-14.4 0-1.3-.1-2.7-.4-3.9z"/></svg>` }} />
                        </button>
                        <button className="flex items-center transition-all duration-200 ease-in-out cursor-pointer hover:-translate-y-1">
                            <span
                                dangerouslySetInnerHTML={{
                                    __html: `<svg xmlns="http://www.w3.org/2000/svg" height="30" width="30" viewBox="0 0 24 24" fill="#1DA1F2"><path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.3 4.3 0 0 0 1.89-2.37 8.59 8.59 0 0 1-2.72 1.04A4.28 4.28 0 0 0 16.11 4c-2.37 0-4.29 1.92-4.29 4.29 0 .34.04.67.11.99-3.56-.18-6.71-1.88-8.82-4.47a4.27 4.27 0 0 0-.58 2.16c0 1.49.76 2.81 1.91 3.58a4.25 4.25 0 0 1-1.94-.53v.05c0 2.09 1.49 3.83 3.46 4.23a4.3 4.3 0 0 1-1.93.07c.54 1.69 2.11 2.92 3.97 2.96a8.6 8.6 0 0 1-5.33 1.84c-.35 0-.7-.02-1.05-.06a12.13 12.13 0 0 0 6.57 1.93c7.88 0 12.2-6.53 12.2-12.2 0-.19 0-.39-.01-.58A8.69 8.69 0 0 0 24 4.56c-.85.38-1.77.63-2.74.75a4.3 4.3 0 0 0 1.9-2.37z"/></svg>`,
                                }}
                            />
                        </button>
                        <FaFacebook className='text-blue-500 text-2xl bg-white rounded-xl transition-all duration-200 ease-in-out cursor-pointer hover:-translate-y-1' />
                    </div>
                    <p className='text-white text-center mt-3 text-sm'>By clicking the button, you agree to our <span className='text-blue-300'>Terms of Use</span> and <span className='text-blue-300'>Privacy Policy</span></p>

                </div>
            </div>
        </div>
    )
}

export default Sign_up