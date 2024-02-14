function Games(props) {
return (
<div>
    <p>
        Name: {props.name}
    </p>
    <p>
        Year of Publication: {props.year}
    </p>
    <p>
        Can I recommend?: {props.isHot ? "yes": "no"}
    </p>
</div>
);
    
}
export default Games;