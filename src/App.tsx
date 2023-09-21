import React, { FC, Suspense } from 'react';
import './components/styles/index.scss';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/common/Loading/Loading';
import { Link } from 'react-router-dom';

const Registration = React.lazy(() => import('./components/pages/Registration/Registration'));

const App: FC = () => {
    const LinkList = () => {
        return (
            <div>
                <Link to={'/registration/signUp'}>Вход</Link>
                <Link to={'/registration/signIn'}>Регистрация</Link>
                {/* <Link to={'registration/personalInfo'}>Сброс пароля (оповещение)</Link> */}
                {/* <Link>Сам Сброс</Link> */}
            </div>
        );
    };

    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route index element={<LinkList />} />
                <Route path='/registration/*' element={<Registration />} />
            </Routes>
        </Suspense>
    );
};

export default App;
