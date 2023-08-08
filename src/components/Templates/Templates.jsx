/* eslint-disable react/prop-types */
import templateImg1 from "../../assets/landingpage/template-1.png";
import templateImg2 from "../../assets/landingpage/template-2.png";
import templateImg3 from "../../assets/landingpage/template-3.png";
const TemplateCard = ({ imgUrl }) => {
	return (
		<div className="w-[400px] md:h-[400px] drop-shadow-xl hover:-translate-y-3 transition-all ease-out duration-300">
			<img
				src={imgUrl}
				alt=""
			/>
		</div>
	);
};
const Templates = () => {
	return (
		<section className="template-bg w-full h-full text-white font-jakarta ">
			<div className="py-10 font-jakarta pb-20 px-5 max-w-[1200px] mx-auto">
				<h1 className="text-center font-bold  text-3xl md:text-4xl uppercase text-white py-5">
					{" "}
					<span className="text-[#C41EFF]">TEMPLATES</span> DESIGNED TO SELL?
				</h1>
				<p className="text-center  font-normal text-xl py-5">
					Choose from 100’s of designs for every idea and industry.
				</p>

				<div className="flex flex-wrap lg:flex-nowrap justify-center items-center lg:justify-between py-10 lg:px-20 gap-10">
					<TemplateCard imgUrl={templateImg1} />
					<TemplateCard imgUrl={templateImg2} />
					<TemplateCard imgUrl={templateImg3} />
				</div>
				<div className="lg:float-right md:px-16 flex items-center justify-center">
					<button className=" uppercase  font-semibold text-base bg-[#4c2652] py-2 px-6 rounded ">
						See all templates
					</button>
				</div>
			</div>
		</section>
	);
};

export default Templates;
