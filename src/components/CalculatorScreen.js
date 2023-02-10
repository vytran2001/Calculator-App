import React from 'react';

import CalculatorScreenRow from './CalculatorScreenRow.js';

const CalculatorScreen = (props) => {
    return (
        <div className="screen">
            <CalculatorScreenRow value = {props.question}/>
            <CalculatorScreenRow value = {props.answer}/>
        </div>
    )
}

export default CalculatorScreen;