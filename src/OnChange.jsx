import React, { useState } from "react";
function OnChangeComponent() {
    const [name, setName] = useState("");
    const [comment, setComment] = useState("");
    const [quantity, setQuantity] = useState(0);
    const [payment, setPayment] = useState("mpesa")
    const [delivery, setDelivery] = useState();

    const handleNameChange = (e) => {
        setName(e.target.value)
    }
    const handleCommentChange = (e) => {
        setComment(e.target.value)
    }
    const handleQuantityChange = (e) => {
        setQuantity(e.target.value)
    }
    const handlePaymentChange = (e) => {
        setPayment(e.target.value)
    }
    const handleDeliveryChange = (e) => {
        setDelivery(e.target.value)
    }
    return (
        <div>
            <input type="text" value={name} onChange={(e) => handleNameChange(e)} />
            <p>Name: {name}</p>
            <input type="number" value={quantity} onChange={(e) => handleQuantityChange(e)} />
            <p>Quantity: {quantity}</p>
            <p></p>
            <textarea placeholder="Give us delivery instructions" name="" id="" cols="30" rows="10" value={comment} onChange={(e) => handleCommentChange(e)}></textarea>
            <p>{comment}</p>
            <p></p>
            <select name="" id="" value={payment} onChange={(e) => handlePaymentChange(e)}>
                <option value="">Select a payment method </option>
                <option value="visa">Visa </option>
                <option value="mpesa">Mpesa </option>
            </select>
            <p>Payment : {payment}</p>
            <p></p>
            <label htmlFor="">
                <input type="radio" value="pickUp" checked={delivery==="pickUp"} onChange={(e)=>handleDeliveryChange(e)} / >
                Pick Up
            </label>
            <label htmlFor="">
                <input type="radio" value="deliver" checked={delivery==="deliver"} onChange={(e)=>handleDeliveryChange(e)} / >
              Deliver
            </label>
            <p>Delivery method: {delivery}</p>
        </div>
    )
}
export default OnChangeComponent;