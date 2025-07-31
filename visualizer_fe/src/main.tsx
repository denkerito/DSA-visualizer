import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from './components/page/HomePage.tsx';
import ErrorPage from './components/page/ErrorPage.tsx';
import ArrayPage from './components/page/ArrayPage.tsx';

const router = createBrowserRouter([
	{
		path:'/',
		element: <HomePage />,
		errorElement: <ErrorPage />
	},
	{
		path:'/array',
		element: <ArrayPage/>
	}
]);



createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
