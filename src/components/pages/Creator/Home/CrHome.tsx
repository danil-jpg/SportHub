import React, { FC, useEffect, useState } from 'react';
import Button from '../../../ui/Button/Button';
import IconRenderer from '../../../ui/IconRenderer/IconRenderer';
import '../CrHome.scss';
import Video from '../Video/Video';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../hooks/redux';
import { v1 } from 'uuid';
import swal from 'sweetalert';
import getDate from '../../../utils/getDate';
import Loading from '../../../common/Loading/Loading';
import { getUsers } from '../../../store/slices/users';
import { doc, getDoc } from 'firebase/firestore';
import { DB } from '../../../../config/firebase-config';
import { IShuffledVideo } from '../../User/User';
// import { getVideo } from '../../../store/slices/videos';

interface IVideo {
    category: string;
    descr: string;
    previewUrl: string;
    shopify: string;
    title: string;
    videoUrl: string;
    date?: any;
    email?: string;
}

const CrHome: FC = () => {
    const [videosArr, setVideosArr] = useState<IVideo[] | any[]>([]);
    const [filteredVideosArr, setFilteredVideosArr] = useState<IVideo[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);

    const [activeButtonArr, setActiveButtonArr] = useState<boolean[]>([true, false, false, false]);

    let videosIds: string[] = [];

    const dispatch = useAppDispatch();

    const selector = useAppSelector((state) => state.regSlice.regData);

    const getVideoData = async () => {
        try {
            videosIds = await getDoc(doc(DB, 'users', selector.email)).then((res) => res.data()?.videosIds);

            if (videosIds && videosIds?.length > 0) {
                videosIds.map(async (el) => {
                    const docRef = await doc(DB, 'videos', el);
                    const getVideo: any = (await getDoc(docRef)).data();
                    setVideosArr((prev) => [...prev, getVideo]);
                    setFilteredVideosArr((prev) => [...prev, getVideo]);
                    setIsLoaded(true);
                });
            }
            setIsLoaded(true);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        dispatch(getUsers());
        getVideoData();
    }, []);

    useEffect(() => {
        // getVideoData();
    }, [videosIds]);

    useEffect(() => {
        // console.log(videosArr);
    }, [videosArr]);

    const filterByType = (type: string) => {
        if (type === 'All') {
            setFilteredVideosArr(videosArr);
        } else if (type === 'Mind') {
            setFilteredVideosArr(videosArr.filter((el) => el.category === 'Mind'));
        } else if (type === 'Body') {
            setFilteredVideosArr(videosArr.filter((el) => el.category === 'Body'));
        } else if (type === 'Soul') {
            setFilteredVideosArr(videosArr.filter((el) => el.category === 'Soul'));
        } else {
            swal('Something went wrong');
        }
    };

    const navigate = useNavigate();

    if (!isLoaded) {
        return <Loading />;
    }
    return (
        <div className='creator-container creator'>
            <div className='creator__top'>
                <div className='creator__video-play-tabs'>
                    <div className='creator__tab creator__video_tab active'>Your video</div>
                    <div className='creator__tab creator__play_tab' onClick={() => navigate('../home-cr-playlist')}>
                        Playlists
                    </div>
                </div>
                <Button
                    className='creator__add-video-btn'
                    onClickHandler={() => {
                        navigate('../addvideo1');
                    }}
                >
                    <IconRenderer id='plus' className='creator__add-video-svg' />
                    Add new video
                </Button>
            </div>
            <div className='creator__types'>
                <div
                    className={`creator__type ${activeButtonArr[0] ? 'active' : ''} creator__type_all`}
                    onClick={(e) => {
                        filterByType('All');
                        setActiveButtonArr([true, false, false, false]);
                    }}
                >
                    All
                </div>
                <div
                    className={`creator__type ${activeButtonArr[1] ? 'active' : ''} creator__type_all`}
                    onClick={() => {
                        setActiveButtonArr([false, true, false, false]);
                        filterByType('Mind');
                    }}
                >
                    Mind
                </div>
                <div
                    className={`creator__type ${activeButtonArr[2] ? 'active' : ''} creator__type_all`}
                    onClick={() => {
                        setActiveButtonArr([false, false, true, false]);
                        filterByType('Body');
                    }}
                >
                    Body
                </div>
                <div
                    className={`creator__type ${activeButtonArr[3] ? 'active' : ''} creator__type_all`}
                    onClick={() => {
                        setActiveButtonArr([false, false, false, true]);
                        filterByType('Soul');
                    }}
                >
                    Soul
                </div>
            </div>
            <div className='creator__videos'>
                {filteredVideosArr
                    ? filteredVideosArr.map((el, index) => {
                          return <Video title={el.title} date={getDate(el.date)} previewUrl={el.previewUrl} key={v1()}></Video>;
                      })
                    : ''}
            </div>
        </div>
    );
};

export type { IVideo };
export default CrHome;
