import {Link} from "react-router-dom"

function University({id, title, count, img}) {
    return (
        <Link to = {{pathname: `/university/${id}`}}>

            <div className="university-container">
                <img src={img} />
                <div className="university-container__text">
                    <h2>{title}</h2>
                    <p>Специальностей: {count}</p>
                </div>
            </div>
        </Link>
    );
}

export default University;
