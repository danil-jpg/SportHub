import React, { useEffect, useState } from 'react';
import './RegistratoinCouch.scss';
import { register } from 'swiper/element/bundle';
import 'swiper/css';
import { DB, storage } from '../../../config/firebase-config';
import { getDocs, collection } from 'firebase/firestore';
import CouchCard from './CouchCard/CouchCard';
import Loading from '../Loading/Loading';
import { getDownloadURL, ref } from 'firebase/storage';

const RegistrationCouch = () => {
    const [leftArr, setLeftArr] = useState([]);
    const [rightArr, setRightArr] = useState();

    let filteredData = [];

    const couchCollection = collection(DB, 'Auth-Couch');

    register();

    const getCouchs = async () => {
        const couchPhotos = [];

        for (let i = 1; i < 11; i++) {
            try {
                let photo = await getDownloadURL(ref(storage, `Couch/${i}.png`));
                couchPhotos.push(photo);
            } catch (e) {
                console.log(e);
            }
        }

        try {
            const data = await getDocs(couchCollection);

            filteredData = data.docs.map((el, index) => ({
                ...el.data(),
                id: el.id,
                imgUrl: couchPhotos[index],
            }));

            setLeftArr(filteredData.filter((el, index) => index < 4));

            setRightArr(filteredData.filter((el, index) => index >= 4));
        } catch (err) {
            console.error(err);
        }
    };

    useEffect(() => {
        getCouchs();
    }, []);

    if (leftArr.length < 3) {
        return <Loading />;
    }

    return (
        <div className='couch'>
            <div className='couch__left'>
                <swiper-container style={{ height: '100%' }} direction='vertical' slides-per-view='2.2' space-beetween='25px'>
                    {leftArr.map((el) => {
                        return (
                            <swiper-slide key={el.id}>
                                <CouchCard name={el.name} occupation={el.occupation} backgroundImage={el.imgUrl} />
                            </swiper-slide>
                        );
                    })}
                </swiper-container>
            </div>
            <div className='couch__right'>
                <swiper-container style={{ height: '100%' }} direction='vertical' slides-per-view='2.6' space-beetween='25px'>
                    {rightArr.map((el) => {
                        return (
                            <swiper-slide key={el.id}>
                                <CouchCard name={el.name} occupation={el.occupation} backgroundImage={el.imgUrl} />
                            </swiper-slide>
                        );
                    })}
                </swiper-container>
            </div>
        </div>
    );
};

export default RegistrationCouch;
