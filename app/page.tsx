import mylogo from "@/public/logo_white.png";
import line from "@/public/line.svg";
import Image from "next/image";
import { MdFormatQuote } from "react-icons/md";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
import ReviewBar from "./component/ReviewBar";

const page = () => {
  return (
    <section className="flex items-top md:pl-4 py-2 h-screen">
      {/* <NavBar/> */}
      <div className="left md:flex-3 flex-1 md:flex hidden gradientbg rounded-sm px-4 flex  flex-col py-4 justify-between items-center h-full">
        <div className="titleText px-4 pt-4">
          <Image src={mylogo} alt="Logo" width={80} />
          <h3 className="mt-4 text-white font-bold text-3xl  font-noto text-left leading-relaxed">
            Bootstrap your
          </h3>
          <div className="flex items-start gap-2 flex-col text-3xl">
            <h3 className="text-[#6AF1F1]   font-noto font-bold ">
              Communication <span className="text-white"> Real Time</span>
            </h3>

            <Image
              src={line}
              className="text-center ml-4 mb-4"
              alt="line"
              width={120}
            />
          </div>

          <p className="fonts-noto text-white text-[14px] font-normal text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
            non adipisci et error fuga odio debitis qui necessitatibus animi
            aliquid! non adipisci et error fuga odio debitis qui necessitatibus
            animi aliquid! adipisci et error fuga odio debitis qui
            necessitatibus animi aliquid! non adipisci et error fuga odio
            debitis qui necessitatibus animi aliquid! odio debitis qui
            necessitatibus animi aliquid! non adipisci et error fuga odio
            debitis qui necessitatibus animi aliquid!
          </p>
        </div>
        <ReviewBar />
      </div>
      {/* sign in form */}
      <div className="right md:flex-3 flex-1 md:pt-14 pt-10 md:px-20 px-6 overflow-y-auto h-full">
        <h3 className="text-3xl capitalize text-[#0E2F5E] text-center md:text-left  font-bold">
          sign In
        </h3>
        <p className="pt-2 pb-4 text-xl text-center md:text-left text-[#5A5C78]">
          Input your credentials to login into your account.
        </p>
        <form className="w-full">
          <label
            htmlFor="email"
            className="text-sm font-medium text-[#0E2F5E] md:block hidden"
          >
            Email Address
          </label>
          <input
            type="text"
            placeholder="Email Address"
            name="email"
            className="w-full mt-2"
          />
          <label
            htmlFor="password"
            className="text-sm font-medium text-[#0E2F5E] md:block hidden"
          >
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="w-full mt-2"
          />
          <button type="submit" className="w-full py-6">
            Sign In
          </button>
        </form>
        <div className="flex items-center gap-4 mt-8 justify-center">
          <div className="flex-1 border-t border-gray-400"></div>
          <span className="text-gray-700">Alternative Login</span>
          <div className="flex-1 border-t border-gray-400"></div>
        </div>
        <div className="buttonSocial flex flex-wrap items-center gap-4 mt-8 justify-center">
          <button className="w-full py-4 border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2">
            <FcGoogle size={24} />
            Sign in With Google{" "}
          </button>
          <button className="w-full py-4 border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2">
            <SiFacebook size={24} />
            Sign in With Facebook{" "}
          </button>
        </div>
        <h3 className="text-center mt-8 pb-10">
          New to Space Bud?{" "}
          <a href="/pages/register" className="font-bold text-[#0D2C5D]">
            Sign Up Now
          </a>
        </h3>
      </div>
    </section>
  );
};

export default page;
