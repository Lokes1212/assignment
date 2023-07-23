import { Link } from "react-router-dom";
import { BiLogoFacebookCircle, BiLogoInstagram } from "react-icons/bi";
import { AiOutlineTwitter } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
const Footer = () => {
	return (
		<footer className="py-10  px-4 lg:px-24 bg-[#313934] text-white w-full">
			<div>
				{/* childs */}
				<div className="flex  justify-between  lg:flex-row flex-wrap">
					<div className="flex flex-row lg:flex-col justify-between w-full sm:w-auto  gap-5">
						<div className="flex flex-col gap-5 justify-around w-full">
							<h3 className="font-semibold text-xl">SHOP EASY</h3>
							<p className="hidden font-normal text-base text-justify max-w-[200px] lg:w-max-[200px] md:block w-full">
								Shop Easy is your one-stop destination for all your grocery
								shopping needs. We offer a wide range of high-quality products,
								including fresh produce, pantry staples, household items, and
								more.
							</p>
							<p className="font-normal text-base text-justify max-w-[200px] md:hidden w-full">
								Shop Easy is your one-stop destination for all your grocery
								shopping needs.
							</p>
						</div>
						<div className="flex gap-5 items-center pr-5 md:pr-0   text-3xl">
							<span>
								<BiLogoFacebookCircle />
							</span>
							<span>
								<BiLogoInstagram />
							</span>
							<span>
								<AiOutlineTwitter />
							</span>
							<span>
								<AiFillLinkedin />
							</span>
						</div>
					</div>
					<div className="w-full sm:hidden h-[2px] bg-white my-10"></div>
					<div className="flex flex-col gap-5 ">
						<h3 className="font-semibold text-xl">Help Full Links</h3>
						<Link to="/">About Us</Link>
						<Link to="/">Products</Link>
						<Link to="/">Careers</Link>
						<Link to="/">Privacy Policy</Link>
						<Link to="/">Return Policy</Link>
						<Link to="/">Investors</Link>
						<Link to="/">Culture</Link>
					</div>
					<div className="flex flex-col gap-5 ">
						<h3 className="font-semibold text-xl">Contact Information</h3>
						<h5>+91 9098885099</h5>
						<h5>YourEmail@gmail.com</h5>
						<h5>Bangalore, India 560068</h5>
					</div>

					<div className="flex flex-col gap-5  lg:px-2 py-8">
						<h3 className="font-semibold text-2xl uppercase">
							Let&apos;s Get Started
						</h3>
						<div className="border rounded-full border-white flex px-2 py-2">
							<input
								type="email"
								placeholder="Enter your email"
								className="bg-transparent px-4 py-1 outline-none"
							/>
							<button className=" px-6  rounded-full block bg-[#39634A]">
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
