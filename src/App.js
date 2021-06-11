import { RecoilRoot } from "recoil";
import ItemCreator from "./components/ItemCreator";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import TodoStats from "./components/TodoStats";

function App() {
  return (
    <RecoilRoot>
      <TodoFilter />
      <TodoStats />
      <ItemCreator />
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
