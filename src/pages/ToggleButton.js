import React from 'react';
import './ToggleButton.css';

// FROM https://dev.to/themesberg/building-a-tailwind-css-toggleswitch-component-4pc3

function ToggleButton() {
    return (
        <div id='button'>
            <label htmlFor="toggle-example" class="flex items-center cursor-pointer relative mb-4">
                <input type="checkbox" id="toggle-example" class="sr-only" />
                <div className="toggle-bg bg-gray-200 border-2 border-gray-200 h-6 w-11 rounded-full"></div>
            </label>
        </div>
    )
}

export default ToggleButton;