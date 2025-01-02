import { useState } from "react";
import datas from "../utils/data";
import ToDoItem from "./ToDoItem";
import EditBlock from "./EditBlock";

function ToDoList() {
  const [lists, setList] = useState(datas);
  const [item, setItem] = useState("");
  const [show, setShow] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedId, setSelectedId] = useState(null);

  // function to handle new data
  function handleSubmit(e) {
    e.preventDefault();
    if (!item) return;
    let newId = lists.length === 0 ? 1 : lists[lists.length - 1].id + 1;
    let newData = {
      id: newId,
      work: item,
      done: false,
    };
    let newList = [...lists, newData];
    setList(newList);
    setItem("");
  }

  return (
    <div className="relative grow flex">
      <div className="w-full space-y-12 md:space-y-20">
        <form
          className="flex justify-center items-center gap-2"
          onSubmit={(e) => handleSubmit(e)}
        >
          <input
            type="text"
            value={item}
            onChange={(e) => setItem(e.target.value)}
            className="bg-transparent border-2 border-slate-600 rounded-md w-[50%] sm:w-[43%] md:w-[35%] lg:w-[30%] focus:outline-none focus:shadow-md hover:border-slate-300 focus:border-slate-300 pl-1 md:pl-2 py-[1px] md:py-1 transition-all"
          />
          <button
            type="submit"
            className="bg-green-700 px-3 py-[1px] md:px-5 md:py-1 rounded-md hover:bg-green-600 transition-all"
          >
            Add
          </button>
        </form>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 md:gap-y-12 xl:gap-y-14  w-full lg:w-[90%] xl:w-[85%] mx-auto transition-all">
          {lists.map((list) => (
            <ToDoItem
              key={list.id}
              list={list}
              setList={setList}
              lists={lists}
              setShow={setShow}
              setSelectedId={setSelectedId}
              setSelectedItem={setSelectedItem}
            />
          ))}
        </div>
      </div>
      {show && (
        <EditBlock
          setShow={setShow}
          selectedItem={selectedItem}
          setSelectedItem={setSelectedItem}
          selectedId={selectedId}
          lists={lists}
          setList={setList}
        />
      )}
    </div>
  );
}

export default ToDoList;
