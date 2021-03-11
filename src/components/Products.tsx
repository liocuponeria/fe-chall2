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

export default function Products(props: Props) {
  const { product } = props;
  return (
    <section key={product?.id} className="product">
      <img src={product?.image} alt="logo" width="328" height="203" />
      <h4>{product?.title}</h4>
      <p>
        {product?.price.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'})}
      </p>
      <Link key={product?.id} href={`/detalhes/${product?.id}`}>
        <button type="button">ver produto</button>
      </Link>
    </section>
  );
}