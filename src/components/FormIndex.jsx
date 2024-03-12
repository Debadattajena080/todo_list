import React, { useState } from "react";
import CreateForm from "./CreateForm";
import EditForm from "./EditForm";
import TodoList from "./TodoList";

const FormIndex = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ title: "", desc: "" });
  const [showEdit, setShowEdit] = useState(false);
  console.log("showedit", showEdit);

  const addTodo = () => {
    if (newTodo.title.trim() !== "" && newTodo.desc.trim() !== "") {
      setTodos([...todos, newTodo]);
      setNewTodo({ title: "", desc: "" });
    }
  };

  const [showInfoModal, setShowInfoModal] = useState(false);
  const [showDeleteConfirmationModal, setShowDeleteConfirmationModal] =
    useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const openInfoModal = (todo) => {
    setSelectedTodo(todo);
    setShowInfoModal(true);
  };

  const closeInfoModal = () => {
    setShowInfoModal(false);
  };

  const openEditForm = (todo) => {
    setSelectedTodo(todo);
    setShowEdit(true);
  };

  const updateTodo = (updatedTodo) => {
    const updatedTodos = todos.map((todo) =>
      todo === selectedTodo ? updatedTodo : todo
    );
    setTodos(updatedTodos);
    setSelectedTodo(null);
    setShowEdit(false);
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
  };

  return (
    <>
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
          showInfoModal={showInfoModal}
          selectedTodo={selectedTodo}
        />
      </div>
    </>
  );
};

export default FormIndex;
