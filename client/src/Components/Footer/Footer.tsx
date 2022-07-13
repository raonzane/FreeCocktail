import React from 'react';
import Marquee from 'react-fast-marquee';
import GitHubIcon from '@mui/icons-material/GitHub';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { Container, Wrapper, Title, Content, Copyright } from './Footer.style';

const Footer = function Footer() {
  return (
    <Container>
      <Wrapper>
        <Marquee gradient={false} speed={50} pauseOnHover>
          <Title>About</Title>
          <Content href="https://github.com/FreeCocktail/FreeCocktail">
            <GitHubIcon style={{ margin: '0 5px 5px 0', fontSize: '22px' }} />
            FreeCockTail
          </Content>

          <Title>Contact</Title>
          <Content
            href="https://github.com/95mg"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AccountCircleIcon style={{ margin: '0 5px 2px 0' }} />
            김민경
          </Content>

          <Content
            href="https://github.com/raonzane"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AccountCircleIcon style={{ margin: '0 5px 2px 0' }} />
            김현수
          </Content>

          <Content
            href="https://github.com/JigyunAn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AccountCircleIcon style={{ margin: '0 5px 2px 0' }} />
            안지균
          </Content>

          <Content
            href="https://github.com/chayezo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AccountCircleIcon style={{ margin: '0 5px 2px 0' }} />
            차예진
          </Content>
        </Marquee>
      </Wrapper>

      <Copyright>Copyright © 2022 FreeCocktail All rights reserved.</Copyright>
    </Container>
  );
};

export default Footer;
