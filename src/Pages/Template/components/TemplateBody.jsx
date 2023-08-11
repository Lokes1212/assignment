import useSticky from "./useSticky";
import classNames from "classnames";
import filterIcon from "../../../assets/template/temp-icn.png";
import { AiOutlineSearch } from "react-icons/ai";
import template from "../../../assets/landingpage/template-1.png";
const TemplateBody = () => {
	const { sticky, stickyRef } = useSticky();
	return (
		<section
			className="bg-[#13111c] px-5 md:px-10 py-10"
			// className={classNames(" bg-[#13111c] px-10  border", {
			// 	sticky,
			// })}
		>
			<div
				ref={stickyRef}
				// className=""
				className={classNames(
					"flex items-center justify-between py-2 bg-[#13111C] text-white  md:px-10  ",
					{
						sticky,
					}
				)}
			>
				<div>
					<img
						src={filterIcon}
						alt=""
						className="w-[25px]"
					/>
				</div>
				<div className="flex items-center gap-5 text-2xl  lg:pl-40 font-jakarta font-medium">
					<span>Landing Page</span>
					<span>Website</span>
				</div>
				<div className="hidden lg:flex items-center border border-[#D40CE4] px-1 py-2 rounded-md">
					<input
						type="text"
						placeholder="Search"
						className="bg-transparent pl-2 outline-none focus:outline-none"
					/>
					<AiOutlineSearch className="text-2xl" />
				</div>
			</div>
			{sticky && (
				<div
					style={{
						height: `${stickyRef.current?.clientHeight}px`,
					}}
				/>
			)}
			<div className="flex flex-wrap lg:flex-nowrap items-center justify-center md:justify-between gap-10 text-white mt-10">
				<div className="w-[300px] md:w-auto">
					<img
						src={template}
						alt=""
					/>
					<h5 className="text-3xl">Artist</h5>
					<h6>Medium UI, Easy access</h6>
				</div>
				<div className="w-[300px] md:w-auto">
					<img
						src={template}
						alt=""
					/>
					<h5 className="text-3xl">Artist</h5>
					<h6>Medium UI, Easy access</h6>
				</div>
				<div className="w-[300px] md:w-auto">
					<img
						src={template}
						alt=""
					/>
					<h5 className="text-3xl">Artist</h5>
					<h6>Medium UI, Easy access</h6>
				</div>
			</div>
		</section>
	);
};

export default TemplateBody;
