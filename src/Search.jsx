import React, { useState } from 'react';

const Search = ({ onLookingForChange }) => {
    const [gender, setGender] = useState('');
    const [lFGender, setLFGender] = useState('');
    const [ageFrom, setAgeFrom] = useState('');
    const [ageTo, setAgeTo] = useState('');
    const [purpose, setPurpose] = useState('');

    const handleLFGenderChange = (event) => {
        const selectedValue = event.target.value;
        setLFGender(selectedValue);
        onLookingForChange(selectedValue);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        // Handle form submission logic here
        console.log({
            gender,
            lFGender,
            ageFrom,
            ageTo,
            purpose
        });
    };

    return (
        <form className="search-form" onSubmit={handleSubmit}>
            <div>
                <label htmlFor="Looking For">Looking for:</label>
                <select
                    id="lFGender"
                    name="lFGender"
                    value={lFGender}
                    onChange={handleLFGenderChange}
                >
                    <option value="">Select</option>
                    <option value="man">Man</option>
                    <option value="fem">Woman</option>
                </select>
            </div>

            {/*<div>
                <label htmlFor="Gender">I am:</label>
                <select id="gender" name="gender" value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">Select</option>
                    <option value="man">Man</option>
                    <option value="fem">Woman</option>
                </select>
            </div>
            <div>
                <label htmlFor="ageFrom">Age from:</label>
                <input
                    type="number"
                    id="ageFrom"
                    name="ageFrom"
                    min="18"
                    max="99"
                    value={ageFrom}
                    onChange={(e) => setAgeFrom(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="ageTo">Age to:</label>
                <input
                    type="number"
                    id="ageTo"
                    name="ageTo"
                    min="18"
                    max="99"
                    value={ageTo}
                    onChange={(e) => setAgeTo(e.target.value)}
                />
            </div>
            <div>
                <label htmlFor="purpose">Purpose of acquaintance:</label>
                <select id="purpose" name="purpose" value={purpose} onChange={(e) => setPurpose(e.target.value)}>
                    <option value="">Select</option>
                    <option value="dating">Dating</option>
                    <option value="relationship">Relationship</option>
                    <option value="marriage">Marriage</option>
                </select>
            </div>
            <button type="submit">Search</button>*/}
        </form>
    );
};

export default Search;