import React, { useState } from 'react';

const Question = ({ question, options, onSelect }) => {
    const [selectedOption, setSelectedOption] = useState('');

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
        onSelect(option); // Pass selected option back to parent component
    };

    return (
        <div className="question">
            <h2>{question}</h2>
            <ul>
                {options.map((option, index) => (
                    <li key={index}>
                        <button
                            onClick={() => handleOptionSelect(option)}
                            style={{ backgroundColor: selectedOption === option ? '#0000ff' : '#89cff0' }}
                        >
                            {option}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Question;
