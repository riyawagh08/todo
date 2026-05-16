"use client";

import { useState } from "react";

export default function Home() {
  const [task, setTask] = useState("");

  const [tasks, setTasks] = useState<
    { text: string; completed: boolean }[]
  >([]);

  const addTask = () => {
    if (task.trim() === "") return;

    setTasks([
      ...tasks,
      {
        text: task,
        completed: false,
      },
    ]);

    setTask("");
  };

  const deleteTask = (index: number) => {
    const updatedTasks = tasks.filter(
      (_, i) => i !== index
    );

    setTasks(updatedTasks);
  };

  const toggleTask = (index: number) => {
    const updatedTasks = [...tasks];

    updatedTasks[index].completed =
      !updatedTasks[index].completed;

    setTasks(updatedTasks);
  };

  const editTask = (index: number) => {
    const newTask = prompt(
      "Edit task",
      tasks[index].text
    );

    if (newTask) {
      const updatedTasks = [...tasks];

      updatedTasks[index].text = newTask;

      setTasks(updatedTasks);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 via-black to-indigo-900 text-white flex flex-col items-center p-10">

      <h1 className="text-5xl font-extrabold mb-8 bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
   To-Do List ✨✨
</h1>

      <div className="flex gap-2 mb-6">

        <input
          type="text"
          placeholder="Enter task..."
          value={task}
          onChange={(e) =>
            setTask(e.target.value)
          }
className="border border-white/20 bg-white/10 backdrop-blur-md text-white placeholder-gray-300 p-4 rounded-2xl w-72 outline-none focus:ring-2 focus:ring-pink-400"        />

        <button
          onClick={addTask}
          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg"
        >
          Add
        </button>

      </div>

      <ul className="w-full max-w-md">

        {tasks.map((t, index) => (

          <li
  key={index}
  className="bg-white/10 backdrop-blur-md border border-white/20 text-white p-4 rounded-2xl mb-3 flex items-center justify-between shadow-lg"
>

            <div className="flex items-center gap-3">

              <input
                type="checkbox"
                checked={t.completed}
                onChange={() =>
                  toggleTask(index)
                }
              />

              <span
  className={`break-words ${
    t.completed
      ? "line-through text-gray-400"
      : ""
  }`}
  >
                {t.text}
              </span>

            </div>

<div className="flex gap-2 items-center mt-4">

  {t.completed ? (

    <p className="text-green-400 font-semibold">
      Task Completed 🎉
    </p>

  ) : (

    <>
      <button
        onClick={() =>
          editTask(index)
        }
       className="bg-blue-500 hover:bg-blue-600 transition-all duration-300 hover:scale-105 text-white px-4 py-2 rounded-2xl"
      >
        Edit
      </button>

      <button
        onClick={() =>
          deleteTask(index)
        }
        className="bg-red-500 hover:bg-red-600 transition-all duration-300 hover:scale-105 text-white px-4 py-2 rounded-2xl"
      >
        Delete
      </button>
    </>

  )}

</div>

          </li>

        ))}

      </ul>

    </div>
  );
}