import SideView from "@/app/component/SideView";
import { FcGoogle } from "react-icons/fc";
import { SiFacebook } from "react-icons/si";
const page = () => {
  return (
    <section className="md:flex items-top md:pl-4 py-2 h-screen">
      <SideView />
      <div className="right flex-3 md:pt-14 pt-10 px-20 overflow-y-auto h-full">
        {" "}
        <h3 className="text-3xl capitalize text-[#0E2F5E] text-center md:text-left font-bold">
          sign Up
        </h3>
        <p className="pt-2 pb-4 text-xl text-[#5A5C78]">
          Input your credentials to login into your account.
        </p>
        <form className="w-full grid grid-cols-2 justify-between gap-2">
          {/* names */}
          <div>
            <label
              htmlFor="firstName"
              className="text-sm font-medium text-[#0E2F5E]"
            >
              First Name
            </label>
            <input
              type="text"
              placeholder="First Name"
              name="firstName"
              className="w-full mt-2"
            />
          </div>
          <div>
            <label
              htmlFor="lastName"
              className="text-sm font-medium text-[#0E2F5E]"
            >
              Last Name
            </label>
            <input
              type="text"
              placeholder="Last Name"
              name="lastName"
              className="w-full mt-2"
            />
          </div>
          {/* EMAIL & DOB */}
          <div>
            <label
              htmlFor="Email"
              className="text-sm font-medium text-[#0E2F5E]"
            >
              Email Address
            </label>
            <input
              type="text"
              placeholder="Email Address"
              name="Email"
              className="w-full mt-2"
            />
          </div>
          <div>
            <label
              htmlFor="dateOfBirth"
              className="text-sm font-medium text-[#0E2F5E]"
            >
              Date of Birth
            </label>
            <input
              type="date"
              placeholder="Date of Birth"
              name="dateOfBirth"
              className="w-full mt-2"
            />
          </div>
          <div className="col-span-2">
            <label
              htmlFor="RelationshipStatus"
              className="text-sm font-medium text-[#0E2F5E]"
            >
              Relationship Status
            </label>
            <select
              name="RelationshipStatus"
              className="w-full mt-2 bg-gray-100 border-[1px] border-gray-300 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 mb-4"
            >
              <option value="">Select Status</option>
              <option value="single">Single</option>
              <option value="married">Married</option>
              <option value="divorced">Divorced</option>
            </select>
          </div>
          <div className="">
            <label
              htmlFor="Password"
              className="text-sm font-medium text-[#0E2F5E]"
            >
              Password
            </label>
            <input
              type="password"
              placeholder="Password"
              name="Password"
              className="w-full mt-2 bg-gray-100 border-[1px] border-gray-300 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 mb-4"
            />
          </div>
          <div className="">
            <label
              htmlFor="ConfirmPassword"
              className="text-sm font-medium text-[#0E2F5E]"
            >
              Confirm Password
            </label>
            <input
              type="password"
              placeholder="Confirm Password"
              name="ConfirmPassword"
              className="w-full mt-2 bg-gray-100 border-[1px] border-gray-300 rounded-md px-4 py-4 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors duration-300 mb-4"
            />
          </div>
          <button
            type="submit"
            className="col-span-2 bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md transition-colors duration-300"
          >
            Register
          </button>
        </form>
        <div className="flex items-center gap-4 mt-8 justify-center">
          <div className="flex-1 border-t border-gray-400"></div>
          <span className="text-gray-700">Alternative Signup</span>
          <div className="flex-1 border-t border-gray-400"></div>
        </div>
        <div className="buttonSocial flex flex-wrap items-center gap-4 mt-8 justify-center">
          <button className="w-full py-4 border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2">
            <FcGoogle size={24} />
            Register With Google{" "}
          </button>
          <button className="w-full py-4 border-[1px] border-gray-400 rounded-md flex items-center justify-center gap-2">
            <SiFacebook size={24} />
            Register With Facebook{" "}
          </button>
        </div>
        <h3 className="text-center mt-8 pb-10">
          Already a Space Buddy?{" "}
          <a href="/" className="font-bold text-[#0D2C5D]">
            Sign In Now
          </a>
        </h3>
      </div>
    </section>
  );
};

export default page;
