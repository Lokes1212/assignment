import heroCardImg1 from "../../assets/landingpage/hero-card-1.png";
import heroCardImg2 from "../../assets/landingpage/hero-card-2.png";
import heroCardImg3 from "../../assets/landingpage/hero-card-3.png";
import heroCardImg4 from "../../assets/landingpage/hero-card-4.png";
import heroCardImg5 from "../../assets/landingpage/hero-card-5.png";
import heroCardImg6 from "../../assets/landingpage/hero-card-6.png";
import box1 from "../../assets/landingpage/box-1.png";
import box2 from "../../assets/landingpage/box-2.png";
import box3 from "../../assets/landingpage/box-3.png";
import box4 from "../../assets/landingpage/box-4.png";
import box5 from "../../assets/landingpage/box-5.png";
import box6 from "../../assets/landingpage/box-6.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Pagination } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
// const paginationStyle={{
//   "--swiper-pagination-color":"#FFBA08",
//   "--swiper-pagination-bullet-inactive-color": "#999999",
//   "--swiper-pagination-bullet-inactive-opacity": "1",
//   "--swiper-pagination-bullet-size": "16px",
//   "--swiper-pagination-bullet-horizontal-gap": "6px"
// }};
const Card = ({ imgUrl, textUrl }) => {
	return (
		<div className="md:w-[350px] h-[650px] pt-10  heroCard-bg flex flex-col justify-between items-center ">
			<div className="  ">
				<img
					src={imgUrl}
					alt=""
					className="w-[200px] h-[200px] object-contain mx-auto"
				/>
			</div>
			<div className="p-4">
				<div className=" ">
					{/* <h4 className="font-jakarta font-bold text-[40px]  text-center  text-[#C41EFF]">
						Affordable Pricing
					</h4>
					<p className="font-jakarta font-semibold text-2xl text-center text-white py-6 px-4">
						Start your online business in less margin price on monthly basis.
					</p> */}
					<img
						src={textUrl}
						alt=""
					/>
				</div>
			</div>
		</div>
	);
};
const CardText = () => {
	return (
		<div className="md:w-[350px] h-[650px] pl-20   flex flex-col  justify-center gap-5 uppercase font-jakarta font-bold text-5xl">
			<span className="text-white">Why</span>
			<span className="text-[#C41EFF]">Choose</span>
			<span className="text-[#C41EFF]">Us?</span>
		</div>
	);
};
const HeroCard = () => {
	return (
		<section className="bg-[#13111C] h-full w-full lg:-mt-48">
			<div className="lg:pt-56 max-w-full lg:pb-20 ">
				<Swiper
					// slidesPerView={4}
					// spaceBetween={150}
					freeMode={true}
					grabCursor={true}
					modules={[FreeMode, Pagination]}
					pagination={{
						clickable: true,
					}}
					className="swiper-container py-10  w-full"
					style={{
						"--swiper-pagination-color": "#702477",
						"--swiper-pagination-bullet-inactive-color": "#999999",
						"--swiper-pagination-bullet-inactive-opacity": "1",
						"--swiper-pagination-bullet-size": "12px",
						"--swiper-pagination-bullet-horizontal-gap": "6px",
					}}
					breakpoints={{
						320: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						480: {
							slidesPerView: 1,
							spaceBetween: 20,
						},
						640: {
							slidesPerView: 2,
							spaceBetween: 30,
						},
						1024: {
							slidesPerView: 4,
							spaceBetween: 250,
						},
					}}
				>
					<SwiperSlide className="">
						<CardText />
					</SwiperSlide>
					<SwiperSlide className="">
						<Card
							imgUrl={heroCardImg1}
							textUrl={box1}
						/>
					</SwiperSlide>
					<SwiperSlide className="">
						<Card
							imgUrl={heroCardImg2}
							textUrl={box2}
						/>
					</SwiperSlide>
					<SwiperSlide className="">
						<Card
							imgUrl={heroCardImg3}
							textUrl={box3}
						/>
					</SwiperSlide>
					<SwiperSlide className="">
						<Card
							imgUrl={heroCardImg4}
							textUrl={box4}
						/>
					</SwiperSlide>
					<SwiperSlide className="">
						<Card
							imgUrl={heroCardImg5}
							textUrl={box5}
						/>
					</SwiperSlide>
					<SwiperSlide className="">
						<Card
							imgUrl={heroCardImg6}
							textUrl={box6}
						/>
					</SwiperSlide>
					<SwiperSlide className="hidden md:block md:w-[300px]"></SwiperSlide>
				</Swiper>
				{/* <Card /> */}
			</div>
		</section>
	);
};

export default HeroCard;
