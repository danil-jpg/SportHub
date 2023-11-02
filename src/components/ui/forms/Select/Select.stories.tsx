import * as React from 'react';
import { Meta, StoryFn } from '@storybook/react';
import Select from './Select';

export default {
    title: 'UI/Forms/Input/Select',
    component: Select,
};

interface Props {
    placeholder: string;
}

const SelectWithHooks: React.FC<Props> = ({ placeholder }): JSX.Element => {
    const [state, setState] = React.useState<string>('');

    return <Select placeholder={placeholder} setValue={setState} value={state} arr={['one', 'two', 'three']} />;
};

export const Primary: StoryFn = (args) => <SelectWithHooks placeholder={args?.placeholder} />;
Primary.args = {
    placeholder: 'xxx',
};
