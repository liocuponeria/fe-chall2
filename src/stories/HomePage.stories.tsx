import React from 'react'
import { Story } from '@storybook/react'

import HomePage from '../pages/index'

interface IButtonProps {
  products: {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
  }[]
}

const Template: Story<IButtonProps> = (args) => <HomePage {...args} />

export const Primary = Template.bind({})

Primary.args = {
  products: [],
}
