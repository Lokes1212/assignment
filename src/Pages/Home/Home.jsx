import Delivery from "../../components/Delivery/Delivery";
import Hero from "../../components/HeroSection/Hero";
import ShoppingPick from "../../components/ShoppingPick/ShoppingPick";

import { shoppingData, shippingData } from "../../data/data";
import shoppingImg from "../../assets/delivery.png";
import msShoppingImg from "../../assets/ms-delivery.png";
import shippingImg from "../../assets/delivery-2.png";
import msShippingImg from "../../assets/ms-delivery-2.png";
import Payments from "../../components/Payments/Payments";
import PricingPlans from "../../components/PricingPlans/PricingPlans";
import Faqs from "../../components/Faqs/Faqs";
import Testimonial from "./components/Testimonial";
import BusinessTool from "../../components/BusinessTool/BusinessTool";

const Home = () => {
	return (
		<main className="overflow-x-hidden">
			<Hero />
			<ShoppingPick />
			<Delivery
				title={"Deliver an unparalleled online shopping experience."}
				data={shoppingData}
				img={shoppingImg}
				bgColor={"#0C113C"}
				textColor={"text-white"}
				msImg={msShoppingImg}
			/>
			<Delivery
				title={"Save on shipping, in-store pickup, and delivery."}
				data={shippingData}
				img={shippingImg}
				msImg={msShippingImg}
				bgColor={"#F2F2F2"}
				textColor={"text-black"}
			/>
			<Payments />
			<PricingPlans />
			<Faqs />
			<Testimonial />
			<BusinessTool />
		</main>
	);
};

export default Home;
