/* eslint-disable react/prop-types */
import image1 from "../../assets/payment-img1.png";
import image2 from "../../assets/payment-img2.png";
const Card = ({ description, image, title }) => {
	return (
		<div className="w-full">
			<div className="w-full">
				<img
					src={image}
					alt=""
				/>
			</div>
			<h4 className="font-bold lg:font-semibold text-xl pt-6 font-inter 2xl:text-2xl">
				{title}
			</h4>
			<p className="font-normal text-base w-[90%] 2xl:w-[70%] text-white  py-2 font-inter">
				{description}
			</p>
		</div>
	);
};
const Payments = () => {
	return (
		<section className="py-4 lg:py-10  lg:pb-20 px-4 lg:px-24 bg-[#0C113C] text-white">
			<h1 className="text-center  text-md lg:text-4xl font-bold lg:font-semibold pb-4 lg:pb-14  font-fira">
				So many ways to pay
			</h1>
			<div className="flex flex-col lg:flex-row gap-10 justify-between ">
				<Card
					title={"Payment methods"}
					image={image1}
					description={
						"Accept Square Pay, Apple Pay, Cash App Pay, and Google Pay for faster checkout."
					}
				/>
				<Card
					title={"Offer buy now, pay later with Afterpay"}
					image={image2}
					description={
						"Square Online comes with Afterpay built in. Let your customers pay in four interest-free installments, while you get paid in full right away."
					}
				/>
			</div>
		</section>
	);
};

export default Payments;
