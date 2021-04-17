import React from 'react'
import { Story, Meta } from '@storybook/react'

import Header from 'components/Header'
import 'assets/fonts/css/fontello.css'

export default {
  title: 'Components/Header',
  component: Header,
} as Meta

const Template: Story = () => <Header />

export const Unique = Template.bind({})
Unique.args = {}
