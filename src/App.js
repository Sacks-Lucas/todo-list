import { RecoilRoot } from "recoil";
import ItemCreator from "./components/ItemCreator";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";

function App() {
  return (
    <RecoilRoot>
      <TodoFilter />
      <ItemCreator />
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
