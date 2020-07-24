import React from 'react';
import './Selectbox.scss';
function SelectBox({handleChange, name, value}) {
    return (
    <select value={value} onChange={handleChange} className="selectbox">
        <option value="layout1">Layout 1</option>
        <option value="layout2">Layout 2</option>
    </select>
    )
}
export default SelectBox;
