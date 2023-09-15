import React, { FC, useEffect, useRef, useState } from 'react';
import './RegistratoinCouch.scss';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import { DB, storage } from '../../../config/firebase-config';
import { getDocs, collection, getDoc } from 'firebase/firestore';
import CouchCard from './CouchCard/CouchCard';
import Loading from '../Loading/Loading';
import { v1 } from 'uuid';
import { getDownloadURL, ref, getStorage, listAll } from 'firebase/storage';

const RegistrationCouch = () => {
    const [leftArr, setLeftArr] = useState([]);
    const [rightArr, setRightArr] = useState();

    let [filteredData, setFilteredData] = useState();

    const [couchList, setCouchList] = useState();
    const [photo, setPhoto] = useState();
    const couchCollection = collection(DB, 'Auth-Couch');

    const [photosPromisesUrl, setPhotosPromisesUrl] = useState([]);

    const [photoUrls, setPhotoUrls] = useState([]);

    register();

    const getCouchs = async () => {
        try {
            setPhotoUrls([]);
            setPhotosPromisesUrl([]);

            const data = await getDocs(couchCollection);

            const listAllRes = await listAll(ref(storage, 'Couch'));

            listAllRes.items.forEach((item) => getDownloadURL(ref(storage, item._location.path_)).then((res) => setPhotosPromisesUrl((prev) => [...prev, res])));

            filteredData = data.docs.map((el) => ({
                ...el.data(),
                id: el.id,
                imgUrl: photosPromisesUrl[el.id - 1],
            }));

            setLeftArr(filteredData.filter((el, index) => index < 5));
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getCouchs();
    }, []);

    useEffect(() => {
        console.log(leftArr);
    }, [photosPromisesUrl, filteredData, couchList]);

    if (leftArr.length < 3) {
        console.log(leftArr, photosPromisesUrl);
        return <Loading />;
    }

    return (
        <div className='couch'>
            <div className='couch__left'>
                {setTimeout(() => {
                    return photosPromisesUrl.length > 1 ? (
                        <swiper-container style={{ height: '100%' }} direction='vertical' slides-per-view='2.2' space-beetween='25px'>
                            {leftArr.map((el) => {
                                return (
                                    <swiper-slide key={el.id}>
                                        <CouchCard name={el.name} occupation={el.occupation} backgroundImage={el.imgUrl} />
                                    </swiper-slide>
                                );
                            })}
                        </swiper-container>
                    ) : (
                        ''
                    );
                }, 0)}
            </div>
            <div className='couch__right'>
                <swiper-container style={{ height: '100%' }} direction='vertical' slides-per-view='2.6'>
                    <swiper-slide>
                        <div className='couch__item'>4</div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className='couch__item'>5</div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className='couch__item'>6</div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className='couch__item'>7</div>
                    </swiper-slide>
                    <swiper-slide>
                        <div className='couch__item'>8</div>
                    </swiper-slide>
                </swiper-container>
            </div>
        </div>
    );
};

export default RegistrationCouch;
