import React from 'react';

const Score = ({ score, totalQuestions }) => {
    const handleRestart = () => {
        window.location.reload(); // Reloads the page to restart the quiz
    };

    return (
        <div className="score">
            <h2>Quiz completed!</h2>
            <p>Your score: {score} out of {totalQuestions}</p>
            <button onClick={handleRestart}>RESTART</button>
        </div>
    );
};

export default Score;
