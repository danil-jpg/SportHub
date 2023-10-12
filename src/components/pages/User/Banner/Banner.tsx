import React, { FC } from 'react';
import IconRenderer from '../../../ui/IconRenderer/IconRenderer';
import './Banner.scss';
import defaultUser from '../../../../assets/img/user/card/default-user.jpg';
import defaultUserW from '../../../../assets/img/user/card/default-user.jpg?as=webp';
import Button from '../../../ui/Button/Button';

const Banner: FC = () => {
    return (
        <div className=' banner'>
            <img src='' alt='banner' className=' banner_img' />
            <div className=' banner__left'>
                <div className=' banner_avatar-wr'>
                    <img className=' banner_avatar_img' alt='avatar' src={defaultUser} />
                    <p className=' banner_avatar_text'>Eleanor Pena</p>
                </div>

                <div className=' banner__center'>
                    <div className=' banner__data'>
                        <IconRenderer id='subs' />
                        <div className=' banner__inner-data-wr'>
                            <p className=' banner__data-num'>6.4K</p>
                            <p className=' banner__data-text'>Subscribers</p>
                        </div>
                    </div>
                    <div className=' banner__data'>
                        <IconRenderer id='camera' />
                        <div className=' banner__inner-data-wr'>
                            <p className=' banner__data-num'>257</p>
                            <p className=' banner__data-text'>Videos</p>
                        </div>
                    </div>
                </div>
                <Button className=' banner__subs-btn'>Subscribe</Button>
            </div>
        </div>
    );
};

export default Banner;
