import { useState, useEffect } from "react";
export default function Clock() {

    const [time, setTime] = useState(new Date())
    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date())
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, [])

    function formatTime() {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridium = hours >= 12 ? "pm" : "am";
        hours = hours % 12 || 12
        return padZero(hours) + ":" + padZero(minutes) + ":" + padZero(seconds) + " " + meridium;
    }
function padZero(number){
    //if the number is less than ten then we add a zero and then add the string zero to our number
 return (number<10 ? "0":"")+ number;
}
    return <div className="clock-container">


        <div className="clock">
            <span>{formatTime()}</span>
        </div>
    </div>
} 