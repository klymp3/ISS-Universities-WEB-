import './scss/app.scss';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Faculty from './components/Faculty';


function FacultyPage() {
    const[result, setFaculty] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {
        fetch(`https://localhost:5173/api/faculty/${id}`)
            .then(response => response.json())
            .then(data => setFaculty(data));
    }, [id]);

    if (!result.faculty || !result.universituImg) {
        return <div className='loading'>Loading...</div>; // Отображение, пока данные загружаются
    }

    return ( 
        <div className='university-page'>
            <img src={result.universituImg} className='baground'/>

            <div className='container'>
                <ul className='nav-bar'>
                    <li>Список ВУЗов</li>
                    <li>➤ ВУЗ</li>
                    <li>➤ Факультет</li>
                </ul>

                <h1>{result.faculty.nameF}</h1>

                <p>{result.faculty.descriptionF}</p><br /><br />
            
                <h3>Список специальностей:</h3>
                
                <div className='faculties-list'>
                    {result.specialities.map((speciality) => (
                        <Faculty key={speciality.id} id={speciality.id} title={speciality.nameS} />
                    ))}
                </div>
            </div>
        </div>
        
    );
}

export default FacultyPage;
