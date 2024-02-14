import PropType from "prop-types"
import profilePic from "./assets/butterfly.jpg"
function Card(props) {
    return (
        <div className="card">
            <img className="card-image" alt="The Goat himself" src={profilePic}></img>
            <h2 className="card-title">{props.name}</h2>
            <p className="card-text">{props.description}</p>
        </div>
    );
}
Card.prototype = {
    name: PropType.string,
    year: PropType.number,
    isHot: PropType.bool,

}
Card.defaultProps ={
    name:"Jax",
    description: "A world class Mortal Kombat player"
}
export default Card;