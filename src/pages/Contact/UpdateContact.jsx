import { useRef } from 'react'

function UpdateContact(props) {
  const inputRefs = useRef({})

  const handleChange = (field, value) => {
    props.setUpdateContact({ ...props.updateContact, [field]: value })
  }

  const handleUpdateContact = () => {
    if (
      !props.updateContact.id ||
      !props.updateContact.name ||
      !props.updateContact.age ||
      !props.updateContact.course
    ) {
      alert('Please fill out all fields.')
      return
    }

    if (
      props.updateContact.id != props.contacts[props.updateContact.index].id &&
      props.contacts.some((contact) => contact.id == props.updateContact.id)
    ) {
      alert('ID already exists. Please choose a different ID.')
      return
    }

    const updatedContacts = [...props.contacts]
    updatedContacts[props.updateContact.index] = props.updateContact

    props.setContacts(updatedContacts)
    props.setIsUpdate(false)
  }

  const renderInput = (field) => (
    <>
      <label htmlFor={`update${field}`}>Update {field}: </label>
      <input
        type={field === 'id' ? 'number' : 'text'}
        id={`update${field}`}
        value={props.updateContact[field]}
        ref={(input) => (inputRefs.current[field] = input)}
        onChange={(event) => handleChange(field, event.target.value)}
      />
      <hr />
    </>
  )

  return (
    <dialog
      open={props.isUpdate}
      style={{
        margin: 0,
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 9999,
      }}
    >
      <div>
        {renderInput('id')}
        {renderInput('name')}
        {renderInput('age')}
        {renderInput('course')}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button style={{ width: 100, margin: 4 }} onClick={handleUpdateContact}>
          Update
        </button>
        <button
          style={{ width: 100, margin: 4 }}
          onClick={() => props.setIsUpdate(false)}
        >
          Cancel
        </button>
      </div>
    </dialog>
  )
}

export default UpdateContact
