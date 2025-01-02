import Header from "./components/Header";
import ToDoList from "./components/ToDoList";
function App() {
  return (
    <div className="home flex flex-col w-full min-h-screen pb-12 gap-8 bg-[#122023]  text-white ">
      <Header />
      <ToDoList />
    </div>
  );
}

export default App;
