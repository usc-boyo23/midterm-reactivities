function DisplayContacts(props) {
  const handleUpdateContact = (index, contact) => () => {
    props.setUpdateContact({ index, ...contact })
    props.setIsUpdate(true)
  }

  const handleDeleteContact = (id) => () =>
    props.setContacts((contacts) =>
      contacts.filter((contact) => contact.id !== id)
    )

  const isOpen = props.isAdd || props.isUpdate

  return (
    <div
      style={{
        width: 960,
        display: !isOpen ? 'flex' : 'none',
        flexFlow: 'column wrap',
      }}
    >
      <h1>Contact List</h1>
      <button onClick={() => props.setIsAdd(true)}>Add a contact</button>
      <table>
        <thead>
          <tr style={{ textTransform: 'uppercase' }}>
            <th style={{ width: '15%', textAlign: 'center' }}>Id</th>
            <th style={{ width: '15%', textAlign: 'center' }}>Name</th>
            <th style={{ width: '15%', textAlign: 'center' }}>Age</th>
            <th style={{ width: '15%', textAlign: 'center' }}>Course</th>
            <th style={{ flex: 1, textAlign: 'center' }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {props.contacts.map((contact, index) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.name}</td>
              <td>{contact.age}</td>
              <td>{contact.course}</td>
              <td style={{ width: '20%', textAlign: 'center' }}>
                <button
                  style={{ width: 100, margin: 4 }}
                  onClick={handleUpdateContact(index, contact)}
                >
                  Update
                </button>
                <button
                  style={{ width: 100, margin: 4 }}
                  onClick={handleDeleteContact(contact.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default DisplayContacts
