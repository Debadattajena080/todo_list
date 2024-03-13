import React, { useState } from "react";
import CreateForm from "./CreateForm";
import EditForm from "./EditForm";
import TodoList from "./TodoList";

const FormIndex = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: "", desc: "" });
  const [showEdit, setShowEdit] = useState(false);
  const [notification, setNotification] = useState("");
  const [showButton, setShowButton] = useState(false);
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] =
    useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);

  const addTodo = () => {
    if (newTodo.title.trim() !== "" && newTodo.desc.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo({ title: "", desc: "" });
      setNotification("Task added successfully");
      setTimeout(() => {
        setNotification("");
      }, 3000);
    }
  };

  const openInfoModal = (todo) => {
    setSelectedTodo(todo);
    setShowButton(true);
  };

  const closeInfoModal = () => {
    setShowButton(false);
  };

  const openEditForm = (todo) => {
    setSelectedTodo(todo);
    setShowEdit(true);
    setIsEditFormOpen(true);
  };

  const updateTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo === selectedTodo ? updatedTodo : todo
    );
    setTodos(updatedTodos);
    setSelectedTodo(null);
    setShowEdit(false);
    setIsEditFormOpen(false);
  };
  const openDeleteConfirmationModal = (todo) => {
    setSelectedTodo(todo);
    setShowDeleteConfirmationModal(true);
  };

  const closeDeleteConfirmationModal = () => {
    setShowDeleteConfirmationModal(false);
  };

  const handleDelete = () => {
    const updatedTodos = todos.filter((todo) => todo !== selectedTodo);
    setTodos(updatedTodos);
    closeDeleteConfirmationModal();
    setNotification("Task deleted successfully");
    setTimeout(() => {
      setNotification("");
    }, 3000);
  };

  return (
    <>
      {notification && (
        <div
          class="bg-teal-100 border border-red-400 text-teal-900 px-4 py-3 rounded absolute top-5 w-3/4 mx-2 sm:w-1/2 sm:ml-96 ml-12"
          role="alert"
        >
          <span class="block sm:inline">{notification}</span>
        </div>
      )}
      {!showEdit ? (
        <CreateForm
          todos={todos}
          setTodos={setTodos}
          newTodo={newTodo}
          setNewTodo={setNewTodo}
          addTodo={addTodo}
        />
      ) : (
        <EditForm selectedTodo={selectedTodo} updateTodo={updateTodo} />
      )}
      <div className="mx-auto flex justify-center mt-8">
        <TodoList
          todos={todos}
          openInfoModal={openInfoModal}
          closeInfoModal={closeInfoModal}
          openEditForm={openEditForm}
          openDeleteConfirmationModal={openDeleteConfirmationModal}
          closeDeleteConfirmationModal={closeDeleteConfirmationModal}
          showDeleteConfirmationModal={showDeleteConfirmationModal}
          handleDelete={handleDelete}
          showButton={showButton}
          selectedTodo={selectedTodo}
          isEditFormOpen={isEditFormOpen}
        />
      </div>
    </>
  );
};

export default FormIndex;
