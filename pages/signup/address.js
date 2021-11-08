/* eslint-disable react/jsx-key */
import AddressForm from '../../components/signup/address-form'
import styled from 'styled-components'

const Greeting = styled.h1`
    display: grid;
    grid-template-rows: 1fr;
    text-align: center;
`;
const AddressContainer = styled.div`
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    `;


function Address() {
    return (
        <div>
            <Greeting>Criar Conta</Greeting>
            <AddressContainer>
                    <AddressForm />
            </AddressContainer>
        </div>
    )
  }
  
  export default Address