import React, { useState } from 'react'
function MyComponent() {
    let [name, setName] = useState("John");
    const handleNameClick = () => {
        setName(" Zebra")
    }
    const [age, setAge] = useState(0);
    const handleAgeClick = () => {
        setAge(age + 1)
    }
    const [isEmployed, setIsEmployed] = useState(false);
    const handleIsEmployedCLick = () => {
        setIsEmployed(!isEmployed);
    }

    return (

        <div>
            <p>Name: {name}</p>
            <p></p>
            <button onClick={handleNameClick}>Update name</button>

            <p></p>
            <p>Age: {age}</p>
            <p></p>
            <button onClick={handleAgeClick}>Update age</button>
            <p></p>
            <p>Is Employed: {isEmployed ? <p>YES</p> : <p>NO</p>}</p>
            <p></p>
            <button onClick={handleIsEmployedCLick}>Change employment status</button>
        </div>
    );
}
export default MyComponent;