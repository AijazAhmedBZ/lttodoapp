'use client'
import React, { useState } from 'react'
import { text } from 'stream/consumers'
import Image from 'next/image'
import { NewTodo } from '@/lib/drizzle'
const AddTodo = () => {
const [task, setTask] = useState<NewTodo>({
    task:"",
});


  return (
    <div>
      <form className="w-full flex gap-x-3">
        <input
          onChange={(e) => setTask({task: e.target.value})}
          className="rounded-full w-full py-3.5 px-5 border focus:outline-secondary"
          type="text"
        />
        <button className="p-4 shrink-0 rounded-full bg-gradient-to-b from from-primary to to-secondary">
          <Image src={"/vector.svg"} width={20} height={20} alt="vector" />
        </button>
      </form>
    </div>
  );
}

export default AddTodo