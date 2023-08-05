// import { Swiper, SwiperSlide } from "swiper/react";
import Marquee from "react-fast-marquee";
// import { Autoplay } from "swiper/modules";
import vector from "../../assets/tools/vector.png";
import style from "../../assets/tools/style.png";
import quote from "../../assets/tools/quote.png";
import image from "../../assets/tools/image.png";
import qrcode from "../../assets/tools/qrcode.png";
import gst from "../../assets/tools/gst.png";

const BusinessTool = () => {
	return (
		<section className="bg-[#13111C] ">
			<div className="py-14">
				<h1 className="uppercase font-jakarta font-bold text-white text-3xl md:text-4xl text-center">
					business <span className="text-[#C41EFF]">Tools</span>
				</h1>
			</div>
			{/* <div className="businesstool-bg w-full px-5 md:px-10 py-10 ">
				<Swiper
					slidesPerView={4}
					autoplay={{
						delay: 2000,
						disableOnInteraction: false,
					}}
					modules={[Autoplay]}
					breakpoints={{
						320: {
							slidesPerView: 1,
						},
						640: {
							slidesPerView: 2,
						},
						768: {
							slidesPerView: 3,
						},
						1024: {
							slidesPerView: 4,
						},
					}}
				>
					<SwiperSlide>
						<div className="w-[200px] mx-auto">
							<img
								src={vector}
								alt=""
								className="w-[70%] mx-auto"
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="max-w-[200px] mx-auto">
							<img
								src={style}
								alt=""
								className="w-[100%] "
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="w-[210px] mx-auto">
							<img
								src={quote}
								alt=""
								className="w-[100%] "
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="w-[250px] mx-auto">
							<img
								src={image}
								alt=""
								className="w-[100%] "
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="w-[200px] mx-auto">
							<img
								src={qrcode}
								alt=""
								className="w-[100%] "
							/>
						</div>
					</SwiperSlide>
					<SwiperSlide>
						<div className="w-[270px] mx-auto">
							<img
								src={gst}
								alt=""
								className="w-[100%] "
							/>
						</div>
					</SwiperSlide>
				</Swiper>
			</div> */}
			<div className="businesstool-bg w-full px-5 md:px-10  py-10">
				<Marquee
					direction="left"
					speed={150}
					className="h-fit"
				>
					<div className="mx-10">
						<img
							src={vector}
							alt=""
							className="w-[100%] "
						/>
					</div>
					<div className="mx-10 ">
						<img
							src={style}
							alt=""
							className="w-[70%] mx-auto"
						/>
					</div>
					<div className=" mx-10 ">
						<img
							src={quote}
							alt=""
							className="w-[80%] mx-auto"
						/>
					</div>
					<div className=" mx-10 ">
						<img
							src={image}
							alt=""
							className="w-[70%] mx-auto"
						/>
					</div>
					<div className=" mx-10 ">
						<img
							src={qrcode}
							alt=""
							className="w-[70%] mx-auto"
						/>
					</div>
					<div className=" mx-10">
						<img
							src={gst}
							alt=""
							className="w-[70%] mx-auto"
						/>
					</div>
				</Marquee>
			</div>
		</section>
	);
};

export default BusinessTool;
