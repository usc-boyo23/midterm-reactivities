import { useRef } from 'react'

function AddContact(props) {
  const inputRefs = useRef({})

  const handleAddContact = () => {
    const { id, name, age, course } = inputRefs.current

    if (!id.value || !name.value || !age.value || !course.value) {
      alert('Please fill out all fields.')
      return
    }

    if (props.contacts.some((contact) => contact.id === id.value)) {
      alert('ID already exists. Please choose a different ID.')
      return
    }

    const newContact = {
      id: id.value,
      name: name.value,
      age: age.value,
      course: course.value,
    }

    props.setContacts([...props.contacts, newContact])

    Object.values(inputRefs.current).forEach((ref) => {
      if (ref !== null) {
        ref.value = ''
      }
    })

    props.setIsAdd(false)
  }

  const renderInput = (field) => (
    <>
      <label htmlFor={`add${field.charAt(0).toUpperCase() + field.slice(1)}`}>
        {field.charAt(0).toUpperCase() + field.slice(1)}:{' '}
      </label>
      <input
        type={field === 'id' ? 'number' : 'text'}
        id={`add${field.charAt(0).toUpperCase() + field.slice(1)}`}
        ref={(input) => (inputRefs.current[field] = input)}
      />
      <hr />
    </>
  )

  return (
    <dialog
      open={props.isAdd}
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
        <button style={{ width: 100, margin: 4 }} onClick={handleAddContact}>
          Add
        </button>
        <button
          style={{ width: 100, margin: 4 }}
          onClick={() => props.setIsAdd(false)}
        >
          Cancel
        </button>
      </div>
    </dialog>
  )
}

export default AddContact
