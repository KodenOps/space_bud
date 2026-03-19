"use client";

import SideNav from "@/app/component/SideNav";
import Title from "@/app/component/Title";
import Image from "next/image";
import mylove from "@/public/avatar02.png";

import { MdOutlineAddLink } from "react-icons/md";
import { RxCaretRight } from "react-icons/rx";

import { useState } from "react";
import { Gauge, gaugeClasses } from "@mui/x-charts/Gauge";

type Goal = {
  name: string;
  value: number;
};

const Page = () => {
  // ✅ Independent goals state
  const [goals, setGoals] = useState<Goal[]>([
    { name: "Squat", value: 60 },
    { name: "Run", value: 20 },
    { name: "Pushup", value: 8 },
  ]);

  // ✅ Update specific goal
  const handleChange = (index: number, newValue: number) => {
    const updated = [...goals];
    updated[index].value = newValue;
    setGoals(updated);
  };
  const getGaugeColor = (value: number) => {
    if (value < 40) return "#ef4444"; // red
    if (value < 70) return "#f59e0b"; // amber
    return "#22c55e"; // green
  };

  return (
    <section className="mainpage_home flex">
      <SideNav />

      <div className="right md:flex-4 pt-8 px-4 w-full">
        {/* Header */}
        <p className="text-xl font-medium">Hello, Rejoice</p>
        <p className="text-lg">Welcome to your Home...Literally</p>

        <Title title="Top Moments" />

        {/* Top Section */}
        <div className="top flex flex-wrap justify-between h-[150px] w-full p-2 gap-2">
          <div className="bg-white rounded-sm flex  justify-center items-center h-full shadow-md hover:-translate-y-2 duration-500 cursor-pointer border border-[#c4c4c4]">
            <Image
              src={mylove}
              alt="mylove_image"
              className="w-full h-full object-contain"
            />
          </div>

          <div className="daysTogether p-4 flex-1 relative">
            <h2 className="headers">1000</h2>
            <p>Days Together</p>
          </div>

          <div className="daysTogether p-4 flex-1 relative">
            <span className="absolute top-4 right-4">
              <MdOutlineAddLink
                size={30}
                color="#0D2C5D"
                className="md:block hidden"
              />
            </span>
            <h2 className="headers">May 25</h2>
            <p>Anniversary Date</p>
          </div>

          <div className="daysTogether p-4 flex-1 relative">
            <span className="absolute top-4 right-4">
              <MdOutlineAddLink
                size={30}
                color="#0D2C5D"
                className="md:block hidden"
              />
            </span>
            <h2 className="headers">April 21</h2>
            <p>Partner's Birthday</p>
          </div>

          <div className="daysTogether p-4 flex-1">
            <h2 className="headers">1000</h2>
            <p>Days</p>
          </div>

          <Title title="My Menu" />

          {/* Goals Section */}
          <div className="mymenu md:flex gap-4 flex-1 flex-wrap">
            <div className="goalOverview p-4 flex-1 shadow-sm">
              <h3 className="text-md font-medium text-[#0D2C5D] ">
                Goal Overview
              </h3>
              <p className="text-sm text-[#5A5C78] ">
                See how you are doing with your goals
              </p>

              <div className="flex flex-wrap justify-around items-center gap-6 mt-4">
                {goals.map((goal, index) => (
                  <div
                    key={goal.name}
                    className="flex flex-col items-center gap-2"
                  >
                    <h4 className="font-medium">{goal.name}</h4>

                    {/* Gauge */}
                    <Gauge
                      width={120}
                      height={120}
                      value={goal.value}
                      cornerRadius="50%"
                      sx={(theme) => {
                        const color = getGaugeColor(goal.value);

                        return {
                          [`& .${gaugeClasses.valueText}`]: {
                            fontSize: 20,
                          },
                          [`& .${gaugeClasses.valueArc}`]: {
                            fill: color, // ✅ dynamic color
                          },
                          [`& .${gaugeClasses.referenceArc}`]: {
                            fill: theme.palette.text.disabled,
                          },
                        };
                      }}
                      text={({ value }) => `${value}%`}
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Secondary Card */}
            <div className="goalOverview p-4 flex-1 shadow-sm">
              <h3 className="text-md font-medium text-[#0D2C5D]">
                Goal Overview
              </h3>
              <p className="text-sm text-[#5A5C78]">
                See how you are doing with your goals
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
