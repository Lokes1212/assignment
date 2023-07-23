/* eslint-disable react/prop-types */

const Delivery = ({ title, data, img, bgColor, msImg, mobileBg }) => {
	return (
		<section
			className={` py-6  lg:pb-20 lg:py-10 px-4 lg:px-24  ${mobileBg} lg:bg-[${bgColor}]`}
		>
			<div>
				<h1 className="text-2xl text-center lg:text-left pb-6 lg:text-4xl font-semibold  lg:pb-14 lg:w-1/2">
					{title}
				</h1>

				<div className=" flex flex-col lg:flex-row gap-8">
					<div className="flex justify-center lg:w-full">
						<img
							src={img}
							alt=""
							className="hidden lg:block"
						/>
						<img
							src={msImg}
							className="block lg:hidden"
							alt=""
						/>
					</div>
					<div className="flex gap-10 flex-col">
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
								<div>
									<p className="font-semibold text-2xl">{item.title}</p>
									<p className="font-normal lg:text-lg text-black opacity-75 pt-2">
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
