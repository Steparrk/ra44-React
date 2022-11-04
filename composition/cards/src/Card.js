
function Card({children, title, text}) {
    const img = children === null ? null : children;
        
    return(
        <div className="card">
            {img}
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <p className="card-text">{text}</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
        </div>
    );
}

export default Card;