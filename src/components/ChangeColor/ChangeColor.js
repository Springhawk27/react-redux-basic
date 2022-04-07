import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeColor } from '../../features/theme'

function ChangeColor() {
    const [color, setColor] = useState("");
    const dispatch = useDispatch();
    const themeColor = useSelector((state) => state.theme.value);


    return (
        <div style={{ color: themeColor }}>
            <input type="text" name="" id="" onChange={(event) => {
                setColor(event.target.value)
            }} />
            <button onClick={() => {
                dispatch(changeColor(color))
            }}>Change Color</button>
        </div>
    )
}

export default ChangeColor