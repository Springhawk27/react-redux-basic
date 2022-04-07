import React from 'react'
import { useDispatch } from "react-redux";
import { login } from "../../features/user"


function Login() {

    const dispatch = useDispatch();

    return (
        <div>
            <button onClick={() => {
                dispatch(login({ name: "Sajjad Mahmud", age: 27, email: "sajjad0mahmud@gmail.com" }))
            }}>Login</button>
        </div >
    )
}

export default Login