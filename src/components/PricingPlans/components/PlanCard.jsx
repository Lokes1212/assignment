/* eslint-disable react/prop-types */
const PlanCard = ({
	btnBgColor,
	btnColor,
	bgColor,
	textColor,
	title,
	description,
	btnText,
}) => {
	return (
		<div className={`lg:w-1/2 p-4 ${bgColor} ${textColor} rounded-xl`}>
			<h4 className="font-bold text-xl">{title}</h4>
			<p className="font-normal text-base py-2">{description}</p>
			<div className="pt-10 pb-4">
				<button
					className={`px-6 py-1 ${btnBgColor} ${btnColor} rounded-lg text-xl border border-[#3C4FFF]`}
				>
					{btnText}
				</button>
			</div>
		</div>
	);
};

export default PlanCard;
