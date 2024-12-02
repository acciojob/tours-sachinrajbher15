import React, { useState } from 'react';

function Tour({ data, removeTour }) {
    const [showMore, setShowMore] = useState(false);

    return (
        <li>
            <div className='tour-container'>
                <h3 id='tour-name'>{data.name}</h3>
                <p id='tour-item-para-rec6d6T3q5EBIdCfD' className={showMore ? 'expanded' : ''}>
                    {showMore ? data.info : `${data.info.substring(0, 200)}...`}
                    <button id='see-more-rec6d6T3q5EBIdCfD' onClick={() => setShowMore(!showMore)}>
                        {showMore ? "Show Less" : "Read More"}
                    </button>
                </p>
                <img id='tour-image' className={showMore ? 'expanded' : ''} src={data.image} alt={data.name}></img>
                <p id='tour-price'>Rs. {data.price}</p>
                <button id='delete-btn-rec6d6T3q5EBIdCfD' onClick={() => removeTour(data.id)}>Not Interested</button>
            </div>
        </li>
    );
}

export default Tour;
