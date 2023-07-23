/* eslint-disable react/prop-types */
const PricingCard = ({ title, description, price, btnText, featuresList }) => {
	// console.log(featuresList);
	return (
		<div className="p-4 bg-[#AEBEBE] text-black rounded-xl">
			<h3 className="font-semibold text-4xl">{title}</h3>
			<p className="py-2 font-normal text-lg">{description}</p>
			<div className="pt-10 ">
				<p className="text-lg ">
					Starting at{" "}
					<span className="text-[#39634A] text-2xl font-bold">₹{price}</span>{" "}
					<br /> per month for first 3 months
				</p>
			</div>
			<div className="py-10">
				<button className="bg-[#39634A] rounded-md px-6 py-2 text-2xl font-semibold text-white">
					{btnText}
				</button>
			</div>
			<span className="w-full h-[2px] bg-white absolute left-0"></span>
			<div className="pt-10 pb-12">
				<h5 className="font-semibold text-2xl">FEATURES</h5>
				<ul className="list-disc pl-8 py-3 font-normal text-xl">
					{featuresList.map((item) => (
						<li key={item.id}>{item.title}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default PricingCard;
