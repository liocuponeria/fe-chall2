import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import { ContainerProduct } from '../../styles/boxProducts';
import BoxProduct from '../../components/BoxProduct';
import api from '../../services/api';
import Header from '../../components/header';
import GlobalStyle from '../../styles/global';
import { ContainerTitle, Main } from '../../styles/index';
import Footer from '../../components/footer';

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

export default function Produtos(props: Props) {
  const { data } = props;
  const routes = useRouter();
  const { category } = routes.query;
  return (
    <div>
      <Header />
      <GlobalStyle />
      <ContainerTitle>
        <Main>
          <span>Acessórios</span>
        </Main>
      </ContainerTitle>
      <ContainerProduct>
        {data?.map(product => (
          <BoxProduct product={product} />
        ))}
      </ContainerProduct>
      <Footer />
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async ({
  query: { category },
}) => {
  try {
    const res = await api.products.listByCategory(category as string);
    return { props: { data: res?.data, error: null } };
  } catch (error) {
    return {
      props: { data: null, error: error?.response?.data },
    };
  }
};
