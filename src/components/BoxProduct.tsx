import React from 'react';
import Link from 'next/link';

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

interface Props {
  product: Product;
}

export default function BoxProduct(props: Props) {
  const { product } = props;
  return (
    <section className="produto">
      <img src={product?.image} alt="logo" width="328" height="203" />
      <h4>{product?.title}</h4>
      <p>
        R$
        {product?.price}
      </p>
      <Link href={`/detalhes/${product?.id}`}>
        <button type="button">ver produto</button>
      </Link>
    </section>
  );
}
