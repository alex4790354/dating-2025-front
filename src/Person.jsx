import React, { useState } from 'react';

const Tour = ({ id, language, genderDictId, msDictId, dateOfBirth, mainImage, adText, adNickname, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const imagePath = `/photo/${mainImage}`;
  return (
    <article className='single-tour'>
      <img src={imagePath} alt={name} className='img' />   {/*style={{ width: '250px', height: '250px' }}  />*/}
      <span className='tour-price'>${genderDictId}</span>
      <div className='tour-info'>
        <h5>{adNickname}</h5>

        <p>
          {readMore ? adText : `${adText.substring(0, 200)}...`}
          <button className='info-btn' onClick={() => setReadMore(!readMore)}>
            {readMore ? 'show less' : '  read more'}
          </button>
        </p>
        <button
          className='delete-btn btn-block btn'
          onClick={() => removeTour(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};

export default Tour;
