import React, { FC } from 'react';
import './components/styles/index.scss';
import { Routes, Route } from 'react-router-dom';

const Registration = React.lazy(() => import('./components/pages/Registration/Registration'));

const App: FC = () => {
    return (
        <Routes>
            {/* Header */}
            <Route path='/registration/*' element={<Registration />} />
        </Routes>
    );
};

export default App;
