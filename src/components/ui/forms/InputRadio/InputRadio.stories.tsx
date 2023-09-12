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

export const Primary: StoryFn = (args) => <InputRadio id={'test1'} text='text' checked={true} value='def' onChange={() => {}} {...args} />;
Primary.args = {};
