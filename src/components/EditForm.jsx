import { useState } from "react";

const EditForm = ({ selectedTodo, updateTodo }) => {
  const [editedTodo, setEditedTodo] = useState(selectedTodo);

  const handleTitleChange = (e) => {
    setEditedTodo({
      ...editedTodo,
      title: e.target.value,
    });
  };

  const handleDescChange = (e) => {
    setEditedTodo({
      ...editedTodo,
      desc: e.target.value,
    });
  };

  const handleUpdate = () => {
    updateTodo(editedTodo);
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
              value={editedTodo.title}
              onChange={handleTitleChange}
            />
          </div>
          <div className="mb-6">
            <textarea
              className="border-2 border-primaryBorder rounded w-full py-1 px-3 bg-transparent"
              id="desc"
              placeholder="Description..."
              value={editedTodo.desc}
              onChange={handleDescChange}
            />
          </div>
        </div>

        <button
          className="border-2 border-primaryBorder rounded-md ml-4 py-6 px-4 mt-1"
          onClick={handleUpdate}
        >
          <span className="text-primaryBorder text-md">Update</span>
        </button>
      </div>
    </>
  );
};

export default EditForm;
