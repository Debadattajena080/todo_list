import React, { useState } from "react";
import { FaPlus } from "react-icons/fa6";
import TodoList from "./TodoList";

const Create = ({ setShowEditForm }) => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: "", desc: "" });

  const addTodo = () => {
    if (newTodo.title.trim() !== "" && newTodo.desc.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo({ title: "", desc: "" });
    }
  };

  return (
    <>
      <div className="flex items-center justify-center mx-4">
        <div className="w-full max-w-lg">
          <div className="mb-1">
            <input
              className="border-2 rounded w-full py-1 px-3 mt-8 border-primaryBorder bg-transparent"
              id="title"
              type="text"
              placeholder="Title..."
              value={newTodo.title}
              onChange={(e) =>
                setNewTodo({ ...newTodo, title: e.target.value })
              }
            />
          </div>
          <div className="mb-6">
            <input
              className="border-2 border-primaryBorder rounded w-full py-1 px-3 bg-transparent"
              id="desc"
              type="text"
              placeholder="Input..."
              value={newTodo.desc}
              onChange={(e) => setNewTodo({ ...newTodo, desc: e.target.value })}
            />
          </div>
        </div>

        <button
          className="border-2 border-primaryBorder rounded-md ml-4 p-4 mt-1"
          onClick={addTodo}
        >
          <FaPlus className="text-primaryBorder text-4xl" />
        </button>
      </div>
      <div className="mx-auto flex justify-center mt-8">
        <TodoList
          todos={todos}
          setTodos={setTodos}
          setShowEditForm={setShowEditForm}
        />
      </div>
    </>
  );
};

export default Create;
