import { useState, useEffect } from 'react';
import allPersonsData from './data/all-persons.js';
import Persons from "./Persons.jsx";
import Search from "./Search.jsx";

function App() {

    const [persons, setPersons] = useState([]);
    const [lookingFor, setLookingFor] = useState('');

    const handleLookingForChange = (value) => {
        setLookingFor(value);
    };

    useEffect(() => {
        let filteredPersons = allPersonsData;
        if (lookingFor) {
            filteredPersons = allPersonsData.filter(person => person.genderDictId === lookingFor);
        }
        setPersons(filteredPersons);
    }, [lookingFor]);

    return (
        <main>
            <div>
                <h3>Search block:</h3>
                <Search onLookingForChange={handleLookingForChange} />
            </div>
            <br/><br/>

            <div>
                <section className='container'>
                    <h3> from {persons.length} first 12:</h3>
                    <Persons tours={persons.slice(0, 12)} />
                </section>
            </div>
        </main>
    );
}

export default App;
