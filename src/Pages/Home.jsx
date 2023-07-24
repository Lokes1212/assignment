import Delivery from "../components/Delivery/Delivery";
import Hero from "../components/HeroSection/Hero";
import ShoppingPick from "../components/ShoppingPick/ShoppingPick";
import Navbar from "../components/navbar/Navbar";
import { shoppingData, shippingData } from "../data/data";
import shoppingImg from "../assets/delivery.png";
import msShoppingImg from "../assets/ms-delivery.png";
import shippingImg from "../assets/delivery-2.png";
import msShippingImg from "../assets/ms-delivery-2.png";
import Payments from "../components/Payments/Payments";
import PricingPlans from "../components/PricingPlans/PricingPlans";
import Faqs from "../components/Faqs/Faqs";
import Footer from "../components/Footer/Footer";

const Home = () => {
	return (
		<main className="overflow-x-hidden">
			<Navbar />
			<Hero />
			<ShoppingPick />
			<Delivery
				title={"Deliver an unparalleled online shopping experience."}
				data={shoppingData}
				img={shoppingImg}
				bgColor={"#FFFFFF"}
				msImg={msShoppingImg}
			/>
			<Delivery
				title={"Save on shipping, in-store pickup, and delivery."}
				data={shippingData}
				img={shippingImg}
				msImg={msShippingImg}
				bgColor={"#F2F2F2"}
			/>
			<Payments />
			<PricingPlans />
			<Faqs />
			<Footer />
		</main>
	);
};

export default Home;
