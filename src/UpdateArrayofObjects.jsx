import { useState } from "react";

export default function UpdateArrayOfObjects() {
    const [cars, setCars] = useState([]);
    const [carYear, setCarYear] = useState(new Date().getFullYear());
    const [carsMake, setCarsMake] = useState("");
    const [carsModel, setCarsModel] = useState('');
    function handleAddCar() {
        const newCar = {
            year: carYear,
            make: carsMake,
            model: carsModel,
        }

        setCars(cars => [...cars, newCar])
        setCarYear(new Date().getFullYear());
        setCarsMake("");
        setCarsModel("");
    }
    function handleRemoveCar(index) {
        setCars(c=>c.filter((_, i) => i !== index))
    }
    function handleYearChange(e) {
        setCarYear(e.target.value);

    }
    function handleModelChange(e) {
        setCarsModel(e.target.value);
    }
    function handleMakeChange(e) {
        setCarsMake(e.target.value)
    }
    return <div><h2>List of car objects</h2>

        <ul>
            {
                cars.map((car, index) =>
                    <li key={index} onClick={() => handleRemoveCar(index)} >{car.year} {car.make} {car.model}</li>)
            }
        </ul>
        <input type="number" placeholder="Enter the year" value={carYear} onChange={handleYearChange} /> <br />
        <input type="text" placeholder="Enter the model" value={carsModel} onChange={handleModelChange} /> <br />
        <input type="text" placeholder="Enter the make" value={carsMake} onChange={handleMakeChange} /> <br />
        <button onClick={handleAddCar}>Add car</button>

    </div>
}