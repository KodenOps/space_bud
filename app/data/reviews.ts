import img1 from "@/public/avatar01.png";
import img2 from "@/public/avatar02.png";
import img3 from "@/public/avatar03.png";
import img4 from "@/public/avatar04.png";
import img5 from "@/public/avatar05.png";
import img6 from "@/public/avatar06.png";
import img7 from "@/public/avatar07.png";
import img8 from "@/public/avatar08.png";
import img9 from "@/public/avatar09.png";
import img10 from "@/public/avatar10.png";
import type { StaticImageData } from "next/image";

interface Review {
  id: number;
  name: string;
  role: string;
  review: string;
  image: StaticImageData;
}

export const reviews: Review[] = [
  {
    id: 1,
    name: "John Doe",
    review:
      "This app is amazing! I love the space-themed design and the features it offers. It makes collaboration feel futuristic and fun, while still being practical for everyday use. The balance between creativity and productivity is truly impressive.",
    image: img1,
    role: "Freelancer | UI/UX Designer",
  },
  {
    id: 2,
    name: "Jane Smith",
    review:
      "A fantastic app for space enthusiasts. The user interface is intuitive and visually appealing. It combines creativity with productivity in a way that feels effortless and inspiring. Every detail feels polished, making teamwork enjoyable and efficient.",
    image: img2,
    role: "Freelancer | UI/UX Designer",
  },
  {
    id: 3,
    name: "Michael Brown",
    review:
      "I've tried many collaboration tools, but this one stands out. The cosmic visuals and smooth performance make working with my team enjoyable. It's both functional and stylish, offering features that genuinely improve communication and project flow.",
    image: img3,
    role: "Developer | Frontend Engineer",
  },
  {
    id: 4,
    name: "Emily Davis",
    review:
      "The app's design is sleek and modern, with a unique space vibe that sets it apart. It's easy to navigate, and the features are thoughtfully built for real-time communication. It feels refreshing compared to traditional platforms I’ve used before.",
    image: img4,
    role: "Product Manager | SaaS Startup",
  },
  {
    id: 5,
    name: "Chris Johnson",
    review:
      "I appreciate how this app balances aesthetics with usability. The galaxy-inspired theme makes it fun to use, while the tools themselves are powerful and reliable for daily tasks. It’s rare to find something that blends style with functionality so well.",
    image: img5,
    role: "Freelancer | Graphic Designer",
  },
  {
    id: 6,
    name: "Sophia Martinez",
    review:
      "The app feels refreshing compared to traditional platforms. The space visuals are engaging, and the communication tools are robust. It's perfect for creative teams like mine, offering a unique environment that inspires collaboration and innovation.",
    image: img6,
    role: "Creative Director | Marketing Agency",
  },
  {
    id: 7,
    name: "David Wilson",
    review:
      "I was impressed by how smooth the onboarding process was. The app's futuristic design makes it stand out, and the features genuinely improve collaboration across different projects. It’s a tool that feels both modern and highly dependable.",
    image: img7,
    role: "Freelancer | Fullstack Developer",
  },
  {
    id: 8,
    name: "Olivia Taylor",
    review:
      "This app makes teamwork feel exciting. The space-inspired visuals are motivating, and the tools are practical. It's rare to find something that blends creativity with productivity so well. It keeps me engaged and makes collaboration enjoyable daily.",
    image: img8,
    role: "Freelancer | Content Strategist",
  },
  {
    id: 9,
    name: "Daniel Anderson",
    review:
      "The app's design is not only beautiful but also functional. Real-time communication feels seamless, and the cosmic theme adds a touch of creativity that keeps me engaged daily. It’s a refreshing alternative to the usual collaboration platforms.",
    image: img9,
    role: "Freelancer | Mobile App Developer",
  },
  {
    id: 10,
    name: "Sophia Lee",
    review:
      "I love how this app transforms ordinary collaboration into something extraordinary. The space theme is inspiring, and the features are reliable, making it a joy to use every day. It’s a tool that motivates me to work better and stay connected.",
    image: img10,
    role: "Freelancer | UI/UX Designer",
  },
];
