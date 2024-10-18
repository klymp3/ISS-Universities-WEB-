import './scss/app.scss';
import University from './components/University';
import React, { useState, useEffect } from 'react';


function MainPage() {
    const[universities, setUniversities] = useState([]);

    useEffect(() => {
        fetch(`https://localhost:5173/api/universities/list`)
        .then(response => { console.log(response);
     
        return response.json();
  })
  .then(data => setUniversities(data));
    }, []);
    return ( 
        <div className='container'>
            <div className="search">
                <input type="text" className="search-container__input" />
                <img src="img/loupe.png" />
            </div>
    
            <div className="universities-list">
                    {universities.map((university) => (
                        <University key={university.id} id={university.id} title={university.nameU} count={university.countS} img={university.photo} />
                    ))}
            </div>
        </div>
    );
}

export default MainPage;
