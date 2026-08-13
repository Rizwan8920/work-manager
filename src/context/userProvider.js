"use client";
import React, { useEffect, useState } from "react";
import UserContext from "./userContext";
import { toast } from "react-toastify";
import { CurrentUser } from "@/services/userService";

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(undefined);

  useEffect(() => {
    async function load() {
      try {
        console.log("--------------------------------before");
        const currentUser = await CurrentUser();
        console.log("--------------------------------");
        console.log(currentUser);
        setUser({ ...currentUser });
      } catch (error) {
        console.log(error);
        setUser(undefined);
        toast.error("error in loading user data", {
          position: "top-right",
        });
      }
    }

    load();
  }, []);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
