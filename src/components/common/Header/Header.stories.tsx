import { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import Header from './Header';

const meta: Meta<typeof Header> = {
    title: 'common/Header',
    component: Header,
};

export default meta;

type Story = StoryObj<typeof Header>;

const HeaderWithHooks = (): JSX.Element => {
    return (
        <div style={{ width: '100%' }}>
            <Header />
        </div>
    );
};

export const Primary: Story = {
    render: () => <HeaderWithHooks />,
};
