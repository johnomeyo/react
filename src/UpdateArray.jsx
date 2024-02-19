import { useState } from "react";

function UpdateArray() {

    const [shoes, setShoes] = useState(["Nike Airforce 1"]);
    function handleAdd() {
        const newShoe = document.getElementById("shoeInput").value;
        document.getElementById("shoeInput").value = "";
        setShoes(s => ([...s, newShoe]));

    }
    function handleRemove(index) {
        setShoes(shoes.filter((_, i) => i !== index))
    }
    return <div>
        <h2>List of Food</h2>
        <ul>
            {shoes.map((shoe, index) => <li key={index} onClick={() => handleRemove(index)}>{shoe}</li>)}
        </ul>
        <input type="text" name="" id="shoeInput" placeholder="Enter Shoe" />
        <button onClick={handleAdd}> Add Shoe</button>
    </div>

}
export default UpdateArray;