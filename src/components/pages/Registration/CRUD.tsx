import React, { FC, useEffect, useState } from 'react';
import { DB, storage } from '../../../config/firebase-config';
import { getDocs, collection, addDoc, doc, deleteDoc } from 'firebase/firestore';
import Button from '../../ui/Button/Button';
import Input from '../../ui/Forms/Input/Input';
import { ref, uploadBytes } from 'firebase/storage';

const CRUD: FC = () => {
    const [movieList, setMovieList] = useState([{}]);

    const moviesCollectionRef = collection(DB, 'movies');

    const [file, setFile] = useState<File | null>(null);

    const onDeleteClick = async (delId: string) => {
        const movieDoc = doc(DB, 'movies', delId);
        await deleteDoc(movieDoc);
    };

    const uploadFile = async () => {
        if (!file) {
            return;
        }
        console.log(file);
        const filesFolderRef = ref(storage, `photoes/${file.name}`);
        try {
            await uploadBytes(filesFolderRef, file);
        } catch (e) {
            alert(e);
        }
    };

    useEffect(() => {
        const getMovieList = async () => {
            try {
                const data = await getDocs(moviesCollectionRef);
                const filteredData = data.docs.map((el) => ({ ...el.data(), id: el.id }));
                console.log(filteredData);
                setMovieList(filteredData);
                // await addDoc(moviesCollectionRef, {
                //     title: 'Some',
                //     releaseData: 2004,
                //     recievedOskar: true,
                // });
            } catch (err) {
                console.error(err);
            }
        };

        getMovieList();
    }, []);

    return (
        <div>
            {/* {movieList.map((el) => (
                <div>
                    <h1>
                        {movieList.map((el) => {
                            return (
                                <div>
                                    <Button onClickHandler={() => onDeleteClick(el.id)}>DeleteShrek</Button>
                                    {el.title}
                                </div>
                            );
                        })}
                    </h1>
                </div>
            ))} */}
            <input
                type='file'
                onChange={(e) => {
                    if (e.target.files != null) {
                        setFile(e.target.files[0]);
                    }
                }}
            />
            <Button onClickHandler={() => uploadFile()}>Upload</Button>
        </div>
    );
};

export default CRUD;
