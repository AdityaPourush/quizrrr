import React from "react"
import { useContext } from "react"
import { quizContext } from "../App"

function StartComponent({showQuiz, toggleTheme}) {

    const darkTheme = useContext(quizContext)

    return(
        <>
        <div className="StartPageMain" style={darkTheme ? {backgroundColor: 'black'} : {backgroundColor: '#7DC7D0'}}>
            <div className="StartPageLeftDiv">
                <div className="LeftDivTop" style={darkTheme ? {backgroundColor : '#2E2E2E', color : 'white', border: "2px solid white"} : {backgroundColor : '#FBD548'}}>
                <h1><span id="logo">QUIZ</span>rrr</h1>
                    <p style={{marginTop: "15vh", fontSize : "3vh", lineHeight : "4vh"}}>Quizzes are fun, engaging, and effective ways to test your knowledge, improve your learning, and identify your strengths and weaknesses.</p>
                    <p style={{marginTop : "7vh", fontSize : "2.7vh", lineHeight : "4vh"}}>Experts also agree that quizzes are not only fun, but also beneficial for your brain health, memory, and cognitive skills.</p>
                </div>
                <div className="LeftDivBottom" style={darkTheme ? {backgroundColor : '#2E2E2E', color : 'white', border: "2px solid white"} : {backgroundColor : '#CA507D'}}>
                    <p>Countact Us <img width="50" height="50" src="https://img.icons8.com/ios/50/000000/long-arrow-right--v1.png" alt="long-arrow-right--v1"/></p>
                    <p>About Me <img width="50" height="50" src="https://img.icons8.com/ios/50/000000/long-arrow-right--v1.png" alt="long-arrow-right--v1"/></p>
                </div>
            </div>
            <div className="StartPageRightDiv" style={darkTheme ? {backgroundColor : '#2E2E2E', border: "2px solid white"} : {backgroundColor: '#085C77'}}>
                <button style={darkTheme ? {backgroundColor: "chocolate", color: "white", border:"1px solid white"} : {backgroundColor : "burlywood", color: "black"}} id="toggleTheme" onClick={toggleTheme}><img width="64" height="64" src={darkTheme ? "https://img.icons8.com/glyph-neue/64/000000/light.png" : "https://img.icons8.com/cotton/64/light-on.png"} alt="light-on"/>Switch to {darkTheme ? "Light" : "Dark"}</button>
                <img style={darkTheme ? {border: "1.5px solid white"} : {border: "none"}} src="https://cdn.dribbble.com/users/962321/screenshots/2752320/media/539d66d8491e519b363ca92ac6e71168.gif" alt="" id="cubeImg"/>
                <button style={darkTheme ? {backgroundColor: "#777777", color:"white", border:"1px solid white"} : {backgroundColor: "#F200F6", color:"white", border: "1px solid black"}} id="toQuiz" onClick={showQuiz}>Take the Quiz</button>
            </div>
        </div>
            {/* <button onClick={setUpQuiz(2)}>Start Quiz 2</button> */}
        </>
    )
}

export default StartComponent