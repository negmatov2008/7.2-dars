import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { delTood, editTodo } from "../redux/TodoSclicce";

function TodoList() {
  const dispatch = useDispatch();
  const Todos = useSelector((ombor) => ombor.todos);

  return (
    <div className="max-w-full p-4  flex flex-col  gap-2">
      {Todos.map((todo, i) => (
        <span
          className="flex gap-2 text-[#fff] relative items-center text-lg bg-slate-500 ml-[70px] max-w-[70%]  rounded p-3 font-semibold"
          key={todo.id}
        >
          {i + 1} {todo.text}
          <div className="absolute right-3 top-2 flex gap-1">
            <button
              onClick={() => dispatch(delTood(todo.id))}
              className="bg-slate-300   p-1 rounded px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="rgba(208,23,23,1)"
              >
                <path d="M17 6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6ZM18 8H6V20H18V8ZM9 11H11V17H9V11ZM13 11H15V17H13V11ZM9 4V6H15V4H9Z"></path>
              </svg>
            </button>
            <button
              onClick={() => dispatch(editTodo(todo.id))}
              className="bg-slate-300   p-1 rounded px-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="rgba(0,164,0,1)"
              >
                <path d="M5 18.89H6.41421L15.7279 9.57627L14.3137 8.16206L5 17.4758V18.89ZM21 20.89H3V16.6473L16.435 3.21231C16.8256 2.82179 17.4587 2.82179 17.8492 3.21231L20.6777 6.04074C21.0682 6.43126 21.0682 7.06443 20.6777 7.45495L9.24264 18.89H21V20.89ZM15.7279 6.74785L17.1421 8.16206L18.5563 6.74785L17.1421 5.33363L15.7279 6.74785Z"></path>
              </svg>
            </button>
          </div>
        </span>
      ))}
    </div>
  );
}

export default TodoList;
