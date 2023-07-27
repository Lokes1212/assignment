/* eslint-disable react/prop-types */

const Delivery = ({ title, data, img, bgColor, msImg, textColor }) => {
	return (
		<section
			className={` py-6  lg:pb-20 lg:py-20 px-4 lg:px-24  bg-[${bgColor}] `}
		>
			<div className="">
				<h1
					className={`${textColor} text-2xl text-center  pb-6 lg:text-4xl font-semibold  lg:pb-14   font-fira`}
				>
					{title}
				</h1>

				<div className=" flex flex-col lg:flex-row gap-8 justify-start h-full  mx-auto max-w-[1050px] w-full ">
					<div className="flex justify-center w-full   lg:justify-end   ">
						<img
							src={img}
							alt=""
							className="hidden lg:block max-h-[800px] h-full w-[400px]  "
						/>
						<img
							src={msImg}
							className="block lg:hidden"
							alt=""
						/>
					</div>
					<div className="flex gap-10 flex-col  ">
						{data.map((item) => (
							<div
								className="flex gap-5 "
								key={item.id}
							>
								<div className="bg-[#EBEAEA] w-[60px] lg:w-[40px] mt-1 h-[30px] flex items-center px-2 justify-center rounded-md ">
									<div className="lg:w-full">
										<img
											src={item.image}
											alt=""
											className="lg:w-full"
										/>
									</div>
								</div>
								<div className={`${textColor}`}>
									<p className="font-semibold text-2xl font-inter">
										{item.title}
									</p>
									<p
										className={`font-normal lg:text-lg  opacity-75 pt-6 font-inter `}
									>
										{item.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
};

export default Delivery;
