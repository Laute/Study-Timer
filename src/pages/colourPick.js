import React from 'react';

const ColorPicker = () => {
    const [color, setColor] = React.useState(null);
  
    console.log("colorPicker", color);
  
    return (
      <input type="color" id="colour" name="colour" value={color} onChange={e => setColor(e.target.value)} />
    );
  }

  export default ColorPicker;