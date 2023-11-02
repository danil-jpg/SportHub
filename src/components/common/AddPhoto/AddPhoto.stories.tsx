import React, { useState } from 'react';
import { StoryFn } from '@storybook/react';
import AddPhoto from './AddPhoto';

export default {
    title: 'common/AddPhoto',
    component: AddPhoto,
};

const AddPhotoWithLogic = () => {
    const [file, setFile] = useState<File | string | null>(null);

    return (
        <div style={{ maxWidth: '441px' }}>
            <AddPhoto classname='' file={file} setFile={setFile} />
        </div>
    );
};

export const Primary: StoryFn = () => <AddPhotoWithLogic />;
