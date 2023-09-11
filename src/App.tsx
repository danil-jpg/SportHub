import React, { FC } from 'react';
import './components/styles/index.scss';
import Button from './components/ui/button/Button';
import InputPassword from './components/ui/Forms/InputPassword/InputPassword';

const App: FC = () => {
    return (
        <div>
            {/* <Button type='unsubscribe'>Unsubscribe</Button> */}
            {/* <Input placeholder='xxxx' type='password' /> */}
            <InputPassword />
        </div>
    );
};

export default App;
