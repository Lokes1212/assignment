import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import { AiFillApple } from "react-icons/ai";
import loginImg from "../assets/login-img.png";
const UnderLine = () => {
	return (
		<div className="flex items-center gap-3 justify-center lg:justify-start">
			<div className="w-[90px] h-[1px] bg-black"></div>
			<p className="text-lg font-medium">Or</p>
			<div className="w-[90px] h-[1px] bg-black"></div>
		</div>
	);
};
const Login = () => {
	return (
		<section className="bg-[#EAEBEB] w-full h-full p-2 lg:py-10 lg:px-8 ">
			<div className="bg-white py-4 px-4 lg:px-10 flex flex-col-reverse lg:flex-row items-center w-full ">
				<div className=" lg:w-1/2">
					<h1 className="text-2xl text-[#3F787B] font-inter font-semibold">
						Firststore
					</h1>
					<div className="py-4 flex gap-16 text-lg font-inter font-medium">
						<span>Log In</span>
						<span>Sign Up</span>
					</div>

					<div className="">
						<form>
							<div className="flex flex-col gap-5 pb-4">
								<label
									htmlFor="email"
									className="text-lg"
								>
									Email
								</label>
								<input
									type="email"
									name="email"
									id="email"
									className="bg-transparent border border-black text-black  py-2 rounded-md px-8 outline-none "
									placeholder="hello@ricozindia.com"
								/>
							</div>
							<div className="flex flex-col gap-5">
								<label
									htmlFor="password"
									className="text-lg"
								>
									Password
								</label>
								<input
									type="password"
									name="password"
									id="password"
									className="bg-transparent border border-black  py-2 rounded-md px-8 outline-none"
									placeholder="Your Password "
								/>
								<Link
									to="/forgot-password"
									className="text-[#1976D2]  text-base"
								>
									Forgot Password?
								</Link>
							</div>

							<button
								type="submit"
								className="bg-[#39634A] px-4 py-1 rounded-md text-white font-normal my-8"
							>
								Sign In
							</button>
						</form>
					</div>
					<UnderLine />
					<div className="flex gap-4 flex-col py-8  lg:w-[70%]">
						<button className="border border-black rounded-md flex items-center gap-5 px-4 py-1 text-lg font-jakarta font-semibold">
							<span className="pr-6">
								<FcGoogle />
							</span>
							Continue with Google
						</button>
						<button className="border border-black rounded-md flex items-center gap-5 px-4 py-1 text-lg font-jakarta font-semibold">
							<span className="pr-6">
								<AiFillApple />
							</span>
							Continue with Apple
						</button>
						<p className="font-poppins font-normal text-sm">
							By continuing, you agree to with <Link>Terms & Conditions</Link>
						</p>
					</div>
					<UnderLine />
					<div className="py-8 text-center  lg:w-[80%] px-4">
						<h2 className="font-inter font-semibold text-xl">New Customer</h2>
						<p className="font-inter font-normal text-base py-4 text-black opacity-80">
							{
								"Do You have an account? No problem, you can check out as a guest.You'll have the option to create an account during checkout."
							}
						</p>
						<button className="bg-[#094EB4] text-white font-roboto font-bold text-xl px-10 py-2 rounded-md">
							Continue as Guest
						</button>
					</div>
				</div>
				<div>
					<img
						src={loginImg}
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default Login;
