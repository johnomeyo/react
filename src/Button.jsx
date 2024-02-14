
function Button() {
    const styles = {
        backgroundColor: "blue",
        color: "white",
        border: "none",
        padding: "20px 30px 20px 30px",
        borderRadius: "10px",
        cursor: "pointer",
    }
    return (
        <button style={styles}>
            Post
        </button>
    );

}
export default Button;