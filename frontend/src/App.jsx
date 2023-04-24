import { useState, useEffect } from 'react';
import './App.css';
import { data } from './data/Data'

const Start = ({onClick}) => {
  return (
    <div>
      <div>
        <h1 style={{color:'white'}}>Welcome To The React Basics Quiz</h1>
        <p className='question-number'><span>{'\n'}</span>Press start to take the quiz</p>
        <button onClick={onClick}>Start</button>
      </div>
    </div>
  )
}
const End = ({onClick,score}) => {
  return (
    <div>
      <div>
        <h1 style={{color:'white'}}>Thanks for taking the Quiz</h1>
        <p className='question-number'><span>{'\n'}</span>Your Score: {score}</p>
        <button onClick={onClick}>Retake Quiz</button>
      </div>
    </div>
  )
}
function App() {
  const length = data.length
  const [selectedOption, setSelectedOption] = useState(null)
  const [selectedQuestion, setSelectedQuestion] = useState(0)
  const [start, setStart] = useState(true)
  const [score, setScore] = useState(0)
  function handleNext(event) {
    event.preventDefault();
    if (selectedOption !== null || selectedOption !== undefined) {
      if(data[selectedQuestion].options[selectedOption].isCorrect){
        setScore(score + 1)
      }
      setSelectedQuestion(selectedQuestion + 1)
    }
    setSelectedOption(null)
  };
  function handleRetake(){
    setStart(true)
    setSelectedOption(null)
    setSelectedQuestion(0)
    setScore(0)
  }
  return (
    <div className="app">
      <div className='container'>
        {start ? <Start onClick={()=>setStart(false)}/> :
        data.length == selectedQuestion ? <End score={score} onClick={handleRetake}/>:
          <>
            <div className='question'>
              <p className='question-number'>Q{selectedQuestion + 1}:</p>
              <p>{data[selectedQuestion].question}</p>
            </div>
            {data[selectedQuestion].options.map((option, index) => (
              <div key={index} className='options'>
                <input
                  id={index}
                  type='radio'
                  name='option'
                  value={index}
                  checked={selectedOption == index}
                  onClick={(e) => setSelectedOption(e.target.value)} />
                <label htmlFor={index}>{option.answer}</label>
              </div>
            ))}
            <button onClick={handleNext}>Next</button>
          </>
        }
      </div>
    </div>
  );
}

export default App;
