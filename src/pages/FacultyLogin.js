import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { SERVER_URL } from '../config/server';

function FacultyLogin() {
    let navigate = useNavigate();
    const dept= useLocation().pathname.split('/')[2];
    return (
        <section className="bg-blue-50/60 w-full">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <span className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <i className='fa-solid fa-user mr-4'></i>
                    Faculty Login
                </span>
                <div className="w-full rounded-lg shadow-lg border md:mt-0 sm:max-w-md xl:p-0">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                            Sign in to your account
                        </h1>
                        <form className="space-y-4 md:space-y-6" method='POST' action={`${SERVER_URL}/dept/${dept}/login`}>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900">Username</label>
                                <input type="text" name="email" id="username" className="bg-blue-50 border shadow-inner outline-none p-2.5 w-full focus:ring-blue-500" placeholder="" required="" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input type="text" name="password" id="username" className="bg-blue-50 border shadow-inner outline-none p-2.5 w-full focus:ring-blue-500" placeholder="" required="" />
                            </div>
                            <div onClick={()=>navigate(`/dept/${dept}/onClickForgotPass`)} className='text-sm cursor-pointer hover:underline'>Forgot Password?</div>
                            <button type="submit" className="w-[80%] block text-white bg-blue-600 hover:bg-blue-700 focus:ring-4 focus:outline-none shadow font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-auto">Sign in</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FacultyLogin

