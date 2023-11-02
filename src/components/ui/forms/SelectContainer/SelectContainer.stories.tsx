import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import SelectContainer from './SelectContainer';

export default {
    title: 'UI/Forms/Input/SelectContainer',
    component: SelectContainer,
};

const SelectContainerWithHooks = (): JSX.Element => {
    const [state, setState] = React.useState<string>('');

    return <SelectContainer title='' setValue={setState} value={state} placeholder='test' arr={['one', 'two', 'three']} />;
};

export const Primary: StoryFn = () => <SelectContainerWithHooks />;
