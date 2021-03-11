import React from 'react';
import { GetServerSideProps } from 'next';

import Header from '../../components/Header';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import Products from '../../components/Products';
import GlobalStyle from '../../styles/global';
import { ContainerProduct } from '../../styles/products';
import { ContainerTitle, Main } from '../../styles/index';
import api from '../../services/axios';

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

export default function Category(props: Props) {
  const { data } = props;
  return (
    <>
      <Header />
      <Nav/>
      <GlobalStyle />
      <ContainerTitle>
        <Main>
          <span> Produtos </span>
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


export const getServerSideProps: GetServerSideProps = async ({
  query: { category },
}) => {
  console.log(category)
  try {
    const res = await api.products.listByCategory(category as string);
    console.log(res);
    return { props: { data: res?.data, error: null } };
  } catch (error) {
    return {
      props: { data: null, error: error?.response?.data },
    };
  }
};