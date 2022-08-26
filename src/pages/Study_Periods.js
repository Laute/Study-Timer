import React from 'react';

const Avg_Per_Day = (props) => {

    var display_value = props.day_value;
    if (props.selection === 'day') {
        display_value = props.day_value;
    }
    if (props.selection === 'week') {
        display_value = props.week_value;
    }
    if (props.selection === 'month') {
        display_value = props.month_value;
    }
    if (props.selection === 'year') {
        display_value = props.year_value;
    }


    if (props.type === 'study_time') {
    return(
        <h2 style={{
        color: props.colour,
        }}>{display_value} minutes</h2>
        )
    }
    else {
        return(
            <h2 style={{
            color: props.colour,
            }}>{display_value}</h2>
            )
    }
    
}

export default Avg_Per_Day;