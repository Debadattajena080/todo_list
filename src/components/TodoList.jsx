import React, { useState, useEffect } from "react";
import { FaInfo } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const truncateText = (text, maxLength) => {
  const truncatedText =
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  return truncatedText.charAt(0).toUpperCase() + truncatedText.slice(1);
};

const TodoList = ({
  todos,
  openInfoModal,
  openEditForm,
  openDeleteConfirmationModal,
  closeDeleteConfirmationModal,
  showDeleteConfirmationModal,
  handleDelete,
  selectedTodo,
  isEditFormOpen,
}) => {
  const [showButtons, setShowButtons] = useState([]);

  // Initialize showButtons array
  useEffect(() => {
    setShowButtons(new Array(todos.length).fill(false));
  }, [todos]);

  // Function to toggle showButtons for a specific index
  const toggleShowButtons = (index) => {
    const updatedShowButtons = [...showButtons];
    updatedShowButtons[index] = !updatedShowButtons[index];
    setShowButtons(updatedShowButtons);
  };

  return (
    <div className="m-4 sm:h-[40vh] sm:w-[70vw] w-full h-auto sm:border-2 sm:border-primaryBorder sm:p-4 sm:rounded-md sm:bg-secondaryBg">
      {showDeleteConfirmationModal && selectedTodo && (
        <DeleteConfirmationModal
          todo={selectedTodo}
          handleDelete={handleDelete}
          closeDeleteConfirmationModal={closeDeleteConfirmationModal}
        />
      )}

      {todos.length === 0 ? (
        <div className="flex flex-col justify-between items-center sm:mt-24">
          <hr className="border-t-2 border-primaryBorder mt-2 w-16 ml-2 border rounded-full" />
          <p className="text-2xl">No tasks</p>
          <hr className="border-t-2 border-primaryBorder my-2 w-16 ml-2 border rounded-full" />
        </div>
      ) : (
        <div className="flex flex-wrap items-center sm:ml-4">
          {todos.map((todo, index) => (
            <div
              key={index}
              className="border-2 rounded border-primaryBorder m-2 w-full sm:w-80"
            >
              <div className="flex justify-between">
                <div className="p-2">
                  <h1 className="text-2xl">{truncateText(todo.title, 10)}</h1>
                  <p className="truncate text-sm">
                    {truncateText(todo.desc, 25)}
                  </p>
                </div>
                <div className="flex justify-between items-center space-x-2 mr-2">
                  {showButtons[index] ? (
                    <>
                      <button
                        className={`border-2 border-primaryBorder rounded-md bg-primaryBg hover:bg-primaryBorder ${
                          isEditFormOpen ? "opacity-50 disabled" : ""
                        }`}
                        onClick={() => openEditForm(todo)}
                        disabled={isEditFormOpen}
                      >
                        <FaPen className=" text-xl p-1" />
                      </button>
                      <button
                        className={`border-2 border-primaryBorder rounded-md bg-primaryBg hover:bg-primaryBorder ${
                          isEditFormOpen ? "opacity-50 disabled" : ""
                        }`}
                        onClick={() => openDeleteConfirmationModal(todo)}
                        disabled={isEditFormOpen}
                      >
                        <RxCross2 className=" text-xl p-1" />
                      </button>
                    </>
                  ) : (
                    <button
                      className="border-2 border-primaryBorder rounded-md hover:bg-primaryBorder"
                      onClick={() => toggleShowButtons(index)}
                    >
                      <FaInfo className=" text-xl p-1" />
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TodoList;
