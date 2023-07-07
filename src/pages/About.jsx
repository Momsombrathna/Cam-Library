import React, {useEffect} from 'react';
import NavLog from "../partials/NavLog.jsx";
import Nav from "../partials/Nav.jsx";
import { useAuth } from '../contexts/AuthContext';
import axios from "../axios.js";
import {Navigate} from "react-router-dom";
import Feedback from '../partials/Feedback';
import cover from '../assets/cover.jpg';
import BookPost from "./BookPost.jsx";
export default function About() {
	const { user, setUser } = useAuth();
	const isLoggedIn = user !== null;

	return (
		<>
			{isLoggedIn ? <NavLog /> : <Nav />}
			<main>
				<div className="py-16 bg-white dark:bg-gray-900 lg:mt-5 mt-10">
					<div className="container m-auto text-gray-600 md:px-12 xl:px-6">
						<div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
							<div className="md:7/12 lg:w-6/12">
								<h2 className="text-2xl text-gray-900 dark:text-gray-300 font-bold md:text-5xl">About
									Cam-Library</h2>
								<p className="text-xl mt-6 text-gray-600 dark:text-gray-300">Cam-Library is an online
									library, which has hundreds of books to choose. We provide highest quality of ebook
									to read.</p>
								<p className="text-xl mt-4 text-gray-600 dark:text-gray-300"> Nobis minus voluptatibus
									pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus
									nesciunt dicta veniam aspernatur quam mollitia.</p>
							</div>
							<div className="lg:w-8/12">
								<img src={cover} alt="" loading="lazy" className="rounded-xl dark:bg-gray-900"/>
							</div>
						</div>
						<div className=' mt-5'>
							<BookPost/>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
