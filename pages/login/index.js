/* eslint-disable react/jsx-key */
import LoginForm from '../../components/login-form'
import styled from 'styled-components'

const Greeting = styled.h1`
    display: grid;
    grid-template-rows: 1fr;
    text-align: center;
`;
const LoginContainer = styled.div`
    display: grid;
    grid-column-gap: 20px;
    grid-row-gap: 20px;
    @media (max-width: 768px) {
        grid-template-columns: 1fr;
      }
    `;


function Login() {
    return (
        <div>
            <Greeting>Entrar</Greeting>
            <LoginContainer>
                    <LoginForm />
            </LoginContainer>
        </div>
    )
  }
  
  export default Login