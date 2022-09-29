import React from 'react';
import Button from "./button";

import { ComponentMeta, ComponentStory } from "@storybook/react";

const buttonMeta: ComponentMeta<typeof Button> = {
  title: 'My Button',
  component: Button
}

export default buttonMeta

export const Default: ComponentStory<typeof Button> = () => {
  <Button>default button</Button>
}
Default.storyName = 'Default Button Style'

export const ButtonWithSize: ComponentStory<typeof Button> = () => {
  <>
    <Button size='lg' label='Button'>large button</Button>
    <Button size='sm' label='Button' >large button</Button>
  </>
}
ButtonWithSize.storyName = '不同尺寸的按钮'