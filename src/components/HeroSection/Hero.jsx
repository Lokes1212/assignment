const Hero = () => {
	return (
		<section className="bg-radial max-h-[900px] w-full">
			<div className="flex justify-between items-center h-full px-6 lg:px-24 pt-10 text-white">
				<div className="w-[50%] lg:w-[60%] pb-4">
					<h1 className="text-[24px]  md:text-5xl font-bold py-[2px]">
						Shop Easy
					</h1>

					<h2 className="text-[16px]  md:text-4xl font-semibold py-[5px]">
						Simplify Your Shopping Experience
					</h2>

					<p className="text-[8px]  md:text-base md:py-1 font-normal lg:w-1/2 opacity-90">
						Discover a vast selection of groceries, furniture, electronics, and
						more, all in one convenient app. No matter what success looks like
						for you, you can do it with Shop Easy.
					</p>
					<div className="pt-3 md:pt-10">
						<button className="bg-white text-black rounded-xl text-[10px] px-4 py-1 md:px-6 md:py-2  md:text-base font-medium ">
							Try it free
						</button>
					</div>
				</div>
				<div className="relative w-[100px] h-[220px] md:w-[350px] md:h-[500px] bg-rectangle rounded-[350px] self-end -mb-4 ">
					<div className="w-[150px] bg-white h-[16px] bottom-[0px] md:right-[100px] absolute"></div>
					<div className="w-[240px] h-[250px] -bottom-[21px] md:w-[600px] md:h-[450px] absolute -right-8 bg-contain md:object-contain  md:-right-14 md:bottom-2 rect "></div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
