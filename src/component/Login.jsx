import React from 'react'

const Login = (props) => {
    return (
        <>
            <h3>Hi my name is {props.name}</h3>
            <h3>My age is {props.age}</h3>
            <h4>A random array</h4>
            <p>{props.array}</p>
        </>
    )
}

export default Login