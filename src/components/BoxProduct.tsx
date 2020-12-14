import React from 'react';
import Link from 'next/link';


export default function BoxProduct () {
  
  return (
    <section className="produto">
      <img src="/images/tenis.jpg" alt="logo" width="328" height="203" />
      <h4>Sugestões para você</h4>
      <p>R$ 39,90</p>
      <Link href="detalhes">
        <button type="button">ver produto</button>
      </Link>
    </section>
  );
}
