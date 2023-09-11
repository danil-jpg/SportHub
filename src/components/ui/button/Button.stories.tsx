import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';

export default {
    title: 'UI/Buttons/Button',
    component: Button,
    argTypes: {
        type: {
            description: 'Тип кнопки',
            options: ['def', 'unsubscribe'],
            control: { type: 'radio' },
        },
        children: {
            type: 'string',
            name: 'children',
        },
        className: {
            description: 'Имя класса стилей css',
        },
        onClick: {
            description: 'callback',
        },
    },
};

export const Primary: StoryFn = (args) => <Button {...args} />;
Primary.args = {};
