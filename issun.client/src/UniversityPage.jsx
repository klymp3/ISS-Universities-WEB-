import './scss/app.scss';
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Faculty from './components/Faculty';


function UniversityPage() {
    const[result, setUniversity] = useState([]);
    const {id} = useParams();
    
    useEffect(() => {
        fetch(`https://localhost:5173/api/university/${id}`)
            .then(response => response.json())
            .then(data => setUniversity(data));
    }, [id]);

    if (!result.university || !result.university.photo) {
        return <div className='loading'>Loading...</div>; // Отображение, пока данные загружаются
    }

    return ( 
        <div className='university-page'>
            <img src={result.university.photo} className='baground'/>

            <div className='container'>
                <ul className='nav-bar'>
                    <li>Список ВУЗов</li>
                    <li>➤ ВУЗ</li>
                </ul>

                <h1>{result.university.nameU}</h1>

                <p>{result.university.descriptionU}</p><br /><br />
            
                <h3>Список факультетов:</h3>
                
                <div className='faculties-list'>
                    {result.faculties.map((faculty) => (
                        <Faculty key={faculty.id} id={faculty.id} title={faculty.nameF} />
                    ))}
                </div>
            </div>
        </div>
        
    );
}

export default UniversityPage;
