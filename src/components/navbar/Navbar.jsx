const Navbar = () => {
	return (
		<nav className="py-4 px-24 bg-white">
			<h1 className="text-2xl text-[#3F787B] font-semibold pr-10 md:hidden text-center">
				Shop Easy
			</h1>
			<div className=" items-center justify-between hidden md:flex">
				<ul className="flex items-center gap-5">
					<li className="text-2xl text-[#3F787B] font-medium pr-10">
						Shop Easy
					</li>
					<li className="text-black opacity-80 text-lg">About Us</li>
					<li className="text-black opacity-80 text-lg">Features</li>
					<li className="text-black opacity-80 text-lg">Products</li>
					<li className="text-black opacity-80 text-lg">Policy</li>
				</ul>
				<div className="flex items-center gap-4">
					<span>search</span>
					<button className="text-xl font-normal text-black opacity-80">
						Login
					</button>
					<button className="bg-[#2F9A5A] font-medium text-white text-sm px-2 py-2 rounded-md">
						Get started
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
