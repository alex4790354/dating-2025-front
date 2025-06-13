import { useState, useEffect } from 'react';
import allPersonsData from './data/all-persons.js';
import Persons from "./Persons.jsx";

function App() {

    const [persons, setPersons] = useState([]);

    useEffect(() => {
        setPersons(allPersonsData)
    }, []);

    return (
        <main>
            <h2>And now Perons: </h2>
            <section className='container'>
                <h3>{persons.length} persons from dating</h3>
                <Persons tours={persons.slice(0, 12)} />
            </section>
        </main>
    );
}

export default App;
