import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import heroImg from "../../assets/hero-bg.png";
const Slide = () => {
	return (
		<div className="w-full hidden md:block">
			<div className="w-full relative">
				<img
					src={heroImg}
					alt=""
					className="w-full min-h-fit"
				/>
			</div>
			<div className="absolute top-2 left-2 sm:py-12 lg:px-14 lg:top-32 2xl:top-36 w-1/2 lg:w-full text-white">
				<h1 className="text-[18px] md:text-4xl  lg:text-5xl  font-bold py-[2px] 2xl:text-6xl">
					First Store
				</h1>

				<h2 className="text-[12px] md:text-2xl  lg:text-4xl font-semibold py-[5px] 2xl:text-5xl">
					Simplify Your Shopping Experience
				</h2>

				<p className="text-[8px]  md:text-base md:py-1 lg:py-2 font-normal lg:w-1/2 2xl:w-[25%] 2xl:text-lg opacity-90">
					Discover a vast selection of groceries, furniture, electronics, and
					more, all in one convenient app. No matter what success looks like for
					you, you can do it with Shop Easy.
				</p>
				<div className="pt-3 md:pt-10">
					<button className="bg-[#C90E0E] drop-shadow-xl text-white rounded-md text-[10px] px-4 py-1 md:px-6 md:py-2  md:text-base font-medium 2xl:text-lg">
						Try it free
					</button>
				</div>
			</div>
		</div>
	);
};
const MobileSlide = () => {
	return (
		<div className="relative w-full border md:hidden">
			<img
				src={
					"https://plus.unsplash.com/premium_photo-1664202219210-abf6ae3bdf04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
				}
				className="w-full  h-full relative object-contain "
			/>
			<div className="absolute top-[50%] left-[50%]  h-full w-full bg-heroImg">
				<div className="flex flex-col justify-center items-center h-full text-white my-4 px-2">
					<h1 className="font-fira font-medium  text-2xl sm:text-4xl">
						First Store
					</h1>
					<h2 className="sm:text-3xl sm:py-2">
						Simplify Your Shopping Experience
					</h2>
					<p className="text-[10px] sm:text-xs  text-center font-inter font-normal pb-4">
						Discover a vast selection of groceries, furniture, electronics, and
						more, all in one convenient app.
						<span className="hidden sm:block">
							No matter what success looks like for you, you can do it with Shop
							Easy.
						</span>
					</p>
					<button className="bg-[#DB0303] text-white font-medium text-xs sm:text-sm font-inter px-4 sm:px-6 py-2 rounded-md ">
						Try it free
					</button>
				</div>
			</div>
		</div>
	);
};
const Hero = () => {
	return (
		// <section className="bg-radial max-h-[900px] w-full">
		// 	<div className="flex justify-between items-center h-full px-6 lg:px-24 pt-10 text-white">
		// 		<div className="w-[50%] lg:w-[60%] pb-4">
		// 			<h1 className="text-[24px]  md:text-5xl font-bold py-[2px]">
		// 				Firststore.io
		// 			</h1>

		// 			<h2 className="text-[16px]  md:text-4xl font-semibold py-[5px]">
		// 				Simplify Your Shopping Experience
		// 			</h2>

		// 			<p className="text-[8px]  md:text-base md:py-1 font-normal lg:w-1/2 opacity-90">
		// 				Discover a vast selection of groceries, furniture, electronics, and
		// 				more, all in one convenient app. No matter what success looks like
		// 				for you, you can do it with Shop Easy.
		// 			</p>
		// 			<div className="pt-3 md:pt-10">
		// 				<button className="bg-white text-black rounded-xl text-[10px] px-4 py-1 md:px-6 md:py-2  md:text-base font-medium ">
		// 					Try it free
		// 				</button>
		// 			</div>
		// 		</div>
		// 		<div className="relative w-[100px] h-[220px] md:w-[350px] md:h-[500px] bg-rectangle rounded-[350px] self-end -mb-4 ">
		// 			<div className="w-[150px] bg-white h-[16px] bottom-[0px] md:right-[100px] absolute"></div>
		// 			<div className="w-[240px] h-[250px] -bottom-[21px] md:w-[600px] md:h-[450px] absolute -right-8 bg-contain md:object-contain  md:-right-14 md:bottom-2 rect "></div>
		// 		</div>
		// 	</div>
		// </section>
		<Swiper
			spaceBetween={30}
			pagination={{
				clickable: true,
			}}
			modules={[Pagination]}
			className="mySwiper"
		>
			<SwiperSlide>
				<MobileSlide />
				<Slide />
			</SwiperSlide>
			<SwiperSlide>
				<MobileSlide />
				<Slide />
			</SwiperSlide>
			<SwiperSlide>
				<MobileSlide />
				<Slide />
			</SwiperSlide>
		</Swiper>
	);
};

export default Hero;
