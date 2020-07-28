Custom Grid for Classplus

Currently added two layouts.

If you want to add multiple layouts

Use 
/src/grid.js

Add many layouts as you want.

You can select the layout from the selectbox which is
prePopulated based on the layouts you have defined

const gridJSON = {
    "layout1": {},
    "layout2: {},
    ...layoutN
}

"column": "3", this is used to set the number of grid shown on the screen.

You can use 1-12 just to maintain the structure.

{textToDisplay: "Dummy text layout 1", color: '#000', bgColor: '#EDE7F6', breakpoint: '3'}

textToDisplay => Text to show
color => Text color
bgColor => Background color
breakpoint => Where you want to break

For Full Width give it equal to columnWidth

Or other width you give it any range from '1-12'
