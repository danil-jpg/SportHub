import React, { FC, Suspense } from 'react';
import './components/styles/index.scss';
import { Routes, Route } from 'react-router-dom';
import Loading from 'react-loading';

const Registration = React.lazy(() => import('./components/pages/Registration/Registration'));

const App: FC = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Routes>
                {/* Header */}
                <Route path='/registration/*' element={<Registration />} />
            </Routes>
        </Suspense>
    );
};

export default App;
