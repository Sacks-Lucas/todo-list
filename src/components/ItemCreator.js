import React, { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { todoListState } from '../atom'

let id=0

const ItemCreator = () => {
    const [text,setText]=useState('')
    const setNewTodo= useSetRecoilState(todoListState)
    const onChangeText= (event) =>{
        setText(event.target.value)
    }
    const onClick= () =>{
        setNewTodo(oldTodoList=>{
            return [...oldTodoList,
            {
                id:id++,
                text,
                isCompleted:false
            }]
        })
        setText('')
    }
    return (
        <div>
            <input value={text} onChange={onChangeText}/>
            <button onClick={onClick}>Agregar</button>
        </div>
    )
}

export default ItemCreator