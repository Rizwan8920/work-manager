"use client";

import React, { useContext } from "react";
import Link from "next/link";
import UserContext from "@/context/userContext";
import { toast } from "react-toastify";

const CustomNavbar = () => {
  const { user, setUser } = useContext(UserContext);

  async function doLogout() {
    try {
      const result = await LogOut();
      console.log(result);
      setUser(undefined);
    } catch (error) {
      console.log(error);
      toast.error("Falied to logout");
    }
  }
  return (
    <nav className="bg-blue-600 h-14 py-2 px-4 flex justify-between items-center">
      <div className="brand">
        <h1 className="text-3xl font-semibold">
          <a href="#!">Work Manager</a>
        </h1>
      </div>
      <div>
        <ul className="flex space-x-5">
          <li>
            <Link href={"/"} className="hover:text-blue-200">
              Home
            </Link>
          </li>
          <li>
            <Link href={"/add-task"} className="hover:text-blue-200">
              Add Task
            </Link>
          </li>
          <li>
            <Link href={"/show-tasks"} className="hover:text-blue-200">
              Show Tasks
            </Link>
          </li>
        </ul>
      </div>
      <div>
        <ul className="flex space-x-5">
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <Link href={"/signup"}>Sign up</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CustomNavbar;
