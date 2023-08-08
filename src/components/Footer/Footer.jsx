import { Link } from "react-router-dom";
import { BiLogoFacebookCircle, BiLogoInstagram } from "react-icons/bi";
import facebook from "../../assets/social/facebook.png";
import instagram from "../../assets/social/instagram.png";
import twitter from "../../assets/social/twitter.png";
import appstore from "../../assets/social/appstore.png";
import playstore from "../../assets/social/playstore.png";
import Logo from "../../assets/landingpage/logo.png";
const Footer = () => {
	return (
		<footer className="footer-bg text-white w-full">
			<div className="pt-10 px-5 md:px-10">
				<div className="flex items-center gap-3 py-10">
					<img
						src={Logo}
						alt=""
						className="w-[55px] "
					/>
					<span className="text-white font-bold text-[20px] md:text-[26px] font-dmsans tracking-wide">
						FirstStore
					</span>
				</div>

				<div className="flex flex-wrap justify-between items-center px-5 md:px-10 gap-10 lg:px-20 font-jakarta font-semibold py-10">
					<div>
						<ul className="flex flex-col gap-8 text-xl ">
							<li>About Us</li>
							<li>Careers</li>
							<li>FAQ's</li>
							<li>Privacy Policy</li>
							<li>Terms and Conditions</li>
						</ul>
					</div>
					<div>
						<ul className="flex flex-col gap-8 text-xl ">
							<li>Firststore For PC</li>
							<li>Firststore Business</li>
							<li>Firststore Enterpreneur</li>
							<li>Firststore Templates</li>
							<li>Firststore Pricing</li>
						</ul>
					</div>

					<div className="flex flex-col gap-7 text-xl ">
						<Link
							to=""
							className="text-[#36065C] uppercase"
						>
							Download us on
						</Link>
						<div>
							<img
								src={appstore}
								alt=""
								className="w-[70%]"
							/>
						</div>
						<div>
							<img
								src={playstore}
								alt=""
								className="w-[70%]"
							/>
						</div>
						<Link
							to=""
							className="text-[#36065C] uppercase"
						>
							Reach us on
						</Link>
						<div className="flex items-center gap-4">
							<div>
								<img
									src={facebook}
									alt=""
									className="w-[70%]"
								/>
							</div>

							<div>
								<img
									src={twitter}
									alt=""
									className="w-[70%]"
								/>
							</div>
							<div>
								<img
									src={instagram}
									alt=""
									className="w-[70%]"
								/>
							</div>
						</div>
					</div>
				</div>

				<div className="w-full">
					{/* <span className="w-full h-1 bg-white">0</span> */}
					<hr />
					<h6 className="py-5">All rights reserved @FirstStore.io</h6>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
