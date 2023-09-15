import React, { FC } from 'react';
import './Couch.scss';

interface ICouchCard {
    name: string;
    occupation: string;
    backgroundImage?: string;
}

const CouchCard: FC<ICouchCard> = ({ name = 'John Doe', occupation = 'Couch', backgroundImage = '' }) => {
    return (
        <div className='couch__item' style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className='couch__item__info'>
                <p className='couch__item_name'>{name}</p>
                <p className='couch__item_occupation'>{occupation}</p>
            </div>
        </div>
    );
};

export default CouchCard;
