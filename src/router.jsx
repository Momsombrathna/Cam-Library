import { createBrowserRouter } from 'react-router-dom';
import Login from './pages/Login';
import About from './pages/About';
import Profile from './pages/Profile';
import Register from './pages/Register';
import ProtectedLayout from './components/ProtectedLayout';
import GuestLayout from './components/GuestLayout';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import ErrorPage from './pages/ErrorPage';
import HomeLogin from './pages/HomeLogin';
import Dashboard from './pages/Dashboard';
import BookPost from './pages/BookPost';
import PDFViewer from "./pages/PDFViewer.jsx";

const router = createBrowserRouter([
	{
		path: '/',
		element: <GuestLayout />,
		children: [
			{
				path: '/',
				element: <Home />,
			},
			{
				path: '/signin',
				element: <SignIn />,
			},
			{
				path: '/signup',
				element: <SignUp />,
			},
			
			{
				path: '*',
				element: <ErrorPage />,
			},


		],
	},
	{
		path: '/',
		element: <ProtectedLayout />,
		children: [
		
			{
				path: '/homelogin',
				element: <HomeLogin />,
			},
			{
				path: '/dashboard',
				element: <Dashboard/>,
			},
			{
				path: '/about',
				element: <About />,
			},
			{
				path: '/pdfviewer',
				element: <PDFViewer />,
			}
		],
	},
]);

export default router;
