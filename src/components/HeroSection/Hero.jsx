import heroImage from "../../assets/hero-bg.png";
const Hero = () => {
	return (
		<section className="rect w-full h-full relative">
			<img
				src={heroImage}
				alt=""
				className="relative w-full h-full "
			/>
			<div className="absolute top-0 py-5 md:py-20 lg:py-32 pl-4  text-white w-[390px] md:w-full ">
				<h1 className="text-[12px] sm:text-base md:text-5xl font-bold py-[2px]">
					Shop Easy
				</h1>
				<h2 className="text-[10px] sm:text-base md:text-4xl font-semibold py-[5px]">
					Simplify Your Shopping Experience
				</h2>
				<p className="text-[8px] sm:text-base md:text-base md:py-1 font-normal w-1/2 opacity-90">
					Discover a vast selection of groceries, furniture, electronics, and
					more, all in one convenient app. No matter what success looks like for
					you, you can do it with Shop Easy.
				</p>
				<div className="pt-3 md:pt-10">
					<button className="bg-white text-black rounded-xl text-[10px] px-4 py-1 md:px-6 md:py-2  md:text-base font-medium ">
						Try it free
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
