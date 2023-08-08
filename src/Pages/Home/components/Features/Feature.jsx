/* eslint-disable react/prop-types */
const img1 =
	"https://images.unsplash.com/photo-1527689368864-3a821dbccc34?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80";
const img3 =
	"https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80";
import img2 from "../../../../assets/landingpage/feature-2.png";
const Title1 = () => {
	return (
		<h3 className="font-semibold text-[40px]">
			Built your website with our
			<span className="text-[#C41EFF]"> easy templetes.</span>
		</h3>
	);
};
const Title2 = () => {
	return (
		<h3 className="font-semibold text-[40px]">
			<span className="text-[#C41EFF]">Logo</span> Creation
		</h3>
	);
};
const Title3 = () => {
	return (
		<h3 className="font-semibold text-[34px]">
			<span className="text-[#C41EFF]">Social media post </span>
			Creation
		</h3>
	);
};
const FeatureCard = ({ imgUrl, Title, desc }) => {
	return (
		<div className="font-jakarta text-white flex flex-col lg:flex-row w-full gap-14 lg:even:flex-row-reverse">
			<div className="rounded-2xl lg:w-1/2 overflow-hidden">
				<img
					src={imgUrl}
					alt=""
					className="w-full"
				/>
			</div>
			<div className="lg:w-1/2">
				<Title />
				<p className="font-normal text-[18px] md:w-[70%] py-10">{desc}</p>
				<button className="font-semibold text-base px-6 py-2 border border-[#C41EFF] rounded-md my-5">
					Know more
				</button>
			</div>
		</div>
	);
};
const Feature = () => {
	return (
		<section className="bg-[#13111C] text-white py-10 px-5 md:px-10 lg:px-28">
			<div>
				<h1 className="text-center font-bold  text-3xl md:text-4xl uppercase text-white">
					INSPIRING FEATURES
				</h1>
				<div className="py-20 flex flex-col justify-center gap-24">
					<FeatureCard
						imgUrl={img1}
						desc={"Create your business website with our professinal templates"}
						Title={Title1}
					/>
					<FeatureCard
						desc={"You can easily customize your business logo on FirstStore"}
						imgUrl={img2}
						Title={Title2}
					/>
					<FeatureCard
						imgUrl={img3}
						desc={
							"For your social media post and banner your get easy customizeable templetes"
						}
						Title={Title3}
					/>
				</div>
			</div>
		</section>
	);
};

export default Feature;
