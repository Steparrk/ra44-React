import Star from "./Star"
function Stars(props) {
    return(
        <ul className="card-body-stars u-clearfix">
            <Star count={props.count}/>
        </ul>
    );
}

export default Stars;