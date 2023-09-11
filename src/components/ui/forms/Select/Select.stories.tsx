import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Select from './Select';

export default {
    title: 'UI/Forms/Input/Select',
    component: Select,
    argTypes: {
        className: { type: 'string' },
        arr: { type: 'Array' },
        placeholder: {
            type: 'string',
        },
    },
};

export const Primary: StoryFn = (args) => <Select placeholder='test' arr={['one', 'two', 'three']} {...args} />;
Primary.args = {};
