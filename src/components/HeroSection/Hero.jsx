import heroImage from "../../assets/hero-img.png";
const Hero = () => {
	return (
		<section className="bg-radial w-full -z-10">
			<div className="flex justify-between px-24 items-center text-white border border-white h-[700px]">
				<div>
					<h1 className="text-5xl font-bold py-1">Shop Easy</h1>
					<h2 className="text-4xl font-semibold py-1">
						Simplify Your Shopping Experience
					</h2>
					<p className="text-base py-1 font-normal w-3/4">
						Discover a vast selection of groceries, furniture, electronics, and
						more, all in one convenient app. No matter what success looks like
						for you, you can do it with Shop Easy.
					</p>
					<div className="pt-10">
						<button className="bg-white text-black rounded-xl px-6 py-2 text-base font-medium ">
							Try it free
						</button>
					</div>
				</div>
				<div className="rect  border ">
					<div className=" w-full">
						<img
							src={heroImage}
							alt=""
							className=" -ml-32"
						/>
					</div>
				</div>
				{/* <div className="bg-rectangle rect-radius self-end relative">
					<div>
						<img
							src={heroImage}
							alt=""
							className="-rotate-90 "
						/>
					</div> */}
				{/* <div className="bg-rectangle w-[400px] rect-radius object-contain">
						
					</div> */}
				{/* </div> */}
			</div>
		</section>
	);
};
{
	/* <div className="absolute top-[68px] left-[905px] rounded-[355.88px] [background:linear-gradient(179.98deg,_#e98a15,_#0e4657)] w-[459.08px] h-[737.85px]"></div>
				<img
					src={heroImage}
					className="absolute top-[64px] left-[578px] w-[1013px] h-[675.72px] object-cover"
					alt=""
				/> */
}
export default Hero;
