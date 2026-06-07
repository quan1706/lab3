import React from 'react';

function Question({ questionData, selectedAnswer, onSelectAnswer, onSubmitAnswer }) {  // Boc tach du lieu cau hoi tu props 'questionData' do Cha truyen xuong
  const { question, options } = questionData;

  return (
    <div>
      
      <h3>{question}</h3>

    
      <div>
        {options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                name="quiz-options"
                value={option}
        
                checked={selectedAnswer === option}
                
                onChange={() => onSelectAnswer(option)}
              />
              {option}
            </label>
          </div>
        ))}
      </div>

      
      <br />
      <button onClick={onSubmitAnswer} disabled={!selectedAnswer}>
        Submit Answer
      </button>
    </div>
  );
}

export default Question;
