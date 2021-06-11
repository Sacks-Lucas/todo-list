import React from 'react'
import { useRecoilValue } from 'recoil'
import { todoStatsSelector } from '../selectors'

const TodoStats = () => {
    const {total,toDo,notTodo,completePercentage}=useRecoilValue(todoStatsSelector)
    return (
        <div>
            <span>Tareas totales: {total}</span><br/>
            <span>Tareas por hacer: {toDo}</span><br/>
            <span>Tareas realizadas: {notTodo}</span><br/>
            <span>Progreso: {completePercentage *100}%</span>
        </div>
    )
}

export default TodoStats