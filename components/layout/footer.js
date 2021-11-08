import styled from 'styled-components'
import Image from 'next/image'

const FooterWrapper = styled.footer`
    grid-column-start: 1;
    grid-column-end: 4;
    grid-row-start: 3;
    grid-row-end: 4;
    display: flex;
    flex: 1;
    padding: 2rem 0;
    border-top: 1px solid #eaeaea;
    justify-content: center;
    align-items: center;
    background-color: red;
    @media (max-width: 768px) {
      grid-template-columns: 1fr;
      grid-template-row: 1fr;
    }
`;

export default function Footer() {
    return(
        <FooterWrapper>
            <span>
              <Image src="/images/face.svg" alt="faceLogo" width={70} height={50} />
            </span>
            <span>
              <Image src="/images/insta.svg" alt="insta Logo" width={70} height={50} />
            </span>
            <span>
              <Image src="/images/twitter.svg" alt="twitter Logo" width={70} height={50} />
            </span>
            <span>
              <Image src="/images/youtube.svg" alt="youtube Logo" width={70} height={50} />
            </span>
        </FooterWrapper>
    )
        
}