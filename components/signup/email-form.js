/* eslint-disable @next/next/link-passhref */
import styled from 'styled-components'
import Link from 'next/link'

const EmailWrapper = styled.div`
        flex: 0 1 auto;
        flex-direction: row;
        flex-wrap: wrap;
        border-radius: 25px; 
        display: flex;
        flex-direction: column;
        flex: 0 1 auto;
        padding: 10px;
        align-items: center;
    `;

const Button = styled.div`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    box-shadow: 1px 1px 5px grey;
    border-radius: 25px;
    background-color: green;
    &:hover {
        background-color: #795a8b;
      }
`;

const InputLogin = styled.input`
      height: 50px;
      width: 300px;
      border-radius: 10px;
`;

const ButtonText = styled.p`
    color: white;
    text-align: center;
    padding: 0 50px;    
`;
const StyleLink = styled.p`
    text-decoration: underline;
`;



export default function EmailForm() {    
    return (
        <EmailWrapper>
                <form>
                    <InputLogin type="text" placeholder="email" name="email"/><br/><br/>
                    <InputLogin type="text" placeholder="senha" name="senha"/><br/><br/>
                    <InputLogin type="text" placeholder="confirme senha" name="confirme senha"/><br/>
                </form>
                <Link href="/signup/address">
                    <Button>
                        <ButtonText>Próximo</ButtonText>
                    </Button>
                </Link>
                <Link href="/signup/basic">
                    <Button>
                        <ButtonText>Voltar</ButtonText>
                    </Button>
                </Link>
                <p>Já tem uma conta?</p>
                <Link href='/login'><StyleLink>entrar</StyleLink></Link>
        </EmailWrapper>
    )
}