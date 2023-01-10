import React from 'react'

const Body = () => {

    const x = 10;
    const y = 5;

    return (
        <div>
            <h1>This is body</h1>
            <h5>2+2={2 + 2}</h5>
            <h5>{x > y ? x : y}</h5>
            <h5>{x > y ? 'x is big' : 'y is big'}</h5>
            <h5>{x > y ? `${x} is big` : `${y} is big`}</h5>
        </div>
    )
}

export default Body