import React from 'react';

const Streak = (props) => {


    return(
        <h2 style={{
        color: props.colour_test,
        }}>{props.streak} days</h2>
        )}

export default Streak;