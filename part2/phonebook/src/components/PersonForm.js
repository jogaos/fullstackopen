import React from 'react'

const PersonForm = ({ submit, newName, nameHandle, newNumber, numberHandle }) =>
    <>
        <form onSubmit={submit}>
            <div>
                name:
                <input
                    value={newName}
                    onChange={nameHandle} />
            </div>
            <div>
                number:
                <input
                    value={newNumber}
                    onChange={numberHandle} />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    </>

export default PersonForm
