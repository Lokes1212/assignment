import { useState } from "react";
import {
	AiOutlineCloseCircle,
	AiOutlineMenu,
	AiOutlineSearch,
} from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<nav className="py-6 px-6 lg:px-24 bg-white">
			<div className=" items-center justify-between hidden lg:flex">
				<ul className="flex items-center gap-5">
					<li className="text-2xl text-[#3F787B] font-medium pr-10 font-inter">
						<Link to={"/"}>Firststore.io</Link>
					</li>
					<li className="text-black opacity-80 text-lg  font-medium font-inter">
						<Link to="">About Us</Link>
					</li>
					<li className="text-black opacity-80 text-lg font-medium font-inter">
						<Link to="">Features</Link>
					</li>
					<li className="text-black opacity-80 text-lg font-medium font-inter">
						<Link to="">Products</Link>
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
					<button className="bg-[#2F9A5A] font-medium text-white text-sm px-2 py-2 rounded-xl font-raleway">
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
				className={`absolute drop-shadow-md lg:hidden bg-white top-0 left-0 transform duration-300  origin-left  w-[70%] z-20 h-screen flex justify-between px-14 py-16 ${
					open ? "translate-x-0" : "-translate-x-full"
				} `}
			>
				<ul className="flex flex-col gap-10 ">
					<li className="text-3xl text-[#3F787B] font-medium  font-inter">
						<Link to={"/"}>Firststore.io</Link>
					</li>
					<li className="text-2xl text-black font-medium  font-inter ">
						<Link
							to={"/"}
							className=""
						>
							About Us
						</Link>
					</li>
					<li className="text-2xl text-black font-medium  font-inter">
						<Link to={"/"}>Features</Link>
					</li>
					<li className="text-2xl text-black font-medium  font-inter">
						<Link to={"/"}>Products</Link>
					</li>
					<li className="text-2xl text-black font-medium  font-inter">
						<Link to={"/"}>Policy</Link>
					</li>
					<li className="text-2xl text-black font-medium  font-inter">
						<Link to={"/"}>Login</Link>
					</li>
				</ul>
			</div>
		</nav>
	);
};

export default Navbar;
