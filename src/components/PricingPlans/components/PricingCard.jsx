/* eslint-disable react/prop-types */
const PricingCard = ({
	title,
	description,
	price,
	btnText,
	featuresList,
	border,
}) => {
	// console.log(featuresList);
	return (
		<div className={`p-4 bg-[#007B80] text-white rounded-xl ${border} `}>
			<h3 className="font-semibold text-4xl font-inter ">{title}</h3>
			<p className="py-2 font-normal text-base font-inter">{description}</p>
			<div className="pt-10 ">
				<p className="text-lg font-inter ">
					Starting at{" "}
					<span className="text-[#000602] text-2xl font-bold">₹{price}</span>{" "}
					<br /> per month for first 3 months
				</p>
			</div>
			<div className="py-10">
				<button className="bg-[#C11313] rounded-md px-6 py-2 text-2xl font-semibold text-white">
					{btnText}
				</button>
			</div>

			<div className="pt-10 pb-12">
				<h5 className="font-semibold text-2xl font-inter">FEATURES</h5>
				<ul className="list-disc pl-8 py-3 font-normal text-xl font-inter">
					{featuresList.map((item) => (
						<li key={item.id}>{item.title}</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default PricingCard;
