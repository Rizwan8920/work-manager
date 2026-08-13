"use client";

import { createTask } from "@/services/taskService";
import React, { useState } from "react";
import { toast } from "react-toastify";

const AddTask = () => {
  const [task, setTask] = useState({
    title: "",
    description: "",
    userId: "664f940c778395f29d8f1add",
  });

  const handleAddTask = async (event) => {
    event.preventDefault();
    console.log(task);

    try {
      const result = await createTask(task);
      console.log(result);
      toast.success("Task added", {
        position: "top-right",
      });

      setTask({
        title: "",
        description: "",
        userId: "664f940c778395f29d8f1add",
      });
    } catch (error) {
      console.log(error);
      toast.error("Failed to add task", {
        position: "top-right",
      });
    }
  };

  return (
    <div className="grid grid-cols-12 justify-center">
      <div className="col-span-6 col-start-4 p-5 ">
        <h1 className="text-3xl">Add your task here !!</h1>

        <form action="#!" onSubmit={handleAddTask}>
          <div>
            <label
              htmlFor="task_title"
              className="block text-sm font-medium mb-2"
            >
              Title
            </label>
            <input
              type="text"
              className="w-full p-3 rounded bg-gray-300 focus:ring-gray-400 border border-gray-400"
              id="task_title"
              name="task_title"
              onChange={(event) => {
                setTask({
                  ...task,
                  title: event.target.value,
                });
              }}
              value={task.title}
            />
          </div>
          <div className="mt-5">
            <label
              htmlFor="task_description"
              className="block text-sm font-medium mb-2"
            >
              Description
            </label>
            <textarea
              type="text"
              className="w-full p-3 rounded bg-gray-300 focus:ring-gray-400 border border-gray-400"
              id="task_description"
              name="task_description"
              onChange={(event) => {
                setTask({
                  ...task,
                  description: event.target.value,
                });
              }}
              value={task.description}
            />
          </div>
          <div className="mt-5 flex justify-center">
            <button className="bg-blue-600 py-2 px-2 rounded-lg hover:bg-blue-800">
              Add Todo
            </button>
            <button className="bg-red-600 py-2 px-2 rounded-lg hover:bg-red-800 ms-3">
              Clear
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddTask;
