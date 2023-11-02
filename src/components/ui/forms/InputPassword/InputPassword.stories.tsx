import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import InputPassword from './InputPassword';

export default {
    title: 'UI/Forms/Input/Password',
    component: InputPassword,
    argTypes: {
        placeholder: {
            description: 'placeholder',
            type: 'string',
        },
        value: {
            type: 'string',
        },
        type: {
            options: ['text', 'password'],
            control: { type: 'radio' },
        },
    },
};

export const Primary: StoryFn = (args) => <InputPassword {...args} />;
Primary.args = {};
