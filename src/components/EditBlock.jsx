/* eslint-disable react/prop-types */
import { RxCross2 } from "react-icons/rx";

function EditBlock({
  setShow,
  selectedItem,
  setSelectedItem,
  selectedId,
  lists,
  setList,
}) {
  // function to handleEdit
  function handleSubmit(e) {
    e.preventDefault();
    if (!selectedItem) {
      setShow(false);
      return;
    }
    const newList = lists.map((list) => {
      if (list.id === selectedId) {
        list.work = selectedItem;
      }
      return list;
    });
    setList(newList);
    setShow(false);
  }
  return (
    <div className="absolute box-border top-0 h-full w-full bg-black/70 flex justify-center items-center">
      <div className="bg-slate-300 w-[60%] sm:w-[55%] md:w-[50%] lg:w-[30rem] flex flex-col justify-center items-center p-1 lg:p-2 transition-all">
        <button
          className="self-end bg-red-400 hover:bg-red-600 m-1 p-[1px] rounded-sm transition-colors"
          onClick={() => setShow(false)}
        >
          <RxCross2 />
        </button>
        <form
          onSubmit={(e) => handleSubmit(e)}
          className="w-[85%] flex flex-col my-4 gap-4"
        >
          <input
            type="text"
            className="pl-2 py-0.5 rounded-md text-black"
            value={selectedItem}
            onChange={(e) => setSelectedItem(e.target.value)}
          />
          <button
            type="submit"
            className="self-end w-fit bg-slate-600/50  px-4 py-0.5 rounded-md hover:bg-slate-600 transition-all"
          >
            Edit
          </button>
        </form>
      </div>
    </div>
  );
}

export default EditBlock;
