/* eslint-disable react/prop-types */
import shoppingImg1 from "../../assets/shoping-img-1.png";
import shoppingImg2 from "../../assets/shoping-img-2.png";
import shoppingImg3 from "../../assets/shoping-img-3.png";
const Button = ({ text }) => {
	return (
		<div className="mt-10">
			<button className="px-8 py-2 block mx-auto  bg-[#306051] text-white font-medium text-xl rounded-lg ">
				{text}
			</button>
		</div>
	);
};
const ShoppingPick = () => {
	return (
		<section className="px-4 lg:pb-10 lg:px-24  bg-white">
			<h1 className="text-center font-bold lg:text-4xl text-xl lg:py-10 py-6">
				How can Shop Easy help you?
			</h1>
			<div className="flex flex-col  md:flex-row md:justify-between gap-14">
				<div className="bg-[#F0EBEB] pt-10 px-6 pb-4 w-max-[500px] w-full ">
					<h3 className="font-medium text-3xl text-center pb-3">
						Want to pick up from store
					</h3>
					<p className="font-normal text-lg text-center">
						Shop Easy makes it simple to Seamless order Pickup experience at
						Your convenience.
					</p>
					<Button text={"Pick Up In-Store"} />
					<div className="flex justify-between pt-10 gap-10">
						<div>
							<img
								src={shoppingImg1}
								alt=""
							/>
						</div>
						<div>
							<img
								src={shoppingImg2}
								alt=""
							/>
						</div>
					</div>
				</div>

				<div className="bg-[#F1F2FF] pt-10 px-6 pb-4 w-max-[500px] w-full ">
					<h3 className="font-medium text-3xl text-center pb-3">
						Want to shop online
					</h3>
					<p className="font-normal text-lg text-center">
						With Shop Easy explore and shop from the comfort of your home.
					</p>

					<Button text="Start Shopping" />
					<div className="flex justify-between pt-10 gap-10">
						<img
							src={shoppingImg3}
							alt=""
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default ShoppingPick;
