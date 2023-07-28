/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const CardSlide = ({ name, price, imgUrl }) => {
	return (
		<Link to="/">
			<div className="flex flex-col justify-between   h-[300px] 2xl:max-h-[350px] 2xl:h-full ">
				<div className="h-[350px] max-w-[500px]  w-full  overflow-hidden">
					<img
						src={imgUrl}
						alt={name}
						className="object-cover w-full h-full overflow-hidden "
					/>
				</div>
				<div className="justify-items-end">
					<h5 className="font-inter font-medium text-xl pt-3">{name}</h5>
					<p className="font-inter font-medium text-xl opacity-50 pt-1">
						${price}
					</p>
				</div>
			</div>
		</Link>
	);
};

export default CardSlide;
