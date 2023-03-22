import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';

import Input from './index';

export default {
    title: 'Input',
    component: Input
} as ComponentMeta<typeof Input>;

export const Primary: ComponentStory<typeof Input> = (args) => (
    <Input {...args} />
);
