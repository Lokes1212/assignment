import Hero from "../../components/HeroSection/Hero";

import Payments from "../../components/Payments/Payments";
import PricingPlans from "../../components/PricingPlans/PricingPlans";
import Faqs from "../../components/Faqs/Faqs";
import Testimonial from "./components/Testimonial";
import BusinessTool from "../../components/BusinessTool/BusinessTool";
import HeroCard from "../../components/HeroCard/HeroCard";
import Templates from "../../components/Templates/Templates";
import Feature from "./components/Features/Feature";
import Work from "./components/Work/Work";

const Home = () => {
	return (
		<main className="overflow-x-hidden">
			<Hero />
			<HeroCard />

			<Templates />
			<BusinessTool />
			<Feature />
			{/* <Payments /> */}
			{/* <PricingPlans /> */}
			<Testimonial />
			<Work />
			<Faqs />
		</main>
	);
};

export default Home;
