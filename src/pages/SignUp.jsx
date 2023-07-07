import React, { useState } from 'react';
import Welcome from '.././assets/welcome.jpg';
import { Icon } from 'react-icons-kit'
import { eyeOff } from 'react-icons-kit/feather/eyeOff';
import { eye } from 'react-icons-kit/feather/eye';
import { Link } from 'react-router-dom';
import axios from '../axios';
import { useAuth } from '../contexts/AuthContext';

export default function SignUp () {

    const { setUser } = useAuth();
	const [nameError, setNameError] = React.useState('');
	const [emailError, setEmailError] = React.useState('');
	const [passwordError, setPasswordError] = React.useState('');
	
    // register user
	const handleSubmit = async (e) => {
		e.preventDefault();
		const { name, email, password, cpassword } = e.target.elements;
		const body = {
			name: name.value,
			email: email.value,
			password: password.value,
			password_confirmation: cpassword.value,
		};
		try {
			const resp = await axios.post('/register', body);
			if (resp.status === 200) {
				setUser(resp.data.user);
				return <Navigate to="/profile" />;
			}
		} catch (error) {
			if (error.response.status === 422) {
				console.log(error.response.data.errors);
				if (error.response.data.errors.name) {
					setNameError(error.response.data.errors.name[0]);
				} else {
					setNameError('');
				}
				if (error.response.data.errors.email) {
					setEmailError(error.response.data.errors.email[0]);
				} else {
					setEmailError('');
				}
				if (error.response.data.errors.password) {
					setPasswordError(error.response.data.errors.password[0]);
				} else {
					setPasswordError('');
				}
			}
		}
	};

    
    // handle password eye
    const [type, setType] = useState('password');
    const [icon, setIcon] = useState(eyeOff);

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
        <div class=" py-36 p-5">
            <div class="flex bg-white text-gray-500 rounded-lg shadow-xl border-2 overflow-hidden mx-auto max-w-sm lg:max-w-4xl">
                <div class="hidden lg:block lg:w-3/4 bg-cover"><img src={Welcome} className='rounded-l-lg' alt="welcome" /></div>
                <form   action="#"
						method="post"
						onSubmit={handleSubmit}
                        class="w-full p-4 lg:w-1/2 md:px-10 px-5">
                    <div class="text-center mb-4">
                        <h2 class="text-3xl font-bold text-gray-700 text-center">Register Account</h2>
                    </div>
                    <div class="mt-3">
                        <label class="block text-gray-600 text-sm font-bold mb-1">Your Name</label>
                        <input  type="text"
								name="name"
								id="name"
                                class=" bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 rounded py-2 px-4 block w-full appearance-none" placeholder='Enter username' />
                            {nameError && (
								<p className="text-sm text-red-600">{nameError}</p>
							)}
                    </div>
                    <div class="mt-3">
                        <label class="block text-gray-600 text-sm font-bold mb-1">Email Address</label>
                        <input  type="email"
								name="email"
								id="email"
                                class=" bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 rounded py-2 px-4 block w-full appearance-none" placeholder='Enter email' />
                            {emailError && (
								<p className="text-sm text-red-600">{emailError}</p>
							)}    
                    </div>
                    <div class="mt-3">
                        <div class="flex justify-between">
                            <label class="block text-gray-600 text-sm font-bold mb-1">Password</label>
                        </div>
                        <div className=" relative">
                        <input  name="password"
								id="password"
                                type={type} class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 rounded py-2 px-4 block w-full appearance-none" placeholder='Enter password' minlength="8"/>
                            {passwordError && (
								<p className="text-sm text-red-600">{passwordError}</p>
							)}    
                        <span onClick={handleToggle} className='top-2 absolute right-5'>
                            <Icon className=' hover:text-gray-700' icon={icon} size={22} />
                        </span>
                        </div>
                    </div>

                    <div class="mt-3">
                        <div class="flex justify-between">
                            <label class="block text-gray-600 text-sm font-bold mb-1">Confirm Password</label>
                        </div>
                        <input  type="password"
								name="cpassword"
								id="cpassword"
                                class="bg-gray-200 text-gray-700 focus:outline-none focus:shadow-outline border-2 border-gray-300 rounded py-2 px-4 block w-full appearance-none" placeholder='Enter password' minlength="8" />  
                    </div>
                    
                    
           
                    <div class="mt-3">
                        <button class="bg-blue-700 text-white text-center font-medium py-2 px-5 w-full rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300" type='submit'>Register now</button>
                    </div>
                    <div class="mt-4 flex flex-row items-center justify-center gap-2">
                        <div>Already have an account ?</div>
                        <Link to="/signin"><div className='font-bold text-blue-600 text-md'>Log In</div></Link>  
                    </div>
                    
                </form>
            </div>
        </div>
        </>
    );
}