import React from 'react';
import Button from '../../../ui/Button/Button';
import './AddVideo2.scss';
import IconRenderer from '../../../ui/IconRenderer/IconRenderer';

const AddVideo2 = () => {
    return (
        <div className='addvideo2'>
            <div className='addvideo2__top'>
                <p className='addvideo2__text'>Adding a new video</p>
                <div>
                    <Button className='addvideo2__btn btn-innactive'>Continue</Button>
                    <div className='addvideo2__dots-wr'>
                        <IconRenderer id='dots' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddVideo2;
