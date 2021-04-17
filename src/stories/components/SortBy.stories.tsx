import React from 'react'
import { Story, Meta } from '@storybook/react'

import SortBy from 'components/SortBy'

export default {
  title: 'Components/SortBy',
  component: SortBy,
} as Meta

const Template: Story = () => <SortBy />

export const Unique = Template.bind({})
Unique.args = {}
