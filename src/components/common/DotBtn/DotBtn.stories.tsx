import { Meta, StoryObj } from '@storybook/react';
import DotBtn from './DotBtn';
import { useState } from 'react';

const meta: Meta<typeof DotBtn> = {
    title: 'common/DotBtn',
    component: DotBtn,
};

export default meta;

type Story = StoryObj<typeof DotBtn>;

const DotBtnWithHooks = (): JSX.Element => {
    const [state, setState] = useState(false);

    return <DotBtn menu={state} onClickHandler={() => setState(!state)} />;
};

export const Primary: Story = {
    render: () => <DotBtnWithHooks />,
};
