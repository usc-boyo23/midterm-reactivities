import { useState, useEffect } from 'react'
import DisplayStudents from './DisplayStudents'

function Filter() {
  const [students, setStudents] = useState([])
  const [input, setInput] = useState('')

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/troy1129/jsonplaceholder/db')
      .then((response) => response.json())
      .then((json) => setStudents(json.data))
      .catch((error) => console.error(error))
  }, [])

  function handleInput(event) {
    setInput(event.target.value)
  }

  return (
    <div>
      <h1>Filter</h1>
      <div style={{ width: 640, display: 'flex', flexFlow: 'column wrap' }}>
        <input
          type="number"
          min={0}
          max={99999999}
          placeholder="Type a Student's ID"
          onChange={handleInput}
        />
        <DisplayStudents
          students={students.filter(({ id }) =>
            id.toString().startsWith(input)
          )}
        />
      </div>
    </div>
  )
}

export default Filter
