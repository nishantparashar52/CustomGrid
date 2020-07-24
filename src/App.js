import React, { useState, useCallback } from 'react';
import SelectBox from './components/SelectBox';
import gridJSON from './grid';
function App() {
    const [layout, setLayout] = useState('layout1');
    const handleFn = useCallback(handleChange.bind(null));
    function getWidth(width) {
        let finalWidth = '';
        let i = 0;
        do {
            finalWidth += "1fr ";
            i++;
        }
        while(i < width);
        return finalWidth;
    }
    function handleChange(ev) {
        setLayout(ev.target.value);
    }
    return (
        <div>
            <SelectBox value={layout} handleChange={handleFn} />
            {/* <div onClick={() => setLayout(gridJSON.layout2)}>Switch</div> */}
            <div style={{display: 'grid', gridGap: "1rem", gridTemplateColumns: getWidth(layout.column)}}>
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
