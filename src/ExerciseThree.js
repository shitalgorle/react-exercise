
import React from 'react';

export class ExerciseThree extends React.Component {
    render() {

        let greeting = "Hello World";

        const date = new Date();
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
       

        if (hours < 12) {
            greeting = "Good Morning";
        } else if (hours >= 12 && hours < 17) {
            greeting = "Good Afternoon";
        } else if (hours >= 17 && hours < 20) {
            greeting = "Good Evening";
        } else {
            greeting = "Good Night";
        }

        return (
            <div style={{ backgroundColor: "white", padding: "2%", border: "2px solid black" }}>
                <h1>{greeting}</h1>
                {/* <p>The current time is {hours}:{minutes < 10 ? `0${minutes}` : minutes} </p> */}
                <p>The current time is {hours}:{minutes < 10 ? `0${minutes}` : minutes}: {seconds < 10 ? `0${seconds}` : seconds}</p>
            </div>
        );
    }
}

export default ExerciseThree;






