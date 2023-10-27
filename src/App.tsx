import React, { FC, Suspense } from 'react';
import './components/styles/index.scss';
import { Routes, Route } from 'react-router-dom';
import Loading from './components/common/Loading/Loading';

const Registration = React.lazy(() => import('./components/pages/Registration/Registration'));
const Creator = React.lazy(() => import('./components/pages/Creator/Creator'));
const User = React.lazy(() => import('./components/pages/User/User'));
const UserPlayer = React.lazy(() => import('./components/pages/User/UserPlayer'));
const AuthorizedUser = React.lazy(() => import('./components/common/RedirectComp/AuthorizedUser'));

const App: FC = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                <Route path='*' element={<Registration />} />
                <Route element={<AuthorizedUser />}>
                    <Route path='/creator/*' element={<Creator />} />
                    <Route path='/user/*' element={<User />} />
                    <Route path='/video/:id' element={<UserPlayer />} />
                </Route>
            </Routes>
        </Suspense>
    );
};

export default App;
