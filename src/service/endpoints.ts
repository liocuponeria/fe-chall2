export const productsEndPoint = 'products'

export const productsInCategoryEndPoint = (category: string): string =>
  `products/category/${category}`

export const productByIdEndPoint = (id: string | string[]): string => `products/${id}`
