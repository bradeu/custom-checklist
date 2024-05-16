import React from 'react'
import AddTodoForm from '../components/todo/AddTodoForm'
import TodoItem from '../components/todo/TodoItem'
import TodoList from '../components/todo/TodoList'

export default function TodoContainer() {
  return (
    <>
    <div>TodoContainer</div>
    <AddTodoForm/>
    <TodoItem/>
    <TodoList/>
    </>
  )
}
