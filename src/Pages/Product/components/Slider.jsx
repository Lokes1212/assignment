/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode } from "swiper/modules";
import { Link } from "react-router-dom";
import { BsArrowRightShort } from "react-icons/bs";
import CardSlide from "./CardSlide";

const Slider = ({ title, url, data }) => {
	return (
		<div className="flex flex-col gap-4 py-8">
			<div className="flex items-center justify-between">
				<h2 className="text-xl lg:text-2xl font-inter opacity-90 font-bold text-black">
					{title}
				</h2>
				<Link
					to={url}
					className="text-base flex items-center"
				>
					View All{" "}
					<span>
						<BsArrowRightShort className="text-3xl font-bold" />
					</span>
				</Link>
			</div>
			<div>
				<Swiper
					freeMode={true}
					grabCursor={true}
					modules={[FreeMode]}
					className="mySwiper"
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
							slidesPerView: 3,
							spaceBetween: 30,
						},
						768: {
							slidesPerView: 4,
							spaceBetween: 40,
						},
					}}
				>
					{data.map((item) => (
						<SwiperSlide key={item.id}>
							<CardSlide
								name={item.title}
								price={item.price}
								imgUrl={item.img}
							/>
						</SwiperSlide>
					))}
					{/* <SwiperSlide>
						<CardSlide />
					</SwiperSlide> */}
					{/* <SwiperSlide>
						<CardSlide />
					</SwiperSlide>
					<SwiperSlide>
						<CardSlide />
					</SwiperSlide>
					<SwiperSlide>
						<CardSlide />
					</SwiperSlide> */}
				</Swiper>
			</div>
			{/* <div className="border flex justify-start gap-14 ">
				
			</div> */}
		</div>
	);
};

export default Slider;
