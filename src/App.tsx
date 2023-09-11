import React, { FC } from 'react';
import './components/styles/index.scss';
import Button from './components/ui/button/Button';
import Input from './components/ui/forms/input/Input';

const App: FC = () => {
    return (
        <div>
            {/* <Button type='unsubscribe'>Unsubscribe</Button> */}
            <Input placeholder='xxxx' type='password' />
        </div>
    );
};

export default App;
