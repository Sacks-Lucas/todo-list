import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoListState } from '../atom'
import TodoItem from './TodoItem'


const TodoList = () => {
    const todos=useRecoilValue(todoListState)
    return (
        <div>
            {
                todos.map(item => <TodoItem key={item.id} {...item}/>)
            }
        </div>
    )
}

export default TodoList