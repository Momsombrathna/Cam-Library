import React, { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import Welcome from '.././assets/welcome.jpg';
import { Icon } from 'react-icons-kit';
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import axios from '../axios';
import { useAuth } from '../contexts/AuthContext';


const Login = () => {
    
    const { setUser, csrfToken } = useAuth();
	const [error, setError] = React.useState(null);

	// login user system
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password } = e.target.elements;
		const body = {
			email: email.value,
			password: password.value,
		};
		await csrfToken();
		try {
			const resp = await axios.post('/login', body);
			if (resp.status === 200) {
				setUser(resp.data.user);
				return <Navigate to="/profile" />;
			}
		} catch (error) {
			if (error.response.status === 401) {
				setError(error.response.data.message);
			}
		}
	};

    // handle password eye
    const [type, setType]=useState('password');
    const [icon, setIcon]=useState(eyeOff);
   
    const handleToggle=()=>{
        if(type === 'password'){
            setIcon(eye);
            setType('text');
        }else{
            setIcon(eyeOff);
            setType('password');
        }
    }

    return (
        <>
        <div class="py-36 p-5">
            <div class="flex bg-white text-gray-500 border-2 rounded-lg shadow-lg overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div class="hidden lg:block lg:w-1/2 bg-cover"><img src={Welcome} className='rounded-l-lg' alt="welcome" /></div>
                <form   action="#"
                        method="post"
                        onSubmit={handleSubmit}
                        class="w-full p-5 lg:w-1/2 md:px-10 px-5">
                    <div class="text-center mb-8">
                        <h2 class="text-3xl font-bold text-gray-700 text-center mb-5">Log In</h2>
                        <p class="text-xl text-gray-600 text-center">Welcome to Cam-Library</p>
                    </div>
                    {error && (
							<div
								className="flex p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
								role="alert">
								<svg
									aria-hidden="true"
									className="flex-shrink-0 inline w-5 h-5 mr-3"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
										clipRule="evenodd"></path>
								</svg>
								<span className="sr-only">Info</span>
								<div>{error}</div>
							</div>
						)}
                    <div class="mt-4">
                        <label class="block text-gray-700 text-md font-bold mb-2">Email</label>
                        <input 
                            type="email"
                            name="email"
                            id="email"
                            class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" placeholder='Your Username' />
                    </div>
                    <div class="mt-4">
                        <div class="flex justify-between">
                            <label class="block text-gray-700 text-md font-bold mb-2">Password</label>
                            {/* <a href="/#" class="text-sm text-gray-600 hover:text-black hover:underline">Forget Password?</a> */}
                        </div>
                        <div className=' relative'>
                        <input 
                            name="password"
                            id="password"
                            type={type}   class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border border-gray-300 rounded py-2 px-4 block w-full appearance-none" placeholder='Your Password' />
                        <span onClick={handleToggle} className=' text-xl absolute top-1 right-5'>
                            <Icon className=' hover:text-gray-700' icon={icon} size={22} />
                        </span>
                        </div>
                    </div>

                    <div class="mt-8">
                        <button type='submit' class="bg-blue-700 text-white text-center font-medium py-2.5 px-5 w-full rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">Login</button>
                    </div>
                    <div class="mt-6 flex flex-row items-center justify-center gap-2">
                        <div>Don't have an account ?</div>
                        <Link to="/signup"><div className='font-bold text-blue-600 text-md'>Create now</div></Link>  
                    </div>
                </form>
            </div>
        </div>        
        </>
    );
};

export default Login;