"use client";
import { CustomButtonProps } from "@/types";
import React from "react";
import Image from "next/image";

const CustomButton = ({
  title,
  containerStyles,
  handleClick,
  btnType,
  textStyles,
  rightIcon,
}: CustomButtonProps) => {
  return (
    <button
      disabled={false}
      type={btnType || "button"}
      className={`flex flex-row relative justify-center items-center outline-none ${containerStyles}`}
      onClick={handleClick}
    >
      <span className={`${textStyles} flex-1 w-fit `}>
        {title}
        {rightIcon && (
          <span className="absolute">
            <Image
              src={rightIcon}
              alt="rightIcon"
              width={20}
              height={20}
              className="object-contain"
            />
          </span>
        )}
      </span>
    </button>
  );
};

export default CustomButton;
