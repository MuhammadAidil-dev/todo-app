const ModalConfirm = () => {
  return (
    <div className="hidden fixed flex justify-center items-center inset-y-0 inset-x-0 bg-black bg-opacity-20">
      <div className="bg-white w-[80%] p-4 rounded-sm">
        <div className="flex flex-col">
          <h4>Apa kamu yakin ingin menghapus task ini</h4>
          <div className="flex">
            <button>Confirm</button>
            <button>Cancel</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalConfirm;
