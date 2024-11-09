import Link from "next/link";
import Navbar from "./Navbar";
import { HiMagnifyingGlass, HiOutlineUser, HiOutlineUserPlus } from "react-icons/hi2";
import Image from "next/image";
import Cart from "./Cart";

const Header = () => {
    return (
        <header className="shadow-md py-4 w-full sticky top-0 overflow-auto bg-white z-10">
            <div className="flex items-center justify-between container mb-5">
                <div className="flex items-center gap-20">
                    <Link href="/"><Image src="/images/petsfet-logo.png" alt="PetsFet Logo" width={100} height={100} /></Link>
                    <Navbar />
                </div>
                <div className="flex items-center gap-5">
                    <form action="#" className="">
                        <div className="flex gap-1 border rounded border-[#58294E]">
                            <input type="text" placeholder="Search products" id="search" className="font-light w-72 outline-none p-2 rounded-lg " />
                            <label htmlFor="search" className=" cursor-pointer  flex items-center justify-center w-12 text-primary border-l border-[#58294E]"><HiMagnifyingGlass className="text-xl" /></label>
                        </div>
                    </form>
                    <Cart />
                    <div className="flex items-center ">
                        <Link href="/signin"><button className="w-28 text-primary h-11 rounded-full flex items-center gap-2 justify-center font-[500]"><HiOutlineUser className="text-xl" />Sign In</button></Link>
                        <Link href="/signup"><button className="w-32 border border-[#58294E] text-white bg-primary h-11 rounded-full flex items-center gap-2 justify-center font-[500]"><HiOutlineUserPlus className="text-xl" />Sign Up</button></Link>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;