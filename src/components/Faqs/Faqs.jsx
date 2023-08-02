/* eslint-disable react/prop-types */
import { data } from "autoprefixer";
import { useState } from "react";
// const Faq = (props) => {
// 	const [data, setData] = useState(props.datas);

// 	const handleToggleActive = () => {
// 		let activeNew = data.active === 1 ? 0 : 1;
// 		setData({ ...data, active: activeNew });
// 	};
// 	return (
// 		<div
// 			className={`p-5 bg-[#E9E8E8]  rounded-lg mb-5 duration-500 group ${
// 				data.active === 1 ? "is-active " : ""
// 			}`}
// 		>
// 			<div className="flex items-center">
// 				<div className="w-full font-semibold text-xl">{data.question}</div>
// 				{data.active === 1 ? (
// 					<p
// 						className="text-5xl text-[#181F5E] font-bold rotate-90 cursor-pointer duration-500 group-[.is-active]:rotate-[360deg]"
// 						onClick={handleToggleActive}
// 					>
// 						-
// 					</p>
// 				) : (
// 					<p
// 						className="text-3xl text-[#181F5E] font-bold rotate-90 cursor-pointer duration-500 group-[.is-active]:rotate-[360deg]"
// 						onClick={handleToggleActive}
// 					>
// 						+
// 					</p>
// 				)}
// 			</div>
// 			<div className="overflow-hidden font-normal text-lg pt-4 duration-500 max-h-0 group-[.is-active]:max-h-[100px]">
// 				{data.answer}
// 			</div>
// 		</div>
// 	);
// };
import { AiOutlinePlus, AiFillCloseCircle } from "react-icons/ai";
const Faq = ({ datas, toggleFAQ, index }) => {
	return (
		<div
			className={`font-jakarta  border-b py-5  ${
				datas.open ? "opacity-100" : "opacity-20"
			}  `}
			onClick={() => toggleFAQ(index)}
			key={index}
		>
			<div className="flex items-center justify-between cursor-pointer text-xl md:text-2xl font-semibold py-8  transition-all ease-in duration-300">
				<div className="flex items-center gap-4  ">
					<p>{datas.id}.</p>
					<p className="">{datas.question}</p>
				</div>
				<p>
					{datas.open ? <AiFillCloseCircle /> : <AiOutlinePlus />}
					{/* <AiOutlinePlus /> */}
				</p>
			</div>
			<div
				className={`${
					datas.open
						? "h-auto py-4 opacity-100 transition-all ease-out duration-300 "
						: "opacity-0	h-0 transition-all ease-in duration-300 py-0"
				} pl-8 md:pr-10 text-xl overflow-y-hidden   `}
			>
				{datas.answer}
			</div>
		</div>
	);
};

const Faqs = () => {
	const [list, setList] = useState([
		{
			id: 1,
			question: "How can I create an account on First Store?",
			answer:
				"To create an account on Shop Easy, visit the website and fill out the registration form with your name, email, and password. Agree to the terms and click 'Create Account' to complete the process.",
			open: true,
		},
		{
			id: 2,
			question: "What payment methods are accepted for online orders?",
			answer: "",
			open: false,
		},
		{
			id: 3,
			question: "Are there any discounts or promotions available on First Store?",
			answer: "",
			open: false,
		},
		{
			id: 4,
			question: "How long does it take to process and deliver an online order?",
			answer: "",
			open: false,
		},
	]);
	const toggleFAQ = (index) => {
		setList(
			list.map((faq, i) => {
				if (i === index) {
					faq.open = !faq.open;
				} else {
					faq.open = false;
				}

				return faq;
			})
		);
	};
	return (
		<section className="py-20 pb-20 px-4 lg:px-24 bg-[#13111C] text-white">
			<h1 className="text-xl text-center  lg:text-4xl font-semibold  pb-14 uppercase font-jakarta">
				Frequently asked questions
			</h1>
			<div className="max-w-[1200px] mx-auto">
				{list.map((item, index) => (
					<Faq
						key={index}
						datas={item}
						index={index}
						toggleFAQ={toggleFAQ}
					/>
				))}
			</div>
		</section>
	);
};

export default Faqs;
