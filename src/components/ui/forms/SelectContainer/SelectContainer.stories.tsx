import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SelectContainer from './SelectContainer';

export default {
    title: 'UI/Forms/Input/SelectContainer',
    component: SelectContainer,
    argTypes: {
        className: { type: 'string' },
        arr: { type: 'Array' },
        placeholder: {
            type: 'string',
        },
        title: {
            type: 'string',
        },
    },
};

export const Primary: StoryFn = (args) => <SelectContainer title='test' placeholder='test' arr={['one', 'two', 'three']} {...args} />;
Primary.args = {};
