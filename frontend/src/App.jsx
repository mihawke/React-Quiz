import { useState, useEffect } from 'react';
import './App.css';
import { data } from './data/Data'
function App() {
  const [selectedOption, setSelectedOption] = useState(null)
  const [selectedQuestion, setSelectedQuestion] = useState(0)
  const [score, setScore] = useState(false)
  function handleNext(event) {
    event.preventDefault();
    if (selectedOption !== null || selectedOption !== undefined) {
      const isCorrect = data[selectedQuestion].options[selectedOption].isCorrect;
      setResult(isCorrect);
      setSelectedQuestion(selectedQuestion + 1)
    }
    setSelectedOption(null)
  };

  return (
    <div className="app">
      <div className='container'>
        <p>Q{selectedQuestion + 1} : {data[selectedQuestion].question}</p>
        {data[selectedQuestion].options.map((option, index) => (
          <div key={index} className='options'>
            <input
              id={index}
              type='radio'
              name='option'
              value={index}
              onClick={(e) => setSelectedOption(e.target.value)} />
            <label htmlFor={index}>{option.answer}</label>
          </div>
        ))}
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
}

export default App;
