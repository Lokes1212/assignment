import heroImg from "../../../assets/template/temp-hero.png";
const Hero = () => {
	return (
		<section className="bg-[#13111C] text-white">
			<div className="py-14 px-10 max-w-[1200px] mx-auto">
				<div className="flex justify-center font-jakarta">
					<div className="">
						<h1 className="text-4xl font-semibold">Templates</h1>
						<p className="text-2xl font-medium py-5">
							Create a WOW website design with simple drag and drop customizations.
						</p>
						<div className="py-5  space-y-4 lg:space-y-0 lg:float-right   sm:space-x-4">
							<button className="text-[#C41EFF] uppercase font-semibold border-[#D40CE4] border px-6 py-2 rounded-md">
								Start free trial
							</button>
							<button className="text-[#C41EFF] uppercase font-semibold border-[#D40CE4] border px-6 py-2 rounded-md">
								Schedule a demo
							</button>
						</div>
					</div>
					<div className="hidden lg:block overflow-hidden relative ">
						<img
							src={heroImg}
							alt=""
							className="w-[80%] relative mx-auto"
						/>
						<div className="absolute top-0 left-0 right-0 bottom-0 w-[80%] hero-shadow mx-auto"></div>
					</div>
				</div>

				<p className="text-center text-lg md:py-20 lg:text-2xl font-jakarta font-medium md:w-[80%] mx-auto">
					Choose a design from the rich Themes library and play around to create the
					most stunning online store for your business.
				</p>
			</div>
		</section>
	);
};

export default Hero;
