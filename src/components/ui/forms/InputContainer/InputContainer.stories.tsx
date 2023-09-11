import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import InputContainer from './InputContainer';

export default {
    title: 'UI/Forms/Input/InputContainer',
    component: InputContainer,
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
        text: {
            type: 'string',
        },
    },
};

export const Primary: StoryFn = (args) => <InputContainer {...args} />;
Primary.args = {};
