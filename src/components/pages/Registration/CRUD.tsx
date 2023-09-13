import React, { FC, useEffect, useState } from 'react';
import { DB } from '../../../config/firebase-config';
import { getDocs, collection } from 'firebase/firestore';

interface IMovieList {
    title: string;
    data: number;
    receivedAnOskar: boolean;
    id: string;
}

const CRUD: FC = () => {
    const [movieList, setMovieList] = useState([{}]);

    const moviesCollectionRef = collection(DB, 'movies');

    const obj: IMovieList = {
        title: 'xxx',
        data: 223,
        receivedAnOskar: true,
        id: 'sdf',
    };

    useEffect(() => {
        const getMovieList = async () => {
            try {
                const data = await getDocs(moviesCollectionRef);
                const filteredData = data.docs.map((el) => ({ ...el.data(), id: el.id }));
                console.log(filteredData);
                setMovieList(filteredData);
            } catch (err) {
                console.error(err);
            }
        };

        getMovieList();
    }, []);

    return (
        <div>
            {movieList.map((el) => (
                <div>
                    <h1>
                        {movieList.map((el) => {
                            return <div>{el.title}</div>;
                        })}
                    </h1>
                </div>
            ))}
        </div>
    );
};

export default CRUD;
