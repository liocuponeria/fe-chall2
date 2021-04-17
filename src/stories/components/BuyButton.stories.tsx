import React from 'react'
import { Story, Meta } from '@storybook/react'
import 'assets/css/global.css'
import BuyButton from 'components/Button/BuyButton'

export default {
  title: 'Components/BuyButton',
  component: BuyButton,
} as Meta

interface IBuyButtonProps {
  text?: string
  href?: string
}

const Template: Story<IBuyButtonProps> = (args) => <BuyButton {...args} />

export const Unique = Template.bind({})
Unique.args = {
  text: 'Botão',
}
