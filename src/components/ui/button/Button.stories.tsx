import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Button from './Button';
import { Description } from '@storybook/blocks';

export default {
    title: 'UI/Buttons/Button',
    component: Button,
    tags: ['autodocs'],
    label: 'primary',
    parametrs: {
        docs: {
            description: {
                component: 'Another description, overriding the comments',
            },
        },
    },
    argTypes: {
        className: {
            description: 'Имя класса стилей css',
        },
        argTypes: { onClick: { action: 'clicked' } },
        type: {
            description: 'Тип кнопки',
            options: ['nonDef', 'def'],
            control: { type: 'radio' },
        },
        children: {
            description: 'children description',

            name: 'text',
            // defaultValue: 'Button text', // does not display on preview
        },
    },
};

export const Primary: StoryFn = (args) => <Button {...args}></Button>;
Primary.args = {
    children: 'testwelsk;j',
};
