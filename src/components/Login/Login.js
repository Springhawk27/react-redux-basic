import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../features/user"


function Login() {

    const dispatch = useDispatch();
    const themeColor = useSelector((state) => state.theme.value);


    return (
        <div style={{ color: themeColor }}>
            <button onClick={() => {
                dispatch(login({ name: "Sajjad Mahmud", age: 27, email: "sajjad0mahmud@gmail.com" }))
            }}>Login</button>
            <button onClick={() => {
                dispatch(logout())
            }}>Logout</button>
        </div >
    )
}

export default Login