/* eslint-disable react/prop-types */
import { IoMdAddCircle } from "react-icons/io";
// "https://assets-au-01.kc-usercontent.com/bca3e5d5-83bd-02bf-1c27-acb036630e5b/77e3939b-bdb6-45ec-a546-6524c7c46dae/A2M_Pkg_Grassfed_2p_NonFort_111101-01_Render_Angle_L2.png?auto=format"

const ProductCard = ({ name, price, imgUrl }) => {
	return (
		<div className="border border-gray-600 w-[500px] h-full">
			<div className="bg-white">
				<img
					src={imgUrl}
					alt=""
					className=" h-[300px] object-cover mx-auto mix-blend-multiply"
				/>
			</div>
			<h4 className="text-3xl font-semibold pl-2">{name}</h4>
			<p className="text-3xl font-semibold pl-2 pt-2">₹{price}</p>
			<button className="float-right rounded-md flex items-center capitalize text-2xl bg-[#2F9A5A] text-white font-inter px-4 py-2 gap-2">
				Add to cart{" "}
				<span>
					<IoMdAddCircle className="text-3xl" />
				</span>{" "}
			</button>
		</div>
	);
};

export default ProductCard;
