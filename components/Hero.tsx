"use client";
import React from "react";
import Image from "next/image";
import CustomButton from "@/ui-library/CustomButton";

const Hero = () => {
  const handleScroll = () => {};
  return (
    <div className="flex xl:flex-row flex-col gap-5 relative z-0 max-w-[1440px] m-4">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="2xl:text-[64px] sm:text-[48px] text-[36px] font-extrabold">
          Find Book, or rent a car quickly and easily!
        </h1>
        <p className="text-[27px] text-black-100 font-light mt-5">
          Streamline your car rental experience with our effortless booking
          process.
        </p>
        <CustomButton
          title="Explore Cars"
          containerStyles="bg-blue-700 text-white rounded-full mt-10 p-2"
          handleClick={handleScroll}
        />
        <div className="flex justify-center">
          <div className="w-[50%] h-[50%]">
            <Image
              src="/hero.png"
              alt="hero"
              width={100}
              height={100}
              layout="responsive"
              objectFit="contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
