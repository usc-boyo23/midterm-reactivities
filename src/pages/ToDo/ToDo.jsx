import { useState } from 'react'
import { v4 as uuid } from 'uuid'
import DisplayTodos from './DisplayTodos'

function ToDo() {
  const [input, setInput] = useState('')
  const [todos, setTodos] = useState([])

  function handleInput(event) {
    setInput({ id: uuid(), todo: event.target.value })
  }

  function addTodo(event) {
    if (event.key === 'Enter' && input !== '') {
      setTodos((prev) => [...prev, input])
      setInput('')
      event.target.value = ''
    }
  }

  return (
    <div>
      <h1>To-do List</h1>
      <div style={{ width: 854, display: 'flex', flexFlow: 'column wrap' }}>
        <input
          type="text"
          placeholder="Enter a to-do"
          onChange={handleInput}
          onKeyDown={addTodo}
        />
        <DisplayTodos todos={todos} setTodos={setTodos} />
      </div>
    </div>
  )
}

export default ToDo
