function DisplayStudents({ students }) {
  return (
    <table>
      <thead>
        <tr>
          <th style={{ width: '25%', textAlign: 'center' }}>ID</th>
          <th style={{ width: '25%', textAlign: 'center' }}>Name</th>
          <th style={{ width: '25%', textAlign: 'center' }}>Age</th>
          <th style={{ width: '25%', textAlign: 'center' }}>Course</th>
        </tr>
      </thead>
      <tbody>
        {students.map(({ id, name, age, course }) => (
          <tr key={id}>
            <td>{id}</td>
            <td>{name}</td>
            <td>{age}</td>
            <td>{course}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default DisplayStudents
