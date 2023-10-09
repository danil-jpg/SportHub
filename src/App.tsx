import React, { FC, Suspense } from 'react';
import './components/styles/index.scss';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/common/Loading/Loading';
import { Link } from 'react-router-dom';

const Registration = React.lazy(() => import('./components/pages/Registration/Registration'));
const Creator = React.lazy(() => import('./components/pages/Creator/Creator'));
const User = React.lazy(() => import('./components/pages/User/User'));

const App: FC = () => {
    const LinkList = () => {
        return (
            <div>
                <Link to={'/registration/signUp'}>Регистрация</Link>
                <Link to={'/registration/signIn'}> Вход</Link>
                <Link to={'/creator/home'}>home</Link>
                <Link to={'/user/home'}>Пользователь главная</Link>
                {/* <Link>Сам Сброс</Link> */}
            </div>
        );
    };

    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route index element={<LinkList />} />
                <Route path='/registration/*' element={<Registration />} />
                <Route path='/creator/*' element={<Creator />} />
                <Route path='/user/*' element={<User />} />
            </Routes>
        </Suspense>
    );
};

export default App;
