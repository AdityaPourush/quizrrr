import React, { useEffect, useState , useContext} from 'react';
import questions from '../questions1';
// console.log('questions :', questions);
import { quizContext } from '../App';

function QuizComponent({score, handleClick, QNo, text, options, right, setisRight, len, toggleTheme}) {

    const[highlight, setHighlighted] = useState(false);
    const darkTheme = useContext(quizContext)
    
    useEffect(()=>{
        console.log(score);
    },[score])

    useEffect(()=>{
        setisRight(1),
        setHighlighted(false)
    },[text])

    return (
        <>
        <div className='quizpage-container' style={darkTheme ? {backgroundColor : "#2E2E2E"} : {backgroundColor : '#51B900'}}>
            <button style={
                darkTheme ? {backgroundColor: "chocolate", color: "#2E2E2E", border:"1px solid white"} : {backgroundColor : "burlywood", color: "black", border:"1px solid black"}
                } id="quiztoggleTheme" onClick={toggleTheme}><img width="64" height="64" src={darkTheme ? "https://img.icons8.com/glyph-neue/64/000000/light.png" : "https://img.icons8.com/cotton/64/light-on.png"} alt="light-on"/>Switch to {darkTheme ? "Light" : "Dark"}</button>
            <div className='quiz-container' style={darkTheme ? {backgroundColor : "#ACACAC"} : {backgroundColor : "#7DACCE"}}>
                <div className='quiz' style={right==2 ? {color: 'green'} : right == 3 ? {color : 'red'} : {color : 'black'}}>
                    <h2>Question {QNo+1} out of {len}</h2>
                    <h1 style={highlight ? {color:'#0029FE', fontSize: '45px'} : {}}>{text}</h1>
                    <div className='options'>
                        {options.map((option,id)=>{
                            return(<p key={id} onClick={()=>handleClick(id)}>{option.text}</p>)
                        })}
                    </div>
                    <div className='highlight-buttons'>
                        <button onClick={()=>{
                            setHighlighted(true)
                        }}>Highlight</button>
                        <button onClick={()=>{
                            setHighlighted(false)
                        }}>Remove Highlight</button>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}

export default QuizComponent;