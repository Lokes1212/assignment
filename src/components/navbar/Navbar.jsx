import { useEffect, useRef, useState } from "react";
import {
	AiOutlineCloseCircle,
	AiOutlineMenu,
	AiOutlineSearch,
} from "react-icons/ai";
import { TbHomeEdit } from "react-icons/tb";
import { CgProfile, CgTemplate } from "react-icons/cg";
import { FiUsers } from "react-icons/fi";
import { Link } from "react-router-dom";
import logoWhite from "../../assets/landingpage/logo.png";
import businessToolIcn from "../../assets/landingpage/icn-businesstool.png";
import templateIcn from "../../assets/landingpage/icn-templates.png";
import careerIcn from "../../assets/landingpage/icn-career.png";
import faqIcn from "../../assets/landingpage/icn-faq.png";
import aboutIcn from "../../assets/landingpage/icn-about.png";
const Navbar = () => {
	// const [open, setOpen] = useState(false);
	// const scroll = useRef(null);

	// useEffect(() => {
	// 	if (open) {
	// 		const handleScroll = () => {
	// 			const scrollPosition = window.scrollY; // => scroll position
	// 			if (scrollPosition > 50) {
	// 				setOpen(false);
	// 			}
	// 		};
	// 		window.addEventListener("scroll", handleScroll);
	// 		return () => {
	// 			window.removeEventListener("scroll", handleScroll);
	// 		};
	// 	}
	// }, [open]);
	return (
		<nav className="pt-6  px-4 lg:px-20 navbar-bg flex justify-between ">
			<div className="flex justify-between items-center text-white gap-10">
				{/* branding */}
				<div className="flex items-center  gap-2 pb-6">
					<div className="">
						<img
							src={logoWhite}
							alt=""
							className="w-[35px]"
						/>
					</div>
					<span className=" text-white font-bold text-[20px] md:text-[24px] font-dmsans tracking-wide">
						FirstStore
					</span>
				</div>
				{/* branding end */}
				<div className="hidden lg:block">
					<ul className="flex items-center gap-10">
						<li>
							<div className="relative group  ">
								<Link
									to=""
									className=" tracking-wider uppercase font-jakarta font-medium text-lg after:block after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full mt-6 after:mt-6"
								>
									our features
								</Link>
								<div className="group-hover:flex group-hover:opacity-100 group-hover:w-[530px]  opacity-0 navbar-hover  group-hover:h-[300px] border absolute group-hover:z-10 top-[60px] right-[50%]  items-center px-6 gap-5  ease-linear duration-300 transition transform translate-x-[50%] -z-10">
									<div>
										<div className="flex items-center gap-2 w-full justify-start mt-1">
											<div className="">
												{/* <CgTemplate className="text-4xl" /> */}
												<img
													src={templateIcn}
													alt=""
													className="w-[50px] h-[50px] object-cover "
												/>
											</div>
											<span className="font-jakarta text-lg font-semibold">Templates</span>
										</div>
										<p className="my-4 w-[90%] font-jakarta font-normal text-base capitalize">
											Multiple themes Optimised for multiple devices
										</p>
									</div>

									<div>
										<div className="flex items-center gap-1 justify-start w-full">
											<div className="">
												{/* <TbHomeEdit className="text-4xl font-light" /> */}
												<img
													src={businessToolIcn}
													alt=""
													className=" "
												/>
											</div>
											<span className="font-jakarta  text-lg font-semibold w-full">
												Business Tools
											</span>
										</div>
										<p className="my-4 font-jakarta font-normal text-base capitalize">
											Use Free Tools to grow your Business{" "}
										</p>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div className="relative group">
								<Link
									to=""
									className="tracking-wider uppercase font-jakarta font-medium text-lg after:block after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full after:mt-6"
								>
									About us
								</Link>
								<div className="group-hover:flex group-hover:opacity-100 group-hover:w-[700px]  opacity-0 navbar-hover  group-hover:h-[250px] border absolute group-hover:z-10 top-[60px] right-[50%] transform translate-x-[50%]   items-center px-6 gap-5  ease-linear duration-300 transition -z-10 ">
									<div>
										<div className="flex items-center gap-2 w-full justify-start mt-1">
											<div className="">
												{/* <CgTemplate className="text-4xl" /> */}
												<img
													src={aboutIcn}
													alt=""
													className="w-[80%]"
												/>
											</div>
											<Link
												to="/about"
												className="font-jakarta text-lg font-semibold"
											>
												About
											</Link>
										</div>
										<p className="my-4 w-[90%] font-jakarta font-normal text-base capitalize">
											Multiple themes Optimised for multiple devices
										</p>
									</div>

									<div>
										<div className="flex items-center gap-1 justify-start w-full">
											<div className="">
												{/* <TbHomeEdit className="text-4xl font-light" /> */}
												<img
													src={careerIcn}
													alt=""
													className=" "
												/>
											</div>
											<span className="font-jakarta  text-lg font-semibold w-full">
												Career
											</span>
										</div>
										<p className="my-4 font-jakarta font-normal text-base capitalize">
											Use Free Tools to grow your Business{" "}
										</p>
									</div>

									<div>
										<div className="flex items-center gap-1 justify-start w-full">
											<div className="">
												{/* <TbHomeEdit className="text-4xl font-light" /> */}
												<img
													src={faqIcn}
													alt=""
													className=" "
												/>
											</div>
											<span className="font-jakarta  text-lg font-semibold w-full">
												FAQs
											</span>
										</div>
										<p className="my-4 font-jakarta font-normal text-base capitalize">
											Use Free Tools to grow your Business{" "}
										</p>
									</div>
								</div>
							</div>
						</li>
						<li>
							<div>
								<Link
									to="/product/123"
									className="tracking-wider uppercase font-jakarta font-medium text-lg after:block after:w-0 after:h-1 after:bg-white after:transition-all after:duration-300 after:ease-in-out hover:after:w-full after:mt-6"
								>
									Pricing
								</Link>
								<div></div>
							</div>
						</li>
					</ul>
				</div>
			</div>
			<div className="flex items-center gap-5 text-white pb-6">
				<span>
					<CgProfile className="text-3xl" />
				</span>
				<button className="hidden lg:inline-block uppercase navbtn px-6 py-2 rounded-md font-jakarta text-base font-semibold tracking-wider">
					Start free trial
				</button>
			</div>
		</nav>
	);
};

export default Navbar;
