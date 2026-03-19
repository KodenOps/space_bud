import { CiMenuKebab } from "react-icons/ci";
import { SiLinktree } from "react-icons/si";
interface propsType {
  title?: string;
  action?: () => {};
}
const Title = ({ title, action }: propsType) => {
  return (
    <div className="w-full flex justify-between items-center px-4 p-2  mt-8">
      <h2 className="text-lg flex items-center gap-2 font-medium mb-2 text-[#0D2C5D]">
        <SiLinktree />
        {title}
      </h2>
      <CiMenuKebab size={24} color="#0D2C5D" />
    </div>
  );
};

export default Title;
