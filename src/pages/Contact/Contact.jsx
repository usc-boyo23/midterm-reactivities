import { useState, useEffect } from 'react'
import DisplayContacts from './DisplayContacts'
import AddContact from './AddContact'
import UpdateContact from './UpdateContact'

function Contact() {
  const [contacts, setContacts] = useState([])
  const [updateContact, setUpdateContact] = useState({})
  const [isAdd, setIsAdd] = useState(false)
  const [isUpdate, setIsUpdate] = useState(false)

  useEffect(() => {
    fetch('https://my-json-server.typicode.com/troy1129/jsonplaceholder/db')
      .then((response) => response.json())
      .then((json) => setContacts(json.data))
      .catch((error) => console.error(error))
  }, [])

  return (
    <div>
      <AddContact
        isAdd={isAdd}
        setIsAdd={setIsAdd}
        contacts={contacts}
        setContacts={setContacts}
      />
      <DisplayContacts
        contacts={contacts}
        setContacts={setContacts}
        setUpdateContact={setUpdateContact}
        isAdd={isAdd}
        setIsAdd={setIsAdd}
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
      />
      <UpdateContact
        isUpdate={isUpdate}
        setIsUpdate={setIsUpdate}
        updateContact={updateContact}
        setUpdateContact={setUpdateContact}
        contacts={contacts}
        setContacts={setContacts}
      />
    </div>
  )
}

export default Contact
