import { FaFacebookF, FaGoogle } from "react-icons/fa6";
import Link from "next/link";
import Input from "../Form/Input";

const SignInPage = () => {
    return (
        <div className="max-w-96 text-center flex justify-center mx-auto my-20 p-3">
            <div className="w-full">
                <>
                    <h2 className="text-3xl font-semibold mb-10">Welcome back</h2>
                    <form action="#" className="flex flex-col gap-3">
                        <Input type="email" placeholder="Email address" />
                        <Input type="password" placeholder="Password" />
                        <div className="flex">
                        <Link className="text-primary" href="">Forgot password?</Link>
                        </div>
                        <input type="submit" value="Continue" className="bg-primary p-3 rounded-md cursor-pointer text-white mt-5" />
                    </form>
                    <div className="my-5">
                        <p>Dont have an account? <Link href="/signup" className="text-primary">Sign Up</Link></p>
                    </div>
                </>
                <div className="flex items-center justify-between">
                    <hr />
                    <p>OR</p>
                    <hr />
                </div>
                <div className="text-left flex flex-col gap-3 mt-5">
                    <button className="w-full hover:bg-[#e5e5e5d5] duration-200 text-primary border border-gray-400 p-3 rounded-md  flex items-center gap-3"><FaGoogle /> Continue with Google</button>
                    <button className="w-full hover:bg-[#e5e5e5d5] duration-200 text-primary border border-gray-400 p-3 rounded-md flex items-center gap-3"><FaFacebookF />Continue with Facebook</button>
                </div>
            </div>
        </div>
    );
};

export default SignInPage;