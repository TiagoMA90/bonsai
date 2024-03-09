function Card(props) {
    return(
        <div className="card">
            <img className="image" src={props.image} alt="image"></img>
            <h2 className="title">{props.name}</h2>
            <p className="text">{props.description}</p>
        </div>
    );
}

export default Card;