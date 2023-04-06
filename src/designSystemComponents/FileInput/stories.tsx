import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import FileInput from './index';

export default {
    title: 'FileInput',
    component: FileInput
} as ComponentMeta<typeof FileInput>;

export const Primary: ComponentStory<typeof FileInput> = (args) => (
    <FileInput {...args} />
);

Primary.args = {
    borderRadius: true,
    color: 'rgb(255, 157, 0)',
    size: 'small',
    icon: 'img',
    iconSize: 'small'
};
