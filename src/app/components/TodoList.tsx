import React from "react";
import { Todo } from "@/lib/drizzle";

const getData = async () => {
  try {
    const res = await fetch("http://127.0.0.1:3000/api/todo");
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
    <>
      {res.data.map((item) => {
        return (
          <div className="bg-gray-600 py-4 px-4 flex items-center gap-x-3 shadow rounded-lg my-3">
            {/* Circle */}
            <div className="h-3 w-3 bg-secondary rounded-full">
              {/* Task Title */}
              <p className="text-lg font-medium">{item.task}</p>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default TodoList;
