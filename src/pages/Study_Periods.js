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

        if (display_value >= 86400) {
            const days = Math.floor(display_value / 86400);
            const hours = Math.floor((display_value - (days * 86400)) / 3600);
            const minutes = Math.floor((display_value - days * 86400 - hours * 3600) / 60);
            const seconds = display_value - days * 86400 - hours * 3600 - minutes * 60;

        return(
            <h2 style={{
            color: props.colour,
            }}> {days} days, {hours} hours, {minutes} minutes, {seconds} seconds</h2>
            )
        }

        if (display_value >= 3600) {
            const hours = Math.floor(display_value / 3600);
            const minutes = Math.floor((display_value - (hours * 3600)) / 60);
            const seconds = display_value - hours * 3600 - minutes * 60;
            
            return(
                <h2 style={{
                color: props.colour,
                }}> {hours} hours, {minutes} minutes, {seconds} seconds</h2>
                )
        }

        if (display_value >= 60) {
            const minutes = Math.floor(display_value / 60);
            const seconds = display_value - minutes * 60;

            return(
                <h2 style={{
                color: props.colour,
                }}>{minutes} minutes, {seconds} seconds</h2>
                )
        }

    return(
        <h2 style={{
        color: props.colour,
        }}>{display_value} seconds</h2>
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