import React from 'react';
import Person from "./Person.jsx";

const Tours = ({ tours, removeTour }) => {
  return (
    <section>
      <div className='title'>
        <h2>our tours</h2>
        <div className='title-underline'></div>
      </div>
      <div className='tours'>
        {tours.map((tour) => {
          return <Person key={tour.id} {...tour} removeTour={removeTour} />;
        })}
      </div>
    </section>
  );
};

export default Tours;
