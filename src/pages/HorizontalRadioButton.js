import React from 'react';

// FROM https://flowbite.com/docs/forms/radio/

function HorizontalRadioButton(props) {

        const [studyPeriods, setStudyPeriods] = React.useState();
        const handleChange = e => {
          const target = e.target;
          if (target.checked) {
            setStudyPeriods(target.value);
          }
          props.ButtonSelection(target.value);
        };
        const handleSubmit = e => {
          e.preventDefault();
          console.log('StudyPeriods');
        };
        return (
          <form>
            <div>
              <label>
                <input type="radio" value="day" checked={studyPeriods === 'day'} onChange={handleChange} />
                <span>Day </span>
              </label>
              <label>
                <input type="radio" value="week" checked={studyPeriods === 'week'} onChange={handleChange} />
                <span>Week </span>
              </label>
              <label>
                <input type="radio" value="month" checked={studyPeriods === 'month'} onChange={handleChange} />
                <span>Month </span>
              </label>
              <label>
                <input type="radio" value="year" checked={studyPeriods === 'year'} onChange={handleChange} />
                <span>Year </span>
              </label>
            </div>
          </form>
        );      
    
    }

    export default HorizontalRadioButton;
    
    





    // return (
    //     <div>  
    //         <ul class="items-center w-full text-sm font-medium text-gray-900 bg-white rounded-lg border border-gray-200 sm:flex dark:bg-gray-500 dark:border-gray-600 dark:text-white">
    //             <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
    //                 <div class="flex items-center pl-3">
    //                     <input id="horizontal-list-radio-license" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
    //                     <label for="horizontal-list-radio-license" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Day </label>
    //                 </div>
    //             </li>
    //             <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
    //                 <div class="flex items-center pl-3">
    //                     <input id="horizontal-list-radio-id" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
    //                     <label for="horizontal-list-radio-id" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Week</label>
    //                 </div>
    //             </li>
    //             <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
    //                 <div class="flex items-center pl-3">
    //                     <input id="horizontal-list-radio-millitary" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
    //                     <label for="horizontal-list-radio-millitary" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Month</label>
    //                 </div>
    //             </li>
    //             <li class="w-full dark:border-gray-600">
    //                 <div class="flex items-center pl-3">
    //                     <input id="horizontal-list-radio-passport" type="radio" value="" name="list-radio" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500" />
    //                     <label for="horizontal-list-radio-passport" class="py-3 ml-2 w-full text-sm font-medium text-gray-900 dark:text-gray-300">Year</label>
    //                 </div>
    //             </li>
    //         </ul>

    //     </div>
    // )

