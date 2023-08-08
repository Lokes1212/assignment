/* eslint-disable react/prop-types */
import work1 from "../../../../assets/landingpage/work-1.png";
import work2 from "../../../../assets/landingpage/work-2.png";
import work3 from "../../../../assets/landingpage/work-3.png";
import work4 from "../../../../assets/landingpage/work-4.png";
const CircleCard = ({ imgUrl }) => {
	return (
		<div className="bg-[#13111C] p-10 drop-shadow-2xl shadow-slate-500 w-[200px] h-[200px]">
			<div className="work-bg w-[100px] h-[100px] rounded-full mx-auto flex items-center justify-center">
				<img
					src={imgUrl}
					alt="  "
					className="object-cover mx-auto w-[40%]"
				/>
			</div>
		</div>
	);
};
const Work = () => {
	return (
		<section className="work-bg h-full font-jakarta">
			<div className="py-10 pt-14 px-5 md:px-20 lg:px-40 max-w-[1200px] mx-auto">
				<div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-0">
					<div className="lg:w-[50%]  items-end">
						<h1 className="text-white font-bold text-3xl md:text-4xl uppercase  py-10 ">
							THE WAY <span className="text-[#C41EFF]">WE WORK</span>...
						</h1>
						<p className="font-medium text-[20px] text-white leading-[2] tracking-wider lg:w-[80%]">
							Personalized Product Recommendations, Advanced Search Filters,
							Multi-Language Support, User Reviews and Ratings, Product Zoom and
							360-Degree Views, Live Chat Support.
						</p>
					</div>
					<div className="flex flex-col items-center md:flex-row lg:justify-normal justify-center md:flex-wrap lg:w-[60%] gap-5  ">
						<CircleCard imgUrl={work1} />
						<CircleCard imgUrl={work2} />
						<CircleCard imgUrl={work3} />
						<CircleCard imgUrl={work4} />
					</div>
				</div>
			</div>
		</section>
	);
};

export default Work;
