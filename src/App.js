import React, { useState } from 'react';
import Question from './Question';
import Score from './Score';
import './App.css'; // Add CSS file for styling

const App = () => {
    const questions = [
        {
            question: 'What is the capital of France?',
            options: ['Paris', 'Berlin', 'London', 'Madrid'],
            correctAnswer: 'Paris'
        },
        {
          question: 'What is the capital of India?',
          options: ['Bhopal', 'Pune', 'New Delhi', 'Lucknow'],
          correctAnswer: 'New Delhi'
        },
        {
          question: 'What is the capital of Canada?',
          options: ['Toronto', 'Montreal', 'Ottawa', 'Vancouver'],
          correctAnswer: 'Ottawa'
        },
        {
          question: 'What is the capital of Thailand?',
          options: ['Bangkok', 'Chiang', 'Phuket', 'Pattaya'],
          correctAnswer: 'Bangkok'
        },
        {
          question: 'What is the capital of Iran?',
          options: ['Tabriz', 'Tehran', 'Isfahan', 'Shiraz'],
          correctAnswer: 'Tehran'
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [score, setScore] = useState(0);

    const handleAnswerSelect = (answer) => {
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = answer;
        setAnswers(newAnswers);
    };

    const handleNextQuestion = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            calculateScore();
        }
    };

    const calculateScore = () => {
        let newScore = 0;
        answers.forEach((answer, index) => {
            if (answer === questions[index].correctAnswer) {
                newScore++;
            }
        });
        setScore(newScore);
        setCurrentQuestion(questions.length); // This ensures Score component is rendered
    };

    return (
        <div className="app">
            {currentQuestion < questions.length ? (
                <Question
                    question={questions[currentQuestion].question}
                    options={questions[currentQuestion].options}
                    onSelect={handleAnswerSelect}
                />
            ) : (
                <Score score={score} totalQuestions={questions.length} />
            )}
            {currentQuestion < questions.length && (
                <button onClick={handleNextQuestion}>
                    {currentQuestion === questions.length - 1 ? 'Finish' : 'Next'}
                </button>
            )}
        </div>
    );
};

export default App;
