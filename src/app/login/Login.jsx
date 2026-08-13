"use client";

import { LoginUser } from "@/services/userService";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Login = () => {
  const router = useRouter();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const doLogin = async (event) => {
    event.preventDefault();
    console.log(user);

    try {
      const result = await LoginUser(user);
      console.log(result);
      toast.success("Logged in successfully",{
        position: "top-right"
      })

      // router.push("/profile/user");
    } catch (error) {
      console.log(error);
      toast.error("Error in login",{
        position: "top-right",
      })
    }
  };
  return (
    <div className="grid grid-cols-12 mt-10">
      <div className="col-span-4 col-start-5">
        <div className="py-5">
          <h1 className="text-3xl text-center">Login here</h1>
          <form action="#!" onSubmit={doLogin}>
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
                Submit
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

export default Login;
