import { useState } from 'react';
import {Form, useNavigate } from 'react-router-dom';

const Login_signup = ()=>{

    // const navigate = useNavigate();
    const [isLogin,setIsLogin] = useState(true);    //State to toggle between login and register forms

    // Handling form submissions
    const handleSubmit = async (event:any)=>{
        event.preventDefault()      //Preventing the default form submission
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData);

        // TODO: Make an API call here
    };
    // Toggle between login and register page
    const toggleForm =()=>{
        setIsLogin(!isLogin);
    }
    return (
        <div className='bg-blue-500 grid grid-cols-2'>
        <section id='container' className='container'>
            <h1 id='website_name' className='ml-15 text-[30px] font-medium text-blue-500 pt-5'>MiHealth</h1>
        </section>
        <section id='container' className='conta'>
            <div id="forms" className='forms'>
                <div id="formContainer" className='formContainer'>
                    {/* Dynamic title based on the form type,whether login or register,using tenary operator */}
                    <h2 id='subTitle' className='subTitle'>{isLogin ? 'Login' : 'Register'}</h2>
                    <Form method='post' onSubmit = {handleSubmit} id='auth-form'>
                        {/* Showing registration fields only when registering */}
                        {!isLogin && (
                            <>
                                <input type='text' id='fullName' name='fullName' placeholder='Full name'required></input>
                                <input type='tel' id='phone' name='phone' placeholder='Phone number'required></input>
                            </>
                        )}
                        {isLogin && (
                            <input type='text' id='username' name='username' placeholder='Username' required></input>
                        )}
                        {/* Fields that are shown for both the registration and login form */}
                        <input type='password' id='password' name='password' placeholder='Password' required></input>
                        {/* The forgot password field,shown only on the login form */}
                        {isLogin && (
                            <a className='forgotPassword' href=''>Forgot password</a>
                        )}
                        <button type='button'className='text-[20px] mt-5 bg-blue-400 w-[150px] h-[35px] rounded-md cursor-pointer'>{isLogin? 'Login':'Register'}</button>
                        <p className='accountExistance'>{isLogin? "Don't have an account,":'Already have an account,'}</p>
                        {/* Navigating to either Login or Registration page, depending on if the user has an account of not */}
                        <button type='button' onClick={toggleForm} className='accountExistanceBtn'>{!isLogin? 'Login here':'Register here'}</button>
                    </Form>
                </div>
            </div>
                {/* Slogan */}
                <h2 className='text-blue-500 text-[40px] ml-35 mt-5'>Your HEALTH,Your WE<span className='text-white'>ALTH</span></h2>
        </section>
        </div>
    )
}

export default Login_signup