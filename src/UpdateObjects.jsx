import { useState } from "react";

function UpdateObject() {

    const [car, setCar] = useState({ year: 2015, make: "BMW", model: "M5 Cs" });
    function handleYearChange(e) {
        //we use the spread operator to retain the other properties of the car since if we used (year:2021) it 
        //would just create a  new object with a property of year set to 2021.
        // the spread operator works like this ({year:2015, make"BMW", model:"M5 CS" , year:2021}),
        //But since JavaScript doesnt support duplicate keys, we will use the latest key which is 2021 in this case
        setCar(_c => ({ ...car, year: e.target.value }));

        //the above one is using the updater function but here is how we can achieve the same results without an updator function

        //        setCar({ ...car, year: e.target.value });
    }
    function handleMakeChange(e) {
        setCar(_c => ({ ...car, make: e.target.value }));
    }
    function handleModelChange(e) {
        setCar(_c => ({ ...car, model: e.target.value }));
    }
    return <div>

        <p>Your favorite car is : {car.year} {car.make} {car.model}</p>


        <input type="number" value={car.year} onChange={handleYearChange} /> <br />
        <input type="text" value={car.make} onChange={handleMakeChange} /> <br />
        <input type="text" value={car.model} onChange={handleModelChange} /> <br />

    </div>

}
export default UpdateObject;