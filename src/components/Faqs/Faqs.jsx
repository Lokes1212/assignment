/* eslint-disable react/prop-types */
import { useState } from "react";
const Faq = (props) => {
	const [data, setData] = useState(props.datas);

	const handleToggleActive = () => {
		let activeNew = data.active === 1 ? 0 : 1;
		setData({ ...data, active: activeNew });
	};
	return (
		<div
			className={`p-5 bg-[#E9E8E8]  rounded-lg mb-5 duration-500 group ${
				data.active === 1 ? "is-active " : ""
			}`}
		>
			<div className="flex items-center">
				<div className="w-full font-semibold text-xl">{data.question}</div>
				{data.active === 1 ? (
					<p
						className="text-5xl text-[#181F5E] font-bold rotate-90 cursor-pointer duration-500 group-[.is-active]:rotate-[360deg]"
						onClick={handleToggleActive}
					>
						-
					</p>
				) : (
					<p
						className="text-3xl text-[#181F5E] font-bold rotate-90 cursor-pointer duration-500 group-[.is-active]:rotate-[360deg]"
						onClick={handleToggleActive}
					>
						+
					</p>
				)}
			</div>
			<div className="overflow-hidden font-normal text-lg pt-4 duration-500 max-h-0 group-[.is-active]:max-h-[100px]">
				{data.answer}
			</div>
		</div>
	);
};
const Faqs = () => {
	const [list, setList] = useState([
		{
			question: "How can I create an account on First Store?",
			answer:
				"To create an account on Shop Easy, visit the website and fill out the registration form with your name, email, and password. Agree to the terms and click 'Create Account' to complete the process.",
			active: 1,
		},
		{
			question: "What payment methods are accepted for online orders?",
			answer: "",
		},
		{
			question:
				"Are there any discounts or promotions available on First Store?",
			answer: "",
		},
		{
			question: "How long does it take to process and deliver an online order?",
			answer: "",
		},
	]);
	return (
		<section className="py-10 pb-20 px-4 lg:px-24 bg-[#F8F8F8]">
			<h1 className="text-xl text-center lg:text-left lg:text-4xl font-semibold  lg:w-1/2 pb-10">
				Frequently asked questions
			</h1>
			<div>
				{list.map((item, index) => (
					<Faq
						key={index}
						datas={item}
					/>
				))}
			</div>
		</section>
	);
};

export default Faqs;
