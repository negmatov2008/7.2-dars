import React, { useEffect, useRef } from "react";
import TodoList from "./TodoList";
import { useDispatch, useSelector } from "react-redux";
import { addTodo, inpTodo } from "../redux/TodoSclicce";

function Todo() {
  const dispitch = useDispatch();
  const inp = useRef();
  const isIt = useSelector((ombor) => ombor.isTodo);
  const input = useSelector((ombor) => ombor.input);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTodo = {
      id: Math.random() * 10000,
      text: inp.current.value,
      isComoplate: false,
    };

    dispitch(addTodo(newTodo));
    inp.current.value = "";
  };

  return (
    <div className="max-w-[50%]  mt-[10%] mx-auto flex  flex-col gap-6">
      <form onSubmit={handleSubmit} className="mx-auto max-w-[50%]">
        <input
          ref={inp}
          type="text"
          className="w-full rounded-lg px-3  py-3 bg-slate-200 text-xl font-simebold"
          placeholder="Text"
        />
      </form>
      <TodoList></TodoList>
    </div>
  );
}

export default Todo;
