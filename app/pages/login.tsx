// ===========The sign-up/sign-in page================
import "../app.css";
import { useState } from 'react';
import { useNavigate } from 'react-router';

export default function LoginPage(){
    // Hooks to assist with navigation
    const navigate = useNavigate();     //Navigating to the home page
    const goToHome = (path:string)=>{
        navigate(path)
    }
    const [isLogin,setIsLogin] = useState(true);        //Toggling between login and registration cards

    return(
        <div className="loginContainer min-h-screen flex flex-col items-center justify-center px-4 py-12 bg-white">        {/*Main container for the forms and buttons */}
            <div className="absolute inset-0 bg-black/85" />

            <div className="relative z-10 w-full max-w-md bg-white rounded-lg p-5 text-black shadow-lg shadow-blue-500/50">     {/*a container for the button */}
                <button className="homeButton flex items-center text-black/50 hover:text-black/90 mb-6 transition-colors hover:cursor-pointer" onClick={()=>goToHome('/')}>
                    Home page
                </button>
                <div className="loginCard space-y-5">       {/*card heading */}
                    <div className="text-center mb-6">       
                        <h1 className="text-[35px] font-bold">{isLogin?'Login':'Register'}</h1>
                        <p className='text-sm mt-1'>{isLogin? 'Sign in to your MiHealth account': "Join MiHealth today-it's free"}</p>
                    </div>
                    {/* Fields for the registration card */}
                    {!isLogin && (
                        <div className="personalDetails grid grid-cols-2 gap-4">
                            <div className="firstName">
                                <label className="block text-sm mb-2">First Name</label>
                                <input type="text" className="w-full px-4 py-3  border rounded-lg" placeholder='Sibusiso' required />
                            </div>
                            <div className="lastName">
                                <label className="block text-sm mb-2">Last Name</label>
                                <input type="text" className="w-full px-4 py-3  border rounded-lg" placeholder='Mudau' required/>
                            </div>
                        </div>
                    )}
                    {/* Common fields across login and registration card */}
                    <div className="emailField">
                        <label className="block text-sm mb-2">Email</label>
                        <input type="email" className="w-full px-4 py-3 border border-input rounded-lg" placeholder='example@gmail.com' required/>
                    </div>
                    <div className="passwordField">
                        <label className="block text-sm mb-2">Password</label>
                        <input type="password" className="w-full px-4 py-3 border border-input rounded-lg" placeholder='****************' required/>
                    </div>
                    {/* Another fields for the registration */}
                    {!isLogin && (
                        <div className="confirmPasswordField">
                        <label className="block text-sm mb-2">Confirm Password</label>
                        <input type="password" className="w-full px-4 py-3 border border-input rounded-lg" placeholder='****************' required />
                    </div>
                    )}
                   {isLogin && (
                     <div className="forgotPasswordField">    {/* Link this to send email to the user */}
                        <a href='#' className='text-sm hover-underline'>
                            Forgot Password
                        </a>
                    </div>
                   )}
                   {/* Footer section for the login page*/}
                    {isLogin && (
                        <div>
                            <button className="w-full text-white py-3 rounded-lg font-semibold bg-blue-500 hover:cursor-pointer hover:-translate-y-1">
                            Login
                        </button>
                        <p className="noAccount">
                            Don't have an account?
                            <button className="underline hover:underline ml-1 text-blue-500 hover:cursor-pointer" onClick={()=>setIsLogin(false)}>
                                Register
                            </button>
                        </p>
                        </div>
                    )}
                    {/* Footer section for the registration */}
                    {!isLogin && (
                        <div>
                            <button className="w-full text-white py-3 rounded-lg font-semibold bg-blue-500 hover:cursor-pointer hover:-translate-y-1">
                            Register
                        </button>
                        <p className="noAccount">
                            Already have an account?
                            <button className="underline hover:underline ml-1 text-blue-500 hover:cursor-pointer" onClick={()=>setIsLogin(true)}>
                                Login
                            </button>
                        </p>
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}