import PropTypes from "prop-types"

function List(props) {
    const carsItems = props.motors;
    const category = props.category

    carsItems.sort((a, b) => a.name.localeCompare(b.name)); //sorts the objects in alphabetical order using the name property

    // const newerCars = carsItems.filter(item => item.year > 2003);
    const carBrands = carsItems.map(item => <li key={item.id}> {item.name} : &nbsp; {item.year}</li>)
    return (<>
    <h3>{category}</h3>
    <ul>{carBrands}</ul>
    </>);
}
List.defaultProps =  {
    category:"Products",
    items:[]
}
List.propTypes={
    category: PropTypes.string,
    items:PropTypes.arrayOf(PropTypes.shape({
        id:PropTypes.number,
        name:PropTypes.string,
        year: PropTypes.number
    }))
}
export default List;