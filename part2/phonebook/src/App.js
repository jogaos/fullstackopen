import React, { useState } from 'react'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import Filter from './components/Filter'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [filter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault();

    if (persons.find(person => person.name === newName)) {
      alert(`${newName} is already added to phonebook`)
    } else {
      setPersons(persons.concat([{ name: newName, number: newNumber }]))
    }
  }

  const handlePersonNameChanged = (event) => {
    setNewName(event.target.value)
  }

  const handlePersonNumberChanged = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChanged = (event) => {
    setNewFilter(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} filterHandle={handleFilterChanged} />
      <h3>add a new</h3>
      <PersonForm submit={addPerson}
        newName={newName} nameHandle={handlePersonNameChanged}
        newNumber={newNumber} numberHandle={handlePersonNumberChanged} />
      <h3>Numbers</h3>
      <Persons contacts={persons} filter={filter} />
    </div>

  )
}

export default App
