import Image from "next/image";
import Link from "next/link";
import React from "react";

const Hero = () => {
  return (
    <div className="text-center mt-12 max-w-2xl mx-auto flex flex-col justify-center">
      <div className="flex flex-col leading-tight justify-center text-center text-4xl sm:text-7xl font-bold">
        <h2>Download.</h2>
        <h2>Upload. Connect.</h2>
        <p className="sm:text-xl text-base font-normal text-muted-foreground">
          Join the Revolution in Sport Recruitment
        </p>
      </div>

      <div className="flex items-center gap-5 mt-5 sm:mt-8 mx-auto">
        <Link href={"/new"}>
          <img src="/apple.png" className=" w-32 sm:w-40" />
        </Link>
        <Link href={"/play"}>
          <img src="/google.png" className="w-32 sm:w-40" />
        </Link>
      </div>

      <div className="sm:w-full w-80 mt-14 sm:h-screen min-h-80 mx-auto ">
        <img src="/img1.png" alt="" />
      </div>
    </div>
  );
};

export default Hero;
