import AboutImage from "../../assets/about.png";
import AboutMs from "../../assets/about-ms.png";
import "./about.css";
import aboutImg from "../../assets/about-img.png";
import shadowImg from "../../assets/about-shadow.png";
import rajesh from "../../assets/teams/rajesh.jpg";
import alka from "../../assets/teams/alka.jpg";
import vikram from "../../assets/teams/vikram.jpg";
import kavya from "../../assets/teams/kavya.jpg";
import soumiya from "../../assets/teams/soumiya.jpg";
import sanghavi from "../../assets/teams/sanghavi.jpg";
import siddhant from "../../assets/teams/siddhant.jpg";
const rijvan =
	"https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&w=600";
const nabhya =
	"https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&w=600";

const data = [
	{
		id: 1,
		name: "Rajesh",
		role: "CEO",
		img: rajesh,
	},
	{
		id: 2,
		name: "Alka",
		role: "CEO",
		img: alka,
	},
	{
		id: 3,
		name: "Vikram",
		role: "CEO",
		img: vikram,
	},
	{
		id: 4,
		name: "Kavya",
		role: "CCO/UX UI Designer",
		img: kavya,
	},
	{
		id: 5,
		name: "Soumiya",
		role: "CPO/UX UI Designer",
		img: soumiya,
	},
	{
		id: 6,
		name: "Sanghavi",
		role: "UX/UI Designer",
		img: sanghavi,
	},
	{
		id: 7,
		name: "Nabhya",
		role: "Senior Developer",
		img: nabhya,
	},
	{
		id: 8,
		name: "Rijvan",
		role: "Senior Developer",
		img: rijvan,
	},
	{
		id: 9,
		name: "Siddhant",
		role: "Developer",
		img: siddhant,
	},
];
const ProfileCard = ({ img, name, role }) => {
	return (
		<div className="font-jakarta flex flex-col justify-center  items-center">
			<div className="w-[200px] h-[200px] md:w-[250px] md:h-[250px] rounded-full bg-[#36065C] p-3">
				<img
					src={img}
					alt=""
					className="w-full h-full object-cover rounded-full"
				/>
			</div>
			<span className="font-normal text-xl mt-2">{name}</span>
			<span className="font-normal text-base">{role}</span>
		</div>
	);
};
const MobilePoster = () => {
	return (
		<div className="relative md:hidden w-full  h-full">
			<img
				src={AboutMs}
				className="w-full h-full relative object-cover object-center"
			/>
			<div className="absolute top-[50%] left-[50%] bgImageUrl h-full w-full">
				<div className="flex flex-col justify-center items-center h-full text-white my-8">
					<h1 className="font-fira font-semibold text-3xl">Why Choose Us?</h1>
					<p className="text-xl font-inter font-normal pb-4">
						Superior Quality and Service
					</p>
					<button className="bg-[#306051] text-white font-medium text-base font-inter px-6 py-2 rounded-md ">
						Start Shopping
					</button>
				</div>
			</div>
		</div>
	);
};
const Poster = () => {
	return (
		<div className="bg-[#F3F4FD] hidden md:flex  flex-row max-w-full w-full px-4 lg:px-20 py-10 justify-center  items-center">
			<div className="md:w-1/2  text-center ">
				<h1 className="font-fira font-semibold text-4xl lg:text-5xl lg:-mt-10 xl:text-7xl xl:-mt-20">
					Why Choose Us?
				</h1>
				<p className="md:text-xl lg:text-2xl font-inter font-normal text-black opacity-75 my-6 xl:text-4xl">
					Superior Quality and Service
				</p>
				<button className="bg-[#306051] text-white font-medium text-xl font-inter px-6 py-2 rounded-md my-4 xl:text-2xl">
					Start Shopping
				</button>
			</div>
			<div className="md:w-1/2">
				<img
					src={AboutImage}
					alt=""
				/>
			</div>
		</div>
	);
};
const About = () => {
	return (
		<section className="bg-[#13111C]">
			{/* <Hero /> */}

			{/* <Poster /> */}
			{/* <MobilePoster /> */}
			{/* <div className="px-4 lg:px-20 py-8">
				<h1 className="text-center font-fira font-semibold text-4xl underline">
					About Us
				</h1>

				<ul className="py-14 space-y-10 font-inter lg:text-xl text-black opacity-80 list-disc px-4 ">
					<li>
						At Shop Easy, we understand the importance of convenience and
						quality when it comes to grocery shopping, as well as finding the
						perfect furniture and electronics for your home. Our mission is to
						provide you with a seamless online shopping experience, offering a
						wide selection of high-quality products at competitive prices.
					</li>
					<li>
						With Shop Easy, you can browse through a diverse range of fresh
						produce, pantry essentials, stylish furniture, and cutting-edge
						electronics. We source our products from trusted suppliers to ensure
						that you receive only the best. Whether you&lsquo;re stocking up on
						groceries or looking for the latest tech gadgets, we&lsquo;ve got
						you covered.
					</li>
					<li>
						With a focus on quality, affordability, and convenience, we strive
						to make your shopping experience easy and enjoyable. Our team is
						committed to providing excellent customer service and ensuring your
						satisfaction with every purchase.
					</li>
				</ul>
			</div> */}

			<div className="lg:py-10">
				<div className="relative">
					<img
						src={aboutImg}
						alt=""
					/>
					<img
						src={shadowImg}
						alt=""
						className="absolute top-0	left-0 w-full h-full "
					/>
				</div>

				<div className="py-10 px-5 md:px-10 text-white font-jakarta text-lg md:text-xl font-normal leading-normal max-w-[1200px] mx-auto">
					<p className="">
						At Firsts tore , we are passionate about providing you with an exceptional
						online shopping experience. As an innovative and customer-centric
						eCommerce platform, we strive to bring you a wide range of high-quality
						products, competitive prices, and top-notch customer service.
					</p>
					<h3 className="font-semibold text-3xl py-10">
						Our <span className="text-[#C41EFF]">Mission</span>:
					</h3>
					<p>
						Our mission is to make online shopping a delightful and convenient
						experience for our customers. We aim to connect you with the products you
						love, offering a diverse selection that caters to various interests,
						preferences, and needs. We are committed to delivering superior value and
						ensuring your satisfaction with every purchase.
					</p>
					<h3 className="font-semibold text-3xl py-10">
						What Sets Us <span className="text-[#C41EFF]">Apart</span>:
					</h3>
					<ul className="list-decimal space-y-6 px-5 md:px-10 leading-relaxed">
						<li>
							Extensive Product Selection: We carefully curate a vast array of products
							across multiple categories, ranging from electronics, fashion, home and
							living, beauty, sports, and more. Our goal is to become your
							one-stop-shop for all your needs.
						</li>
						<li>
							Quality and Authenticity: We partner with reputable suppliers and brands
							to ensure that all products sold on our platform are genuine,
							high-quality, and adhere to industry standards. Your trust and
							satisfaction are our top priorities.
						</li>
						<li>
							Competitive Pricing: We understand the value of your hard-earned money.
							We work hard to offer competitive prices without compromising on the
							quality of our products. Keep an eye out for regular promotions and deals
							to get the best value for your purchases.
						</li>
						<li>
							Safe and Secure Shopping: We employ robust security measures to protect
							your personal information and ensure a safe shopping environment. Your
							data privacy is of utmost importance to us.
						</li>
						<li>
							Hassle-Free Shopping Experience: Our user-friendly website and mobile app
							make browsing and purchasing products a breeze. You can easily find what
							you&lsquo;re looking for, place orders with just a few clicks, and track
							your packages from the moment of purchase until delivery.
						</li>
						<li>
							Excellent Customer Support: Our dedicated customer support team is here
							to assist you with any queries, concerns, or issues you may encounter. We
							are committed to providing prompt and helpful assistance throughout your
							shopping journey.
						</li>
					</ul>

					<p className="py-10">
						Join us on this exciting shopping adventure and discover the convenience
						and joy of online shopping with [Store Name]. Thank you for choosing us as
						your preferred eCommerce destination. Happy shopping!
					</p>
					<h3 className="font-semibold text-3xl ">
						Our Team of <span className="text-[#C41EFF]">FirstStore</span>:
					</h3>
					<div className="py-10 flex justify-center md:justify-between flex-wrap w-full gap-10 lg:px-20">
						{data.map((item) => (
							<ProfileCard
								key={item.id}
								{...item}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
