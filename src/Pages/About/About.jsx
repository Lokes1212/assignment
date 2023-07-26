import AboutImage from "../../assets/about.png";
import AboutMs from "../../assets/about-ms.png";
import "./about.css";
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
		<section>
			{/* <Hero /> */}

			<Poster />
			<MobilePoster />
			<div className="px-4 lg:px-20 py-8">
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
			</div>
		</section>
	);
};

export default About;
