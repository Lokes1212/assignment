import { Link } from "react-router-dom";

const Login = () => {
	return (
		<section className="bg-[#EAEBEB] w-full h-full py-10 px-8">
			<div className="bg-white py-4 px-10">
				<div className="">
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
									className="text-[#1976D2] underline text-base"
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
					<div>
						<p>Or</p>
					</div>
					<div>
						<button>Continue with Google</button>
						<button>Continue with Apple</button>
						<p>
							By continuing, you agree to with <Link>Terms & Conditions</Link>
						</p>
					</div>
					<div>
						<p>Or</p>
					</div>
					<div>
						<h2>New Customer</h2>
						<p>
							{
								"Do You have an account? No problem, you can check out as a guest.You'll have the option to create an account during checkout."
							}
						</p>
						<button>Continue as Guest</button>
					</div>
				</div>
				<div>
					<img
						src=""
						alt=""
					/>
				</div>
			</div>
		</section>
	);
};

export default Login;
