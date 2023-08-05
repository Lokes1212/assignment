const Product = () => {
	return <div className="mx-16 my-10">
		<div className = "w-9 h-9 border-2 text-current cursor-pointer mx-16  ">
			<a   src="/" >Back</a>
		</div>
	<div   >
	<div className =  " border-2 text-current ml-16 my-5 w-96 h-96 inline-block">
		<img   src="https://rcmbusiness.gumlet.io/PROD_IMAGES/221215115227178702.jpg?w=300&dpr=2.6"  />
	
	</div>
	
		<div className=" w-96 h-96 float-right mt-12 mr-60">
			<h1  className="my-3 text-3xl font-inter">Fortune Rozana Basmati Rice &#40;Medium Grain&#41; &#40;1 kg &#41;</h1>
		
			<p className="mt-12 font-inter" >Basmati rice originated in the Indian subcontinent, particularly in the foothills of the Himalayas. It has a sweet, nutty fragrance that is often described.</p>
			
			
				<p className="font-bold font-inter mt-4"><span className="colors.amber 400 ">&#9733;</span>4.8</p>
			
			<div>
				<h2 className="my-10 font-inter "><d className="font-bold text-lg"><span>&#8377;</span> 79</d> <del className="mx-2 "><span>&#8377;</span>130</del>  <span className="text-lime-500"> 39% off</span> </h2>
			</div>
			</div>
			<div>
				<button className="border-2 rounded-sm border-green-600 bg-green-600 ml-16 my-5  w-32 h-9"> Go to Basket</button>
				<div className="border-2 mx-16 rounded-sm border-black inline-block w-32 h-9">
				<button className=" border-r-2 border-black h-8 w-10 mr-4">-</button>
				
				<button className="border-l-2 border-black h-8 w-10 ml-7">+</button>
				</div>
			</div>
		</div>
	

	</div>;


};

export default Product;
