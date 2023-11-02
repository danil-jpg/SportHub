import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Input from './Input';

export default {
    title: 'UI/Forms/Input/Default',
    component: Input,
    argTypes: {
        placeholder: {
            description: 'placeholder',
            type: 'string',
        },
        value: {
            type: 'string',
        },
    },
};

export const Primary: StoryFn = (args) => <Input {...args} />;
