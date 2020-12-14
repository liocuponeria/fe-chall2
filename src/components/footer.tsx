import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GlobalStyle from '../styles/global';
import { Container, Main, ContentIcons } from '../styles/footer';

function Footer() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <Main>
          <ContentIcons>
            <div>
              <Link href="https://www.facebook.com/Cuponeria">
                <img src="images/face.svg" alt="facebook" width="39" height="39" />
              </Link>
            </div>
            <div>
              <Link href="https://www.instagram.com/cuponeria/">
                <img
                  src="images/insta.svg"
                  alt="instagram"
                  width="39"
                  height="39"
                />
              </Link>
            </div>
            <div>
              <Link href="https://twitter.com/Cuponeria">
                <img
                  src="images/twitter.svg"
                  alt="twitter"
                  width="39"
                  height="39"
                />
              </Link>
            </div>
            <div>
              <Link href="https://www.youtube.com/channel/UCvdHfsvEleYAGYOhIzPwNGg">
                <img
                  src="images/youtube.svg"
                  alt="youtube"
                  width="39"
                  height="39"
                />
              </Link>
            </div>
          </ContentIcons>
        </Main>
      </Container>
    </>
  );
}

export default Footer;
