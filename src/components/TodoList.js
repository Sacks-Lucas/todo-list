import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoFilterSelector } from '../selectors'
import TodoItem from './TodoItem'


const TodoList = () => {
    const todos=useRecoilValue(todoFilterSelector)
    return (
        <div>
            {
                todos.map(item => <TodoItem key={item.id} {...item}/>)
            }
        </div>
    )
}

export default TodoList