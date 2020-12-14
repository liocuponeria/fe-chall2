import React from 'react';

import { GetServerSideProps } from 'next';
import Header from '../../components/header';
import Footer from '../../components/footer';
import ProductDetail from '../../components/detalhes';
import api from '../../services/api';

interface Props {
  data: ProductDetail;
  // error: { status: number; message: string } | null;
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
      <ProductDetail details={data} />
      <Footer />
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { id },
}) => {
  try {
    const res = await api.products.details(id as string);
    return { props: { data: res?.data, error: null } };
  } catch (error) {
    return {
      props: { data: null, error: error?.response?.data },
    };
  }
};
