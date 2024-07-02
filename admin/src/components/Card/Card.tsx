import React from "react";

interface CardProps {
  total: string;
  item: string;
  icon: React.ReactNode;
}

const Card = ({ total, item, icon }: CardProps) => {
  return (
    <div className="bg-white rounded-xl p-4 w-full mb-4 lg:mb-0 flex items-center justify-between">
      <div className="flex items-center justify-between">
        <div className="bg-blue bg-opacity-10 flex items-center justify-center p-4 rounded-md mr-3">
          <img
            className="fill-blue stroke-blue w-8 lg:w-14 h-8 lg:h-14"
            src={`${icon}`}
            alt={`${icon}`}
          />
        </div>
        <div className="mr-auto lg:mr-6">
          <h2 className="text-2xl lg:text-4xl font-bold mb-1">{total}</h2>
          <p className="text-xs lg:text-base text-dark-gray">Total {item}</p>
        </div>
      </div>
      <i className="">
        <svg
          width="16"
          height="28"
          viewBox="0 0 16 28"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2L14 14L2 26"
            stroke="#274061"
            stroke-width="2.8125"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </i>
    </div>
  );
};

export default Card;
