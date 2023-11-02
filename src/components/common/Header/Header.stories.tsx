// import { Meta, StoryObj } from '@storybook/react';
// import { useState } from 'react';
// import Header from './Header';

// const meta: Meta<typeof Header> = {
//     title: 'common/Header',
//     component: Header,
// };

// export default meta;

// type Story = StoryObj<typeof Header>;

// const HeaderWithHooks = (): JSX.Element => {
//     return (
//         <div style={{ width: '100%' }}>
//             <Header />
//         </div>
//     );
// };

// export const Primary: Story = {
//     render: () => <HeaderWithHooks />,
// };

import { Meta, StoryObj } from '@storybook/react';
import { FC, useEffect, useState } from 'react';
import Header from './Header';
import { useAppDispatch, useAppSelector } from '../../hooks/redux';
import { setRegData } from '../../store/slices/registration';
import { useArgs } from '@storybook/preview-api';

const HeaderWithHooks: FC<IHeaderEmail> = ({ auth, onChange }): JSX.Element => {
    const dispatch = useAppDispatch();

    useEffect(() => {
        auth
            ? dispatch(
                  setRegData({
                      email: 'some',
                  }),
              )
            : dispatch(
                  setRegData({
                      email: '',
                  }),
              );
    }, [auth]);

    return (
        <div style={{ width: '100%' }} onClick={onChange}>
            <Header mobChildren={auth ? <div>hey</div> : <div></div>} />
        </div>
    );
};

const meta: Meta<typeof HeaderWithHooks> = {
    title: 'common/Header',
    component: HeaderWithHooks,
    tags: ['autodocs'],
    argTypes: {
        auth: {
            control: 'boolean',
            description: 'Overwritten description',
        },
    },
};

export default meta;

type Story = StoryObj<typeof HeaderWithHooks>;

interface IHeaderEmail {
    auth: boolean;
    onChange: any;
}

export const Primary: Story = {
    args: {
        auth: false,
    },
    render: function Render(args) {
        const [{ auth }, updateArgs] = useArgs();

        function onChange() {
            updateArgs({ auth: !auth });
        }

        return <HeaderWithHooks {...args} onChange={onChange} auth={auth} />;
    },
};
