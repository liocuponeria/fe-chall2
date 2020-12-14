import React from 'react';
import { GetStaticProps } from 'next';
import BoxProduct from '../components/BoxProduct';
import Header from '../components/header';
import Footer from '../components/footer';
import GlobalStyle from '../styles/global';
import { ContainerTitle, Main } from '../styles/index';
import { ContainerProduct } from '../styles/boxProducts';
import api from '../services/api';

interface Props {
  data: Product[];
  // error: { status: number; message: string } | null;
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
      <GlobalStyle />
      <ContainerTitle>
        <Main>
          <span>Sugestões para você</span>
        </Main>
      </ContainerTitle>
      <ContainerProduct>
        {data?.map(product => (
          <BoxProduct product={product} />
        ))}
      </ContainerProduct>
      <Footer />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  try {
    const res = await api.products.list();
    return { props: { data: res?.data, error: null }, revalidate: 1 };
  } catch (error) {
    return {
      props: { data: null, error: error?.response?.data },
    };
  }
};
