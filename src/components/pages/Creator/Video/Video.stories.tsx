import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Video from './Video';

export default {
    title: 'UI/Videos/Video',
    component: Video,
    argTypes: {},
};

export const Primary: StoryFn = (args) => <Video {...args} />;
Primary.args = {};
