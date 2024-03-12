import React from "react";

const DeleteConfirmationModal = ({
  handleDelete,
  closeDeleteConfirmationModal,
}) => {
  return (
    <div
      className="relative z-10 "
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-primaryBg bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex  items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative top-72 transform overflow-hidden rounded-lg bg-primaryBg border border-primaryBorder text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-primaryBg  px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-center">
                <h3
                  className="text-2xl font-semibold leading-6 "
                  id="modal-title"
                >
                  Delete this task ?
                </h3>
              </div>
            </div>
            <div className="bg-primaryBg px-4 py-3 sm:flex sm:mx-auto justify-center items-center  mt-4 ml-5">
              <button
                type="button"
                className="mt-3 ml-2 inline-flex  justify-center rounded-md bg-secondaryBg px-5 py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-primaryBorder "
                onClick={closeDeleteConfirmationModal}
              >
                No
              </button>
              <button
                type="button"
                className="mt-3 inline-flex  justify-center rounded-md bg-secondaryBg px-5  py-2 text-sm font-semibold shadow-sm ring-1 ring-inset ring-primaryBorder ml-2"
                onClick={handleDelete}
              >
                Yes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;
