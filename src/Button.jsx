
function Button() {
    const styles = {
        backgroundColor: "blue",
        fontSize: "20px",
        color: "white",
        border: "none",
        padding: "20px 30px 20px 30px",
        borderRadius: "10px",
        cursor: "pointer",
    }

    const handleClick = (e) => {
        e.target.textContent = "Posting..."
    }

    return (
        //if the onClick function has params then we use an arrow function to prevent the function from being called directly without the click
        <button style={styles} onClick={(e) => handleClick(e)}>
            Post
        </button>
    );

}
export default Button;