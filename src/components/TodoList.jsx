import { FaInfo } from "react-icons/fa";
import { FaPen } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import ViewModal from "./ViewModal";
import DeleteConfirmationModal from "./DeleteConfirmationModal";

const truncateText = (text, maxLength) => {
  const truncatedText =
    text.length > maxLength ? text.substring(0, maxLength) + "..." : text;
  return truncatedText.charAt(0).toUpperCase() + truncatedText.slice(1);
};

const TodoList = ({
  todos,
  openInfoModal,
  closeInfoModal,
  openEditForm,
  openDeleteConfirmationModal,
  closeDeleteConfirmationModal,
  showDeleteConfirmationModal,
  handleDelete,
  showInfoModal,
  selectedTodo,
}) => {
  return (
    <div className="m-4 sm:h-[40vh] sm:w-[70vw] w-full h-auto sm:border-2 sm:border-primaryBorder p-4 sm:rounded-md sm:bg-secondaryBg">
      {showInfoModal && selectedTodo && (
        <ViewModal
          title={selectedTodo.title}
          desc={selectedTodo.desc}
          closeModal={closeInfoModal}
        />
      )}
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
              className="bg-primaryBg border-2 rounded border-primaryBorder m-2 w-80 "
            >
              <div className="flex justify-between">
                <div className="p-2">
                  <h1 className="text-2xl">{truncateText(todo.title, 10)}</h1>
                  <p className="truncate text-sm">
                    {truncateText(todo.desc, 25)}
                  </p>
                </div>
                <div className="flex justify-between items-center space-x-2 mr-2">
                  <button
                    className="border-2 border-primaryBorder rounded-md hover:bg-primaryBorder"
                    onClick={() => openInfoModal(todo)}
                  >
                    <FaInfo className=" text-xl p-1" />
                  </button>
                  <button
                    className="border-2 border-primaryBorder rounded-md hover:bg-primaryBorder"
                    onClick={() => openEditForm(todo)}
                  >
                    <FaPen className=" text-xl p-1" />
                  </button>
                  <button
                    className="border-2 border-primaryBorder rounded-md hover:bg-primaryBorder"
                    onClick={() => openDeleteConfirmationModal(todo)}
                  >
                    <RxCross2 className=" text-xl p-1" />
                  </button>
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
