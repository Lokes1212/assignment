/* eslint-disable react/prop-types */
import { AiFillStar } from "react-icons/ai";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
const TestimonialCard = ({ name, imgUrl, rating, description }) => {
	return (
		<div className="flex flex-col justify-between h-[550px] bg-[rgba(80,80,80,0.5)] py-10 px-8 gap-10 rounded-md  w-full">
			<div className="w-full  mx-auto">
				<img
					src={imgUrl}
					alt=""
					className="w-[120px] 2xl:w-[150px] h-[120px] 2xl:h-[150px] rounded-full object-cover mx-auto"
				/>
			</div>
			<div className="text-center ">
				<p className="text-white font-inter text-base 2xl:text-lg font-normal ">
					{description}
				</p>
			</div>
			<div className=" text-center ">
				<h4 className="pt-8 text-xl 2xl:text-2xl font-bold py-1">{name}</h4>
				<div className="flex items-center w-full justify-center gap-2 text-2xl text-[#FFBC3F] shadow-2xl">
					{Array(rating)
						.fill()
						.map((_, i) => (
							<AiFillStar key={i} />
						))}
					{/* <AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar />
					<AiFillStar /> */}
				</div>
				<p className="text-white text-base ">(4.9 Stars) . 44 Reviews</p>
			</div>
		</div>
	);
};
const Testimonials = ({ data }) => {
	return (
		<div className="px-4 lg:px-10 py-10  w-full">
			<h1 className="text-center font-bold font-fira text-2xl lg:text-4xl py-4">
				Our happy Subscribers
			</h1>
			<p className="font-inter text-lg font-normal text-black opacity-80 text-center">
				Here&lsquo;s what they have to say about their Shop Easy experience.
			</p>
			<div className=" py-10 lg:py-20 w-full h-full max-w-7xl  mx-auto">
				<Swiper
					freeMode={true}
					grabCursor={true}
					modules={[FreeMode]}
					className="swiper-container"
					breakpoints={{
						0: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						480: {
							slidesPerView: 2,
							spaceBetween: 20,
						},
						640: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
						1024: {
							slidesPerView: 3,
							spaceBetween: 40,
						},
					}}
				>
					{data.map((item) => (
						<SwiperSlide key={item.id}>
							<TestimonialCard
								name={item.name}
								description={item.description}
								imgUrl={item.imgUrl}
								rating={item.rating}
							/>
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Testimonials;
