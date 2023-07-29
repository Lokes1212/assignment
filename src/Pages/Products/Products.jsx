import { useParams } from "react-router-dom";
import ProductCard from "./components/ProductCard";
import {
	ElectronicsData,
	FruitsData,
	GroceriesData,
	furnitureData,
} from "../../data/data";
const Products = () => {
	const params = useParams();
	// console.log(params);
	let data = [];

	switch (params.categoryId) {
		case "grocery":
			data = GroceriesData;
			break;
		case "furniture":
			data = furnitureData;
			break;
		case "electronics":
			data = ElectronicsData;
			break;
		case "fruits":
			data = FruitsData;
			break;
		default:
			data = GroceriesData;
			break;
	}

	return (
		<section className="px-4 lg:px-20 py-5">
			<h1 className="text-4xl font-semibold font-fira py-5 capitalize underline">
				{params.categoryId}
			</h1>
			<div className="flex flex-wrap w-full justify-between items-center gap-20">
				{data &&
					data.map((item) => (
						<ProductCard
							name={item.title}
							price={item.price}
							imgUrl={item.img}
							key={item.id}
						/>
					))}
				{data &&
					data.map((item) => (
						<ProductCard
							name={item.title}
							price={item.price}
							imgUrl={item.img}
							key={item.id}
						/>
					))}
			</div>
		</section>
	);
};

export default Products;
