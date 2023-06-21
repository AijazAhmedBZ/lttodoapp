import React from "react";
import { Todo } from "@/lib/drizzle";

const getData = async () => {
  try {
    const res = await fetch("http://127.0.0.1:3000/api/todo", {
      method: "GET",
      cache: "no-store",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!res.ok) {
      throw new Error("Faild to fetch data");
    }
    const result = await res.json();
    return result;
  } catch (err) {
    console.log(err);
  }
};

const TodoList = async () => {
  const res: { data: Todo[] } = await getData();
  return (
    <div className="max-h-[376px] overflow-auto">
      {res.data.map((item) => {
        return (
          <div className="bg-white py-2 px-2 flex items-center gap-x-3 shadow rounded-full my-4">
            {/* Circle */}
            <div className="h-3 w-3 bg-secondary rounded-full"></div>
            {/* Task Title */}
            <p className="text-lg font-medium">{item.task}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TodoList;
