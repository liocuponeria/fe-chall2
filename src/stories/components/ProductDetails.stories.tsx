import React from 'react'
import { Story, Meta } from '@storybook/react'

import ProductDetails from 'components/ProductDetails'
import { mockProducts } from '../../../tests/mock/products'

export default {
  title: 'Components/ProductDetails',
  component: ProductDetails,
} as Meta

interface IProductProps {
  id: number
  title: string
  price: number
  description: string
  category: string
  image: string
}

const Template: Story<IProductProps> = (args) => <ProductDetails {...args} />

export const Mock0 = Template.bind({})
Mock0.args = mockProducts[0]

export const Mock1 = Template.bind({})
Mock1.args = mockProducts[1]
