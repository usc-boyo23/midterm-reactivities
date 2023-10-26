function DisplayStudents({ todos, setTodos }) {
  function deleteTodo(id) {
    return () => setTodos((todos) => todos.filter((todo) => todo.id !== id))
  }

  return (
    <table>
      <thead>
        <tr>
          <th style={{ textAlign: 'center' }}>To-dos</th>
          <th style={{ width: '20%', textAlign: 'center' }}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {todos.map(({ id, todo }) => (
          <tr key={id}>
            <td>{todo}</td>
            <td style={{ textAlign: 'center' }}>
              <button onClick={deleteTodo(id)}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DisplayStudents
