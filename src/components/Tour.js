import React, { useState } from 'react';

function Tour({ data, removeTour }) {
    const [showMore, setShowMore] = useState(false);

    return (
        <li>
            <div className='tour-container'>
                <h3 id='tour-name'>{data.name}</h3>
                <p id='tour-info' className={showMore ? 'expanded' : ''}>
                    {showMore ? data.info : `${data.info.substring(0, 200)}...`}
                    <button onClick={() => setShowMore(!showMore)}>
                        {showMore ? "Show Less" : "Read More"}
                    </button>
                </p>
                <img id='tour-image' className={showMore ? 'expanded' : ''} src={data.image} alt={data.name}></img>
                <p id='tour-price'>Rs. {data.price}</p>
                <button id='remove-btn' onClick={() => removeTour(data.id)}>Not Interested</button>
            </div>
        </li>
    );
}

export default Tour;
