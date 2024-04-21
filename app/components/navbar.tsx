import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="w-full flex items-center h-[10vh]">
      <div className="container p-0 flex justify-between items-center px-5 sm:px-3">
        <h1 className="text-2xl font-bold">
          <Link href={"/"}>TalentLockr.</Link>
        </h1>

        <div className="hidden lg:flex justify-center items-center gap-x-5 text-lg font-medium">
          <Link href={"/"}>About</Link>
          <Link href={"/"}>Profile</Link>
          <Link href={"/"}>Features</Link>
          <Link href={"/"}>Testimonials</Link>
        </div>

        <div className="flex gap-x-3">
          <Button>Log in</Button>
          <Button variant={"secondary"}>Sign in</Button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
