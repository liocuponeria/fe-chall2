import React from 'react'
import { Story, Meta } from '@storybook/react'

import SelectBox from 'components/SelectBox/SelectBox'

export default {
  title: 'Components/SelectBox',
  component: SelectBox,
} as Meta

const Template: Story = () => <SelectBox />

export const Unique = Template.bind({})
Unique.args = {}
