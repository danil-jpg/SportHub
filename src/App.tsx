import React, { FC } from 'react';
import './components/styles/index.scss';
import Button from './components/ui/button/Button';

const App: FC = () => {
    return (
        <div>
            <Button type='unsubscribe'>Unsubscribe</Button>
        </div>
    );
};

export default App;
