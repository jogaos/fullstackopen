import React from 'react'

const Filter = ({filter, filterHandle}) =>
    <>
        <div>
            filter shown with:
            <input
                value={filter}
                onChange={filterHandle} />
        </div>
    </>

export default Filter