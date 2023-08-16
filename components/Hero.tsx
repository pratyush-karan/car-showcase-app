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
        <div className="xl:flex-[1.5] flex justify-end items-end w-full xl:h-screen">
          <div className="relative xl:w-full w-[90%] xl:h-screen h-[590px] z-0">
            <Image src="/hero.png" alt="hero" fill className="object-contain" />
          </div>
          <div className="absolute xl:-top-24 xl:-right-1/2 -right-1/4 bg-[url('/hero-bg.png')] bg-repeat-round -z-10 w-full h-full overflow-hidden" />
        </div>
      </div>
    </div>
  );
};

export default Hero;