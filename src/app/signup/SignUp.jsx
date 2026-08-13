"use client";

import { CreateUser } from "@/services/userService";
import React, { useState } from "react";
import { toast } from "react-toastify";

const SignUp = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  async function doSignUp(event) {
    event.preventDefault();
    console.log(user);

    try {
      const result = await CreateUser(user);
      console.log(result);
      toast.success("User created successfully", {
        position: "top-right",
      });
      setUser({
        name: "",
        email: "",
        password: "",
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to create user", {
        position: "top-right",
      });
    }
  }
  return (
    <div className="grid grid-cols-12 mt-10">
      <div className="col-span-4 col-start-5">
        <div className="py-5">
          <h1 className="text-3xl text-center">Sign up here</h1>
          <form action="#!" onSubmit={doSignUp} className="mt-5">
            <div className="mt-3">
              <label
                htmlFor="user_name"
                className="block text-sm font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="user_name"
                placeholder="Full name"
                className="w-full p-3 rounded bg-gray-300 focus:ring-gray-400 border border-gray-400"
                name="user_name"
                onChange={(event) => {
                  setUser({
                    ...user,
                    name: event.target.value,
                  });
                }}
                value={user.name}
              />
            </div>
            <div className="mt-5">
              <label
                htmlFor="user_email"
                className="block text-sm font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="user_email"
                placeholder="Email"
                className="w-full p-3 rounded bg-gray-300 focus:ring-gray-400 border border-gray-400"
                name="user_email"
                onChange={(event) => {
                  setUser({
                    ...user,
                    email: event.target.value,
                  });
                }}
                value={user.email}
              />
            </div>
            <div className="mt-5">
              <label
                htmlFor="user_password"
                className="block text-sm font-medium mb-2"
              >
                Password
              </label>
              <input
                type="password"
                id="user_password"
                placeholder="Password"
                className="w-full p-3 rounded bg-gray-300 focus:ring-gray-400 border border-gray-400"
                name="user_password"
                onChange={(event) => {
                  setUser({
                    ...user,
                    password: event.target.value,
                  });
                }}
                value={user.password}
              />
            </div>
            <div className="mt-5 text-center">
              <button
                type="submit"
                className="px-2 py-3 bg-green-600 rounded hover:bg-green-400"
              >
                Register
              </button>
              <button className="ms-3 px-2 py-3 bg-orange-600 rounded hover:bg-orange-400">
                Reset
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
