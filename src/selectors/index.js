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

export const todoStatsSelector = selector({
    key:'todoStatsSelector',
    get:({get}) => {
        const list = get(todoListState)
        return {
            total:list.length,
            toDo:list.filter(item=>!item.isCompleted).length,
            notTodo:list.filter(item=>item.isCompleted).length,
            completePercentage:list.length === 0 ? 0 : list.filter(item=>item.isCompleted).length / list.length,
        }
    }
})