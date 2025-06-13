import React, { useState } from 'react';

const Tour = ({ id, main_image, ad_text, ad_nickname, gender_dict_id, removeTour }) => {
  const [readMore, setReadMore] = useState(false);
  const imagePath = `/photo/${main_image}`;
  return (
    <article className='single-tour'>
      <img src={imagePath} alt={name} className='img' style={{ width: '250px', height: '250px' }}/>
      <span className='tour-price'>${gender_dict_id}</span>
      <div className='tour-info'>
        <h5>{ad_nickname}</h5>

        <p>
          {readMore ? ad_text : `${ad_text.substring(0, 200)}...`}
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
