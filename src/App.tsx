import React, { FC } from 'react';
import './components/styles/index.scss';
import Button from './components/ui/button/Button';
import InputPassword from './components/ui/Forms/InputPassword/InputPassword';
import InputContainer from './components/ui/Forms/InputContainer/InputContainer';
import Select from './components/ui/Forms/Select/Select';

const App: FC = () => {
    return (
        <div>
            {/* <Button type='unsubscribe'>Unsubscribe</Button> */}
            {/* <Input placeholder='xxxx' type='password' /> */}
            {/* <InputPassword /> */}
            {/* <InputContainer text='Email'></InputContainer> */}
            <Select></Select>
        </div>
    );
};

export default App;
