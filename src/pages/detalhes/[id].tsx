import React from 'react';

import { GetServerSideProps } from 'next';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Nav from '../../components/Nav';
import ProductDetail from '../../components/ProductDetail';
import api from '../../services/axios';

interface Props {
  data: ProductDetail;
}

interface ProductDetail {
  id: number;
  title: string;
  price: number;
  description: string;
  image: string;
}

export default function Detalhes(props: Props) {
  const { data } = props;
  return (
    <>
      <Header />
      <Nav/>
      <ProductDetail details={data} />
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { id },
}) => {
  try {
    const res = await api.products.productDetails(id as string);
    return { props: { data: res?.data, error: null } };
  } catch (error) {
    return {
      props: { data: null, error: error?.response?.data },
    };
  }
};