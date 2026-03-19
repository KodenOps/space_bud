import React from "react";
import { reviews } from "../data/reviews";
import { MdFormatQuote } from "react-icons/md";
import Image from "next/image";
const ReviewBar = () => {
  const randomReview = reviews[Math.floor(Math.random() * reviews.length)];

  return (
    <div className="review w-full py-8 bg-[#1B3F7A] px-4 rounded-sm">
      <p className="text-white text-sm mb-4">
        <MdFormatQuote className="inline" size={24} color="#6AF1F1" />
        {randomReview.review}
        <MdFormatQuote className="inline" size={30} color="#6AF1F1" />
      </p>
      <div className="user_details flex items-center gap-4">
        <Image
          src={randomReview.image}
          alt="line"
          width={70}
          className="border-2 border-white rounded-sm "
        />
        <div className="names text-md">
          <h4 className="text-white font-bold">{randomReview.name}</h4>
          <p className="text-[#6AF1F1] text-sm">{randomReview.role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewBar;
