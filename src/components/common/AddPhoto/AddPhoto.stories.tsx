import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import AddPhoto from './AddPhoto';

export default {
    title: 'UI/Common/AddPhoto',
    component: AddPhoto,
    argTypes: {},
};

export const Primary: StoryFn = (args) => <AddPhoto classname='"' {...args} />;
Primary.args = {};
