import * as React from 'react';
import { Meta, StoryFn, StoryObj } from '@storybook/react';
import Button from './Button';

const meta: Meta<typeof Button> = {
    title: 'UI/Buttons/Button',
    component: Button,
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = {
    args: {
        className: 'test',
        children: 'def111',
        type: '',
    },
    argTypes: {
        className: {
            description: 'Имя класса стилей css',
        },
        type: {
            description: 'Тип кнопки',
            options: ['nonDef', 'def'],
            control: { type: 'radio' },
        },
        children: {
            description: 'children description',
            name: 'text',
        },
    },
};
