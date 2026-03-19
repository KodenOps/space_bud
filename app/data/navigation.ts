import { IoHomeOutline, IoAlarmOutline } from "react-icons/io5";
import { GiStaticWaves } from "react-icons/gi";
import { SlCalender } from "react-icons/sl";
import { GoGoal } from "react-icons/go";

interface NavigationItem {
  name: string;
  href: string;
  Icons?: React.ElementType;
}
const navigation: NavigationItem[] = [
  {
    name: "Home",
    href: "/pages/home",
    Icons: IoHomeOutline,
  },
  {
    name: "Calender",
    href: "/pages/calender",
    Icons: SlCalender,
  },
  {
    name: "Reminders",
    href: "/pages/reminders",
    Icons: IoAlarmOutline,
  },
  {
    name: "Daily Goals",
    href: "/pages/Daily Goals",
    Icons: GoGoal,
  },
  {
    name: "Invitations & Events",
    href: "/pages/invitations",
    Icons: GoGoal,
  },
  {
    name: "Q & A",
    href: "/pages/qna",
    Icons: GoGoal,
  },
];

export default navigation;
