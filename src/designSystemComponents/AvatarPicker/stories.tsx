import React, { useState } from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import AvatarPicker from './index';

export default {
    title: 'AvatarPicker',
    component: AvatarPicker
} as ComponentMeta<typeof AvatarPicker>;

export const Primary: ComponentStory<typeof AvatarPicker> = (args) => {
    const [file, setFile] = useState<File>();
    return <AvatarPicker {...args} file={file} setFile={setFile} />;
};
