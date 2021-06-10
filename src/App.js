import { RecoilRoot } from "recoil";
import ItemCreator from "./components/ItemCreator";
import TodoList from "./components/TodoList";

function App() {
  return (
    <RecoilRoot>
      <ItemCreator />
      <TodoList />
    </RecoilRoot>
  );
}

export default App;
