import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeActiveFilter, clearCompleted, selectTodos } from '../redux/todos/todosSlice'


function ContentFooter() {
  const items = useSelector(selectTodos)
  const itemsLeft = items.filter((item)=> !item.completed).length
const dispatch = useDispatch()
  const activeFilter = useSelector((state)=> state.todos.activeFilter)
  console.log(items)
  console.log(itemsLeft)
  return (
    <footer className='footer'>
        <span className='todo-count'>
            <strong>{itemsLeft}{" "}</strong>
            {itemsLeft>1 ? "items left" : "item left"}
        </span>
        <ul className='filters'>
            <li>
                <a href="#/" className={activeFilter ==="all" ? "selected" : ""} onClick={()=>dispatch(changeActiveFilter("all"))}>All</a>
            </li>
            <li><a href="#/"  className={activeFilter ==="active" ? "selected" : ""} onClick={()=>dispatch(changeActiveFilter("active"))}>Active</a>
            </li>
            <li><a href="#/"  className={activeFilter ==="completed" ? "selected" : ""} onClick={()=>dispatch(changeActiveFilter("completed"))}>Completed</a>
            </li>

        </ul>
        <button className='clear-completed' onClick={()=>dispatch(clearCompleted())} >Clear completed</button>
    </footer>
  )
}

export default ContentFooter