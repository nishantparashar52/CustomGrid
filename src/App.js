import React, { useState, useCallback, useEffect } from 'react';
import SelectBox from './components/SelectBox';
import gridJSON from './grid';

// function to get width
function getWidth(width) {
    if(!width) return;
    let finalWidth = '';
    let i = 0;
    do {
        finalWidth += "1fr ";
        i++;
    }
    while(i < width);
    return finalWidth;
}

function App() {
    const [layout, setLayout] = useState('layout1');
    const handleFn = useCallback(handleChange.bind(null));

    function handleChange(ev) {
        setLayout(ev.target.value);
    }
    return (
        <div>
            <SelectBox value={layout} handleChange={handleFn} data={Object.keys(gridJSON)}/>
            {/* <div onClick={() => setLayout(gridJSON.layout2)}>Switch</div> */}
            <div style={{display: 'grid', gridGap: "1rem", gridTemplateColumns: getWidth(gridJSON[layout].column)}}>
                {gridJSON[layout]?.data.map((item, index) => {
                    const { textToDisplay, color, bgColor, breakpoint  } = item;
                    return (
                    <div key={index} style={{color: color, backgroundColor: bgColor, gridColumnEnd: `span ${breakpoint}`, padding: '1.5rem', borderRadius: '1rem'}}>{textToDisplay}</div>   
                    )
                })}
            </div>
        </div>
    );
}
export default App;
