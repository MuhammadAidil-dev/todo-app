const ModalConfirm = ({ isOpen, onCancel, onConfirm }) => {
  return (
    <div
      className={`fixed justify-center items-center inset-y-0 inset-x-0 bg-black bg-opacity-20 ${
        isOpen ? 'flex' : 'hidden'
      }`}
    >
      <div className="bg-white w-[80%] p-4 rounded-md sm:w-[500px]">
        <div className="flex flex-col items-center gap-4">
          <h4 className="text-lg font-semibold text-center">
            Apa kamu yakin ingin menghapus task ini?
          </h4>
          <div className="flex gap-2">
            <button
              onClick={onConfirm}
              className="px-4 py-2 bg-red-600 text-white rounded cursor-pointer hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500"
              aria-label="Hapus task"
            >
              Hapus
            </button>
            <button
              onClick={onCancel}
              className="px-4 py-2 bg-gray-200 text-gray-700 rounded cursor-pointer hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
              aria-label="Batal"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;
