import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import InputPasswordContainer from './InputPasswordContainer';

export default {
    title: 'UI/Forms/Input/InputPasswordContainer',
    component: InputPasswordContainer,
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

export const Primary: StoryFn = (args) => <InputPasswordContainer text='some' {...args} />;
Primary.args = {};
