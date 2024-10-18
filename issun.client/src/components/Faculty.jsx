import {Link} from "react-router-dom"

function Faculty({id, title}) {
    return (
        <Link to = {{pathname: `/faculty/${id}`}}>

            <div className="faculty-container">
                <img src="../img/bg.svg"  className="bg1"/>
                <img src="../img/bg2.svg" className="bg2"/>
                <h3>{title}</h3>
            </div>
        </Link>
    );
}

export default Faculty;
