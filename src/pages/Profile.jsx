import React from 'react';
import { useAuth } from '../contexts/AuthContext';
import UserLogo from '../assets/user.png';
import NavLog from '../partials/NavLog';
import Footer from '../partials/Footer';
import { BiPowerOff, BiSolidBookAdd } from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Profile() {
	const { user } = useAuth();

	// logout user
	const Logout = async () => {
		localStorage.removeItem('user');
		window.location.href = '/';
	};
	return (
		<>
			<NavLog/>
			<main className='flex p-0 md:p-16 bg-white dark:bg-gray-900 justify-center items-center mt-16'>
				<section className='p-0 md:p-16 mt-10 md:mt-0 border-0 md:border-2 rounded-xl items-center justify-center flrx flex-col'>
					<div className='flex flex-col items-center md:flex-row '>
						<img src={UserLogo} alt="logo" className=' w-48 h-48 p-1 rounded-full ring-2 ring-green-500 ml-0 md:ml-6' title={user.name}/>
						<div className=' pl-0 md:pl-10 flex flex-col justify-center mt-3 text-center md:text-left'>
							<h1 class="text-4xl font-medium dark:text-gray-300 text-gray-700">{user.name}</h1>
							<p class=" text-gray-500 dark:text-gray-300 mt-3">Email : {user.email}</p>
							<p class="text-gray-500 dark:text-gray-300 text-sm">created at : {user.created_at}</p>
							<p class="text-gray-500 dark:text-gray-300">Post : 12 books</p>

						</div>

					</div>
					<div className='flex flex-row justify-center items-center mt-10 gap-2'>

						<Link to={'/postbooks'}>
							<button className=' ml-0 md:ml-6 pt-2 p-2 rounded-md border-2 bg-indigo-600 mb-1'>
								<div className='flex flex-row gap-1'>
									<p className='dark:text-white'>Upload Books</p>
									<BiSolidBookAdd size="1.5rem" className='pl-1 text-white '/>

								</div>
							</button>
						</Link>

						<button onClick={Logout} className=' ml-0 md:ml-6 pt-2 p-2 rounded-md border-2 text-black mb-1'>
							<div className='flex flex-row gap-1'>
								<p className='dark:text-white'>Log out</p>
								<BiPowerOff size="1.5rem" className='pl-1 text-red-800 '/>

							</div>
						</button>

					</div>
				</section>
			</main>
			<Footer/>
		</>
	);
}
