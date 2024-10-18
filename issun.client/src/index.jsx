import React from 'react';
import ReactDOM from 'react-dom/client';
import MainPage from './MainPage';
import UniversityPage from './UniversityPage';
import FacultyPage from './FacultyPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/university/:id' element={<UniversityPage />} />
            <Route path='/faculty/:id' element={<FacultyPage />} />
            <Route path='*' element={<MainPage />} />
        

        </Routes>
    </BrowserRouter>
);

