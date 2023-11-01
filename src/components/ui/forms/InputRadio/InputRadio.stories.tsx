import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import InputRadio from './InputRadio';

export default {
    title: 'UI/Forms/Input/InputRadio',
    component: InputRadio,
    argTypes: {
        checked: {
            options: ['true', 'false'],
            control: { type: 'radio' },
        },
        value: {
            type: 'string',
        },
    },
};

const InputRadioWithHooks = () => {
    const [type, setType] = React.useState<string>('User');

    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <InputRadio
                checked={type === 'User'}
                id={'test1'}
                text='text'
                value='User'
                onChange={(e) => {
                    setType(e.target.value);
                }}
            />
            <InputRadio
                checked={type === 'Creator'}
                id={'test2'}
                text='text2'
                value='Creator'
                onChange={(e) => {
                    setType(e.target.value);
                }}
            />
        </div>
    );
};

export const Primary: StoryFn = (args) => <InputRadioWithHooks />;
