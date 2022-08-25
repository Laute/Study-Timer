import React from 'react';
import './ToggleButton.css';

// FROM https://dev.to/themesberg/building-a-tailwind-css-toggleswitch-component-4pc3

function ToggleButton() {

    const [_public, set_Public] = React.useState();
    const handleChange = e => {
      const target = e.target;
      if (target.checked) {
        set_Public(target.value);
        console.log('yes');
      }
      else {
        set_Public('no');
        console.log('no');
      }
    };
 


    return (
        <div id='button'>
            <label htmlFor="toggle-example" class="flex items-center cursor-pointer relative mb-4">
                <input onChange={handleChange} value="yes" type="checkbox" id="toggle-example" class="sr-only" checked={_public === 'yes'} />
                <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
            </label>
        </div>
    )
}

export default ToggleButton;