import { RecoilRoot } from "recoil";
import ItemCreator from "./components/ItemCreator";
import TodoList from "./components/TodoList";
import TodoFilter from "./components/TodoFilter";
import TodoStats from "./components/TodoStats";
import UserData from "./components/UserData";
import { Suspense } from "react";

function App() {
  return (
    <RecoilRoot>
      <Suspense fallback={<h1>Cargando...</h1>}>
        <UserData/>
        <TodoFilter />
        <TodoStats />
        <ItemCreator />
        <TodoList />
      </Suspense>
    </RecoilRoot>
  );
}

export default App;
