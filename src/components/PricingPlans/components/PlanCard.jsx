/* eslint-disable react/prop-types */
const PlanCard = ({ title, description, btnText }) => {
	return (
		<div className={`lg:w-1/2 p-4 bg-[#007B80] text-white rounded-xl`}>
			<h4 className="font-bold text-xl font-inter">{title}</h4>
			<p className="font-normal text-base py-2 font-inter">{description}</p>
			<div className="pt-10 pb-4">
				<button
					className={`px-6 py-1 bg-[#DB0303] font-inter rounded-lg text-xl `}
				>
					{btnText}
				</button>
			</div>
		</div>
	);
};

export default PlanCard;
