import { selector } from "recoil";
import { todoFilterState, todoListState } from "../atom";

export const todoFilterSelector = selector({
    key:'todoFilterSelector',
    get:({get}) =>{
        const list = get(todoListState)
        const filter= get(todoFilterState)
        switch (filter) {
            case 'done':
                return list.filter(item => item.isCompleted)
            case 'notDone':
                return list.filter(item => !item.isCompleted)
            default:
                return list;
        }
    }
})