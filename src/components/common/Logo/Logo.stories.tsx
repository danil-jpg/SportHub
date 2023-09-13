import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Logo from './Logo';

export default {
    title: 'UI/Logo/Logo',
    component: Logo,
    argTypes: {},
};

export const Primary: StoryFn = (args) => <Logo {...args} />;
Primary.args = {};
