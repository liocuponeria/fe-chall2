import React from 'react'
import { Story, Meta } from '@storybook/react'

import Products from 'components/Products'
import { mockProducts } from '../../../tests/mock/products'

export default {
  title: 'Components/Products',
  component: Products,
} as Meta

interface IProductProps {
  products: {
    id: number
    title: string
    price: number
    description: string
    category: string
    image: string
  }[]
}

const Template: Story<IProductProps> = (args) => <Products {...args} />

export const Mock = Template.bind({})
Mock.args = { products: mockProducts }
