import PropTypes from "prop-types"

export default function Greetings(props) {
    return (props.isLoggedIn ? <p className="welcome-message">Welcome {props.username}</p> : <p className="" login-prompt>You're not Logged in</p>
    );
}
Greetings.propTypes = {
    username: PropTypes.string,
    isLoggedIn: PropTypes.bool,
}
Greetings.defaultProps = {
    isLoggedIn: false,
    username: "Guest"
}