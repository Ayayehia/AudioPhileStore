import "./App.css";
import LandingPage from "./Pages/LandingPage";
import CategoryPage from "./Pages/CategoryPage";
import Header from "./Components/Header";
import SingleProductPage from "./Pages/SingleProductPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CheckoutPage from "./Pages/CheckoutPage";
function App() {
	const [open, SetOpen] = useState(false);

	const Open = () => {
		SetOpen((prev) => !prev);
	};

	const route = createBrowserRouter([
		{
			path: "/",
			element: <Header SetOpen={SetOpen} open={open} funcOpen={Open} />,
			children: [
				{
					index: true,
					element: <LandingPage openCart={open} funcOpen={Open} />,
				},
				{
					path: "category/:category",
					element: <CategoryPage openCart={open} />,
				},
				{ path: "product/:id", element: <SingleProductPage openCart={open} /> },
				{ path: "checkout", element: <CheckoutPage /> },
			],
			// headPhones
			// earPhones
			// speakers
		},
	]);

	return (
		<>
			<RouterProvider router={route} />

			{/* <LandingPage/> */}
		</>
	);
}

export default App;

import { initializeApp } from "firebase/app";
import { useState } from "react";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyDS-UB4C5MXyEkR8GofZNew04B0WThG6wQ",
	authDomain: "audiophile-d4be3.firebaseapp.com",
	projectId: "audiophile-d4be3",
	storageBucket: "audiophile-d4be3.appspot.com",
	messagingSenderId: "804747341030",
	appId: "1:804747341030:web:8bc69cffeb769940ad5f27",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
