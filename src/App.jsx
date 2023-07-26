import Home from "./Pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./Pages/Login";
import Navbar from "./components/navbar/Navbar";
import About from "./Pages/About/About";
import Footer from "./components/Footer/Footer";
import Product from "./Pages/Product/Product";
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
					element={<Product />}
				/>
			</Routes>
			<Footer />
		</BrowserRouter>
	);
}

export default App;
