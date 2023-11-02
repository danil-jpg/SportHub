import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import TextareaContainer from './TextareaContainer';

export default {
    title: 'UI/Forms/Input/TextareaContainer',
    component: TextareaContainer,
    argTypes: {
        placeholder: {
            description: 'placeholder',
            type: 'string',
        },
        value: {
            type: 'string',
        },

        text: {
            type: 'string',
        },
    },
};

export const Primary: StoryFn = (args) => <TextareaContainer text='def' {...args} />;
Primary.args = {};
