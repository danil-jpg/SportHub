/** @type { import('@storybook/react').Preview } */
import React from 'react';
import { Provider, useSelector } from 'react-redux';
import { MemoryRouter } from 'react-router';
import store from '../src/components/store/store';
import '../src/components/styles/index.scss';
import { Preview } from '@storybook/react';

const preview: Preview = {
    decorators: [
        (Story) => (
            <Provider store={store}>
                <MemoryRouter initialEntries={['/']}>
                    <div style={{ height: '100vh', width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                        <Story />
                    </div>
                </MemoryRouter>
            </Provider>
        ),
    ],
    parameters: {
        options: {
            storySort: (a, b) => (a.id === b.id ? 0 : a.id.localeCompare(b.id, undefined, { numeric: true })),
        },
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/,
            },
        },
    },
};

export default preview;
