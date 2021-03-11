import React from 'react';
import { GetStaticProps } from 'next';
import Products from '../components/Products';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import GlobalStyle from '../styles/global';
import { ContainerTitle, Main } from '../styles/index';
import { ContainerProduct } from '../styles/products';
import api from '../services/axios';

interface Props {
  data: Product[];
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export default function Homepage(props: Props) {
  const { data } = props;
  return (
    <>
      <Header />
      <Nav/>
      <GlobalStyle />
      <ContainerTitle>
      </ContainerTitle>
      <ContainerTitle>
        <Main>
          <span>Sugestões para você</span>
        </Main>
      </ContainerTitle>
      <ContainerProduct>
        {data?.map(product => (
          <Products key={product.id} product={product} />
        ))}
      </ContainerProduct>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await api.products.list();
    return { props: { data: res?.data || null, error: null }, revalidate: 1 };
  } catch (error) {
    return {
      props: { data: null, error: error?.response?.data },
    };
  }
};