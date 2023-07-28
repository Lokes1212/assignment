import { useEffect, useRef, useState } from "react";
import {
	AiOutlineCloseCircle,
	AiOutlineMenu,
	AiOutlineSearch,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	const scroll = useRef(null);

	useEffect(() => {
		if (open) {
			const handleScroll = () => {
				const scrollPosition = window.scrollY; // => scroll position
				if (scrollPosition > 50) {
					setOpen(false);
				}
			};
			window.addEventListener("scroll", handleScroll);
			return () => {
				window.removeEventListener("scroll", handleScroll);
			};
		}
	}, [open]);
	return (
		<nav className="py-6 px-6 lg:px-24 bg-white">
			<div className=" items-center justify-between hidden lg:flex">
				<ul className="flex items-center gap-5">
					<li className="text-2xl text-[#3F787B] font-medium pr-10 font-inter">
						<Link to={"/"}>First Store</Link>
					</li>
					<li className="text-black opacity-80 text-lg  font-medium font-inter">
						<Link to="/about">About Us</Link>
					</li>
					<li className="text-black opacity-80 text-lg font-medium font-inter">
						<Link to="">Features</Link>
					</li>
					<li className="text-black opacity-80 text-lg font-medium font-inter">
						<Link to="/products">Products</Link>
					</li>
					<li className="text-black opacity-80 text-lg font-medium font-inter">
						<Link to="">Policy</Link>
					</li>
				</ul>
				<div className="flex items-center gap-4">
					<span className="">
						<AiOutlineSearch className="text-2xl" />
					</span>
					<button className="text-xl font-medium text-black opacity-80 font-inter">
						<Link to="/login">Login</Link>
					</button>
					<button className="bg-[#C90E0E] font-medium text-white text-sm px-2 py-2 rounded-md font-raleway">
						Get started
					</button>
				</div>
			</div>
			<div className="flex justify-between items-center lg:hidden">
				<h1 className="text-4xl text-[#3F787B] font-semibold pr-10  font-inter">
					Firststore.io
				</h1>
				<div onClick={() => setOpen(!open)}>
					{open ? (
						<AiOutlineCloseCircle className="text-2xl cursor-pointer" />
					) : (
						<AiOutlineMenu className="text-2xl cursor-pointer " />
					)}
				</div>
			</div>
			{/* mobile navbar */}
			<div
				ref={scroll}
				className={`absolute drop-shadow-md lg:hidden  bg-white top-0 left-0 transform duration-300  origin-top  w-[100%] z-20 h-screen flex flex-col  px-14 py-6 ${
					open ? "translate-y-0 " : "-translate-y-full "
				} `}
			>
				<div className="flex justify-between items-center mb-10  ">
					<h1 className="text-3xl text-[#3F787B] font-medium  font-inter">
						<Link to={"/"}>First Store</Link>
					</h1>
					<AiOutlineCloseCircle
						className="text-3xl cursor-pointer"
						onClick={() => setOpen(!open)}
					/>
				</div>

				<ul className="flex flex-col gap-10 ">
					<li className="text-2xl text-black font-medium  font-inter ">
						<Link
							to={"/about"}
							className=""
						>
							About Us
						</Link>
					</li>
					<li className="text-2xl text-black font-medium  font-inter">
						<Link to={"/"}>Features</Link>
					</li>
					<li className="text-2xl text-black font-medium  font-inter">
						<Link to={"/products"}>Products</Link>
					</li>
					<li className="text-2xl text-black font-medium  font-inter">
						<Link to={"/"}>Policy</Link>
					</li>
					<li className="text-2xl text-black font-medium  font-inter">
						<Link to={"/login"}>Login</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
