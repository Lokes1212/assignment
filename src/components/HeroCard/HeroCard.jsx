import heroCardImg1 from "../../assets/landingpage/hero-card-1.png";
import box from "../../assets/landingpage/box.png";
const Card = () => {
	return (
		<div className="w-[400px] h-[700px] border heroCard-bg flex flex-col items-center">
			<div>
				<img
					src={heroCardImg1}
					alt=""
				/>
			</div>
			<div className=" ">
				<div className=" w-full hero-blur h-full">
					<h4 className="font-jakarta font-bold text-4xl text-center w-[50%] mx-auto">
						Affordable Pricing
					</h4>
					<p className="font-jakarta font-semibold text-xl text-center text-white py-4">
						Start your online business in less margin price on monthly basis.
					</p>
				</div>
			</div>
		</div>
	);
};
const HeroCard = () => {
	return (
		<section className="bg-[#13111C] h-full w-full lg:-mt-48">
			<div className="lg:pt-48">
				<Card />
			</div>
		</section>
	);
};

export default HeroCard;
