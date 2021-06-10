import React from 'react'
// import { useRecoilState } from 'recoil'
// import { todoListState } from '../atom'

const TodoItem = ({id,text,isCompleted}) => {
    // const {changeItem,setChangeItem}=useRecoilState(todoListState)
    const onChangeTodoItem = (event)=>{
        
    }
    return (
        <div>
            <input value={text} onChange={onChangeTodoItem}/>
            <input type="checkbox" checked={isCompleted}/>
            <button>X</button>
        </div>
    )
}

export default TodoItem