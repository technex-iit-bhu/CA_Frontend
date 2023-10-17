import React from "react";
import Link from "next/link";
import Logo from "./Logo";
import Login from "./Login";
import Button from "./Button";

const Navbar = () => {
  return (
    <>
      <div className="flex min-h-screen w-full   ">
        <div className="flex w-11/12 max-w-maxContent  justify-between">
        <Logo/>
        <Button/>
        <Login/>
        </div>
      </div>
    </>
  );
};

export default Navbar;