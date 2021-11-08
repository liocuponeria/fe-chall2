/* eslint-disable @next/next/link-passhref */
import styled from 'styled-components'
import Link from 'next/link'

const BasicWrapper = styled.div`
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



export default function BasicForm() {    
    return (
        <BasicWrapper>
                <form>
                    <InputLogin type="text" placeholder="nome" name="nome"/><br/><br/>
                    <InputLogin type="text" placeholder="sobrenome" name="sobrenome"/><br/><br/>
                    <InputLogin type="text" placeholder="telefone" name="telefone"/><br/>
                </form>
                <Link href="/signup/email">
                    <Button>
                        <ButtonText>Próximo</ButtonText>
                    </Button>
                </Link>
                <p>Já tem uma conta?</p>
                <Link href='/login'><StyleLink>entrar</StyleLink></Link>
        </BasicWrapper>
    )
}
