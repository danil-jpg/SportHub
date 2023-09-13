import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Loading from './Loading';

export default {
    title: 'UI/Loading/Loading',
    component: Loading,
    argTypes: {},
};

export const Primary: StoryFn = (args) => <Loading {...args} />;
Primary.args = {};
