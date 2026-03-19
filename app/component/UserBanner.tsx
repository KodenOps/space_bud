import user from "@/public/avatar03.png";
import Image from "next/image";
import { RxCaretDown } from "react-icons/rx";

const UserBanner = () => {
  return (
    <div className="w-full bg-[#1B3F7A] py-4 px-2 flex items-center justify-between rounded-md">
      <div className="flex items-center gap-4">
        <Image
          src={user}
          alt="user_image"
          width={50}
          className="rounded-md border-2 border-white"
        />
        <div className="details">
          <h4 className="font-medium text-white">Rejoice Kutanga</h4>
          <p className="text-[#E9F0BC] font-mono">
            Banker | <span>26</span> Years
          </p>
        </div>
      </div>
      <RxCaretDown size={32} color="white" />
    </div>
  );
};

export default UserBanner;
