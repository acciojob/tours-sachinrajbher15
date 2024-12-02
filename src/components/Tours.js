import React from 'react'
import Tour from './Tour'

function Tours({ fetchedData, setfetchedData }) {
    const removeTour = (id) => {
        setfetchedData(fetchedData.filter((t) => t.id !== id));
    };

    return (
        <ul className='tours-container'>
            {fetchedData.map((data) => (
                <Tour key={data.id} data={data} removeTour={removeTour} />
            ))}
        </ul>
    )
}

export default Tours;
