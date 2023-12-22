import React, { useEffect, useState , useContext} from 'react';
import { quizContext } from '../App';

function ScoreComponent({score, playAgain, len, toggleTheme}) {

    const darkTheme = useContext(quizContext)
    const percentage = (score/len) * 100;
    console.log('percentage :', percentage);

    return(
        <>
            <div className='result-container' style={darkTheme ? {backgroundColor : "#2E2E2E"} : {backgroundColor: "#51B900"}}>
            <button style={
                darkTheme ? {backgroundColor: "chocolate", color: "#2E2E2E", border:"1px solid white"} : {backgroundColor : "burlywood", color: "black", border:"1px solid black"}
                } id="quiztoggleTheme" onClick={toggleTheme}><img width="64" height="64" src={darkTheme ? "https://img.icons8.com/glyph-neue/64/000000/light.png" : "https://img.icons8.com/cotton/64/light-on.png"} alt="light-on"/>Switch to {darkTheme ? "Light" : "Dark"}</button>
                <div className='stat-container' style={darkTheme ? {backgroundColor : "black", color : ""} : {backgroundColor: '#E5B500'}}>
                    <h2 id='scored' style={darkTheme ? {color : "#FF00F5"}: {color : 'red'}}>You Scored {score} out of {len}</h2>
                    <h2 id='percentage' style={darkTheme ? {color : "#FF00F5"} : {color : "black"}}>Percentage: {percentage}%</h2>
                    <button id='attempt_again' onClick={playAgain}>Attempt Again</button>
                </div>
            </div>
        </>
    )
}

export default ScoreComponent