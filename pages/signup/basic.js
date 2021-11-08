/* eslint-disable react/jsx-key */
import BasicForm from '../../components/signup/basic-form'
import styled from 'styled-components'

const Greeting = styled.h1`
    display: grid;
    grid-template-rows: 1fr;
    text-align: center;
`;
const BasicContainer = styled.div`
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    `;


function Basic() {
    return (
        <div>
            <Greeting>Criar Conta</Greeting>
            <BasicContainer>
                    <BasicForm />
            </BasicContainer>
        </div>
    )
  }
  
  export default Basic