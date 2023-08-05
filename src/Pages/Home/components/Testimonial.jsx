import testIcon1 from "../../../assets/landingpage/testimonial-1.png";
import testIcon2 from "../../../assets/landingpage/testimonial-2.png";
import { BiSolidQuoteAltRight, BiSolidQuoteAltLeft } from "react-icons/bi";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import { useSwiper } from "swiper/react";
import "./testimonial.css";
const SwiperButtons = () => {
	const swiper = useSwiper();
	return (
		<div className="gap-4 flex justify-end relative z-10 lg:-mt-6 w-[100px] lg:ml-auto  text-white my-4 ">
			<button
				onClick={() => swiper.slidePrev()}
				className="border border-[#D40CE4] rounded-md p-2 hover:opacity-75 transition-opacity ease-in-out duration-300"
			>
				<BsChevronLeft className="text-xl" />
			</button>
			<button
				onClick={() => swiper.slideNext()}
				className="border border-[#D40CE4] rounded-md p-2 hover:opacity-75 transition-opacity ease-in-out duration-300"
			>
				<BsChevronRight className="text-xl" />
			</button>
		</div>
	);
};
const TestimonialCard = () => {
	return (
		<div className="flex flex-col lg:flex-row  gap-10 items-center mt-5 lg:mt-20  max-w-[1200px] mx-auto ">
			<div className="relative ">
				<img
					src={testIcon1}
					className="mx-auto -mb-5 relative top-1 w-[30%]"
				/>
				<div className="w-[300px] h-[300px] bg-white flex items-center justify-center object-scale-down">
					<img
						src={
							"https://images.unsplash.com/photo-1562788869-4ed32648eb72?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=872&q=80"
						}
						alt=""
						className="w-[200px] h-[200px] object-cover mx-auto "
					/>
				</div>
				<img
					src={testIcon2}
					className="mx-auto -mt-6 relative w-[30%]"
				/>
			</div>
			<div>
				<div className="testimonial-body w-full lg:w-[90%]">
					<BiSolidQuoteAltLeft className="-pl-3 lg:ml-0 text-5xl text-[#36065C]" />
					<p className="font-jakarta text-xl md:text-3xl text-white font-medium px-2 lg:px-8">
						Lorem ipsum dolor sit amet consecte tur. Sapien enim vitae sit ut semper
						arcu euismod.Lorem ipsum dolor sit amet consecte tur. Sapien enim vitae
						sit ut semper arcu euismod. lorem lorem lorem lorem lorem lorem l
					</p>
					<BiSolidQuoteAltRight className="float-right -mt-2 mr-2 text-5xl text-[#36065C]" />
				</div>
			</div>
		</div>
	);
};
const Testimonial = () => {
	return (
		<section className="px-4 lg:px-20 py-6 lg:py-20 testimonial-bg ">
			<div>
				<h1 className="text-center font-bold font-jakarta text-3xl md:text-4xl uppercase text-white">
					what our <span className="text-[#C41EFF]">customers say!!</span>
				</h1>

				<Swiper
					slidesPerView={"auto"}
					modules={[Pagination, Navigation]}
					className="swiper-container"
				>
					<SwiperSlide>
						<TestimonialCard />
					</SwiperSlide>
					<SwiperSlide>
						<TestimonialCard />
					</SwiperSlide>
					<SwiperButtons />
				</Swiper>
			</div>
		</section>
	);
};

export default Testimonial;
