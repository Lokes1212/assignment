import Home from "./Pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Navbar from "./components/navbar/Navbar";
import About from "./Pages/About/About";
import Footer from "./components/Footer/Footer";
import Category from "./Pages/Category/Category";
import Products from "./Pages/Products/Products";
import Product from "./Pages/Product/Product";
import "swiper/css";
import "swiper/css/pagination";
import Template from "./Pages/Template/Template";
import Faq from "./Pages/Faq/Faq";
// import { createBrowserRouter, RouterProvider } from "react-router-dom";
function App() {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route
					path="/"
					element={<Home />}
				/>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/about"
					element={<About />}
				/>
				<Route
					path="/products"
					element={<Category />}
				/>
				<Route
					path="/products/:categoryId"
					element={<Products />}
				/>
				<Route
					path="/product/123"
					element={<Product />}
				/>
				<Route
					path="/templates"
					element={<Template />}
				/>
				<Route
					path="/faq"
					element={<Faq />}
				/>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
