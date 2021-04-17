import React from 'react'
import { Story, Meta } from '@storybook/react'
import 'assets/fonts/css/fontello.css'

import Footer from 'components/Footer'

export default {
  title: 'Components/Footer',
  component: Footer,
} as Meta

const Template: Story = () => <Footer />

export const Unique = Template.bind({})
Unique.args = {}
