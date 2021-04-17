import React from 'react'
import { Story, Meta } from '@storybook/react'

import Product from 'components/Product'
import { mockProducts } from '../../../tests/mock/products'

export default {
  title: 'Components/Product',
  component: Product,
} as Meta

interface IProductProps {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

const Template: Story<IProductProps> = (args) => <Product {...args} title={args.title} />

export const Mock = Template.bind({})
Mock.args = mockProducts[0]

export const Mock1 = Template.bind({})
Mock1.args = mockProducts[1]
