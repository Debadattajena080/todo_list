import React from "react";

const ViewModal = ({ title, desc, closeModal }) => {
  return (
    <div
      className="relative sm:bottom-0 z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div className="fixed inset-0 bg-primaryBg bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div className="relative sm:top-12 bottom-80 transform overflow-hidden rounded-lg bg-primaryBg border border-primaryBorder text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
            <div className="bg-secondaryBg  px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
              <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <h3
                    className="text-2xl font-semibold leading-6"
                    id="modal-title"
                  >
                    {title}
                  </h3>
                  <div className="mt-2">
                    <p className="text-sm">{desc}</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-secondaryBg px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
              <button
                type="button"
                className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewModal;
