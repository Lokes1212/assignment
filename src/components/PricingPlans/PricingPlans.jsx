import PlanCard from "./components/PlanCard";
import PricingCard from "./components/PricingCard";
import {
	basicFeatures,
	starterFeatures,
	advancedFeatures,
} from "../../data/data";
/* eslint-disable react/prop-types */

const PricingPlans = () => {
	return (
		<section className="py-10  px-4 lg:px-24 bg-white">
			<h1 className="lg:text-4xl text-md font-bold lg:font-semibold  lg:w-2/5 font-fira">
				Start for free, upgrade at any time.
			</h1>
			<p className="py-2 lg:py-4 font-normal text-lg  text-black opacity-75 lg:w-[42%] font-inter">
				{"All paid plans come with a free custom domain—that's a $30 value."}
			</p>
			<div className="flex flex-col lg:flex-row gap-5  justify-between w-full py-4">
				<PlanCard
					title={"Free plan"}
					description={"Includes every feature you need to start"}
					btnText={"Start free"}
					btnBgColor={"bg-[#2865DB]"}
					btnColor={"text-white"}
					bgColor={"bg-[#567878]"}
					textColor={"text-white"}
				/>
				<PlanCard
					bgColor={"bg-[#CFE9F5]"}
					textColor={"text-black opacity-75"}
					title={"Paid plans"}
					description={"Unlock advanced features for growing your business."}
					btnText={"Compare plans"}
					btnBgColor={"bg-transparent"}
					btnColor={"text-[#3C4FFF]"}
				/>
			</div>
			<h2 className="text-center font-fira  text-black opacity-80 text-[13px] lg:text-2xl font-bold  lg:font-semibold lg:w-9/12 mx-auto pt-6 lg:pt-14 lg:py-14">
				Unlock premium marketing tools at the most affordable rates to
				supercharge your marketing efforts.
			</h2>
			{/* bg-[#0C113C] */}
			<div className="flex gap-10 py-10 flex-col lg:flex-row ">
				<PricingCard
					title={"Basic"}
					description={
						"Everything you need to create a store, ship products, and process payments."
					}
					price={"300"}
					btnText={"Choose Basics"}
					featuresList={basicFeatures}
				/>
				<PricingCard
					title={"Starter"}
					description={
						"Level up your business with professional reporting and more staff accounts."
					}
					price={"500"}
					btnText={"Choose Starter"}
					featuresList={starterFeatures}
				/>
				<PricingCard
					title={"Advanced"}
					description={
						"Get the best of Shopify with advanced features and our lowest transaction fees"
					}
					price={"1499"}
					btnText={"Choose Advanced"}
					featuresList={advancedFeatures}
				/>
			</div>
		</section>
	);
};

export default PricingPlans;
