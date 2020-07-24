import React from 'react';
import './Selectbox.scss';
function SelectBox({handleChange, name, value, data}) {
    return (
    <select value={value} onChange={handleChange} className="selectbox">
        {data.map((item,index) => {
            return (
            <option value={item} key={index}>{item}</option>
            )
        })}
    </select>
    )
}
export default SelectBox;
