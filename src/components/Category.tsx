
import React from 'react';
import { ContainerProduct } from '../styles/products';

export default function Category() {
  return (
    <ContainerProduct>
      <section className="produto">
        <img src="images/tenis.jpg" alt="logo" width="328" height="203" />
        <h4>Camisa Masculina Matrix</h4>
        <p>R$50,00</p>
        <button type="button">ver produto</button>
      </section>
      <section className="produto">
        <img src="images/tenis.jpg" alt="logo" width="328" height="203" />
        <h4>Camisa Feminina Mulher Marvilha</h4>
        <p>R$40,00</p>
        <button type="button">ver produto</button>
      </section>
      <section className="produto">
        <img src="images/tenis.jpg" alt="logo" width="328" height="203" />
        <h4>Boné Bordado Harry Potter</h4>
        <p>R$50,00</p>
        <button type="button">ver produto</button>
      </section>
    </ContainerProduct>
  );
}