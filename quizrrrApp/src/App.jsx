import React, { useEffect, useState } from 'react'
import './App.css'
import questions from './questions1';
import QuizComponent from './Components/QuizComponent'
import StartComponent from './Components/StartComponent';
import ScoreComponent from './Components/ScoreComponent';

export const quizContext = React.createContext();

function App() {

  const len = questions.length;

    const[QNo, setQNo] = useState(0);
    const[score, setScore] = useState(0);
    const[right, setisRight] = useState(1);
    const[quizDone, setquizDone] = useState(false);
    const[darkTheme, setDarkTheme] = useState(false);

    const[ComponentNo, setComponentNo] = useState(0);

    let {text, options} = questions[QNo];
    // console.log('question :', text);

    const handleClick = (i)=>{
        if(options[i].isCorrect){
            setScore((prevScore)=>prevScore+1)
            setisRight(2)
        } else {
            setisRight(3)
        }

        setTimeout(()=>{
            QNo != len-1 ? setQNo((prevQ)=>prevQ+1) : (setQNo(0) ,setComponentNo(2))
        }, 1000)
    }

    const showQuiz = () =>{
      setComponentNo(1)
    }

    const playAgain = ()=>{
      setComponentNo(0),
      setScore(0)
    }

    const toggleTheme = ()=>{
      setDarkTheme(prevTheme => !prevTheme)
    }

  return (
    <>
    <quizContext.Provider value={darkTheme}>
    {
      ComponentNo == 0 ? <StartComponent showQuiz={showQuiz} toggleTheme={toggleTheme}/> : 
      ComponentNo == 1 ? <QuizComponent score={score} handleClick={handleClick} QNo={QNo} text={text} options={options} right={right} setisRight={setisRight} len={len} toggleTheme={toggleTheme}/> :
      ComponentNo == 2 ? <ScoreComponent score={score} playAgain={playAgain} len={len} toggleTheme={toggleTheme}/> : {}
    }
    </quizContext.Provider>
    </>
  )
}

export default App
