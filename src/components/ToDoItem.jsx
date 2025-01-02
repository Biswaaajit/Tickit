import { FaRegEdit } from "react-icons/fa";
import { LuDiamond } from "react-icons/lu";
import { MdOutlineDoneOutline } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";

/* eslint-disable react/prop-types */
function ToDoItem({
  list,
  setList,
  lists,
  setShow,
  setSelectedId,
  setSelectedItem,
}) {
  const { work, done, id } = list;

  // function  for marking done
  function handleDone(id) {
    const newData = lists.map((list) => {
      if (list.id === id) {
        list.done = !list.done;
      }
      return list;
    });
    setList(newData);
  }

  //function to remove an item
  function handleRemove(id) {
    const newData = lists.filter((list) => list.id !== id);
    setList(newData);
  }

  //function to handle editing of item
  function handleEdit(id, work) {
    setSelectedId(id);
    setSelectedItem(work);
    setShow(true);
  }
  return (
    <div
      className={`flex items-center gap-5 w-fit     px-3 ${
        done ? "text-slate-600" : "text-slate-100"
      }`}
    >
      <p>
        <LuDiamond
          className="text-slate-500 self-center
       "
        />
      </p>
      <p className="text-[4vw] sm:text-xl  capitalize">{work}</p>

      <div className="flex items-center gap-3">
        <Btn click={() => handleEdit(id, work)}>
          <FaRegEdit />
        </Btn>
        <Btn click={() => handleDone(id)}>
          <MdOutlineDoneOutline className={`${done ? "text-green-600" : ""}`} />
        </Btn>
        <Btn click={() => handleRemove(id)}>
          <RxCross2 className="text-red-600" />
        </Btn>
      </div>
    </div>
  );
}
function Btn({ children, click }) {
  return (
    <button onClick={click} className="text-2xl">
      {children}
    </button>
  );
}
export default ToDoItem;
