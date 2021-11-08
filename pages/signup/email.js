/* eslint-disable react/jsx-key */
import EmailForm from '../../components/signup/email-form'
import styled from 'styled-components'

const Greeting = styled.h1`
    display: grid;
    grid-template-rows: 1fr;
    text-align: center;
`;
const EmailContainer = styled.div`
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    `;


function Email() {
    return (
        <div>
            <Greeting>Criar Conta</Greeting>
            <EmailContainer>
                    <EmailForm />
            </EmailContainer>
        </div>
    )
  }
  
  export default Email