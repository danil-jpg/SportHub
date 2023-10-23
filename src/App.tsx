import React, { FC, Suspense } from 'react';
import './components/styles/index.scss';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/common/Loading/Loading';
import { Link } from 'react-router-dom';
import UserPlayer from './components/pages/User/UserPlayer';

const Registration = React.lazy(() => import('./components/pages/Registration/Registration'));
const Creator = React.lazy(() => import('./components/pages/Creator/Creator'));
const User = React.lazy(() => import('./components/pages/User/User'));

const App: FC = () => {
    const LinkList = () => {
        return (
            <div>
                <Link to={'/registration/signUp'}>Регистрация </Link>
                <Link to={'/registration/signIn'}> Вход </Link>
                <Link to={'/creator/home'}>home </Link>
                <Link to={'/user/home'}>Пользователь главная </Link>
                <Link to={'/video'}>video </Link>
            </div>
        );
    };

    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route element={<LinkList />} index />
                <Route path='/registration/*' element={<Registration />} />
                <Route path='/creator/*' element={<Creator />} />
                <Route path='/user/*' element={<User />} />
                <Route path='/video/*' element={<UserPlayer />} />
            </Routes>
        </Suspense>
    );
};

export default App;
