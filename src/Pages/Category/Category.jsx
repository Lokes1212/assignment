/* eslint-disable react/prop-types */
import ProductImg from "../../assets/product.png";
import ProductMobileImg from "../../assets/product-ms.jpg";
import Slider from "./components/Slider";
import {
	furnitureData,
	FruitsData,
	ElectronicsData,
	GroceriesData,
	testimonials,
} from "../../data/data";
import Testimonials from "../../components/Testimonials/Testimonials";
const MobilePoster = () => {
	return (
		<div className="relative md:hidden w-full  h-[500px] ">
			<img
				src={ProductMobileImg}
				className="w-full h-full relative object-cover "
			/>
			<div className="absolute top-[50%] left-[50%] bgImageUrl h-full w-full">
				<div className="flex flex-col justify-center items-center h-full text-white my-16">
					<h1 className="font-fira font-semibold text-3xl py-4">
						Welcome to First Store
					</h1>
					<p className="sm:text-lg font-inter font-normal pb-4 px-4">
						Enjoy the convenience of shopping from the comfort of your home.
						With our user-friendly website and intuitive navigation, you can
						easily browse through different categories, compare products, and
						make informed purchasing decisions.
					</p>
					<button className="bg-[#306051] text-white font-medium text-base font-inter px-6 py-2 rounded-md ">
						Start Shopping
					</button>
				</div>
			</div>
		</div>
	);
};
const Poster = () => {
	return (
		<div className="bg-[#F3F4FD] hidden md:flex  flex-row max-w-full w-full px-4 lg:px-20 py-10  justify-between  items-center">
			<div className="md:w-1/2  text-center ">
				<h1 className="font-fira font-semibold  text-3xl lg:text-5xl 2xl:text-7xl  ">
					Welcome to First Store
				</h1>
				<p className="text-base lg:text-lg  font-inter font-normal text-black opacity-75 my-6 lg:w-[100%] 2xl:w-[90%] mx-auto 2xl:text-2xl">
					Enjoy the convenience of shopping from the comfort of your home. With
					our user-friendly website and intuitive navigation, you can easily
					browse through different categories, compare products, and make
					informed purchasing decisions.
				</p>
				<button className="bg-[#306051] text-white font-medium text-xl font-inter px-6 py-2 rounded-md my-4 xl:text-2xl 2xl:my-20">
					Start Shopping
				</button>
			</div>
			<div className="md:w-1/2 ">
				<img
					src={ProductImg}
					alt="product image"
				/>
			</div>
		</div>
	);
};

const Category = () => {
	return (
		<section>
			<MobilePoster />
			<Poster />
			<div>
				<h1 className="px-4 md:px-10 py-10 font-semibold font-fira text-3xl">
					Category Products
					<Slider
						title={"Furniture"}
						url={"/products/furniture"}
						data={furnitureData}
					/>
					<Slider
						title={"Groceries"}
						url={"/products/grocery"}
						data={GroceriesData}
					/>
					<Slider
						title={"Electronics"}
						url={"/products/electronics"}
						data={ElectronicsData}
					/>
					<Slider
						title={"Fruits and vegetables"}
						url={"/products/fruits"}
						data={FruitsData}
					/>
				</h1>
			</div>
			<Testimonials data={testimonials} />
		</section>
	);
};

export default Category;
