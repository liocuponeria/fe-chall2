import React from 'react'
import { Story, Meta } from '@storybook/react'
import 'assets/fonts/css/fontello.css'
import NavBar from 'components/NavBar'

export default {
  title: 'Components/NavBar',
  component: NavBar,
} as Meta

const Template: Story = () => <NavBar />

export const Unique = Template.bind({})
Unique.args = {}
