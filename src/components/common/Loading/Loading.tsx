import React, { FC } from 'react';
import ReactLoading from 'react-loading';
import './Loading.scss';

const Loading: FC = () => {
    return (
        <div className='loading'>
            <ReactLoading className='loading__item' type={'spokes'} color={'#AD7955'} height={70} width={70} />
        </div>
    );
};

export default Loading;
