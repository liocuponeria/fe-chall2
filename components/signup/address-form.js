/* eslint-disable @next/next/link-passhref */
import styled from 'styled-components'
import Link from 'next/link'

const AddressWrapper = styled.div`
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



export default function AddressForm(props) {    
    return (
        <AddressWrapper>
                <form>
                    <InputLogin type="text" placeholder="cep" name="cep" /><br/><br/>
                    <InputLogin type="text" placeholder="rua" name="rua" value={props.logradouro}/><br/><br/>
                    <InputLogin type="text" placeholder="cidade" name="cidade" value={props.localidade}/><br/><br/>
                    <InputLogin type="text" placeholder="país" name="país" value="Brasil"/><br/>
                </form>
                <Link href="/cart">
                    <Button>
                        <ButtonText>Cadastrar</ButtonText>
                    </Button>
                </Link>
                <Link href="/signup/email">
                    <Button>
                        <ButtonText>Voltar</ButtonText>
                    </Button>
                </Link>
                <p>Já tem uma conta?</p>
                <Link href='/login'><StyleLink>entrar</StyleLink></Link>
        </AddressWrapper>
    )
}