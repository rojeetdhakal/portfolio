import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList style={{display:'flex', 
    justifyContent:'space-between'}}>
        <LinkColumn>
          <LinkTitle>Call</LinkTitle>
          <LinkItem href="tel:+9779860969663">+977-9860969663</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:rojeetdhakal01@gmail.com">
            rojeetdhakal01@gmail
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Innovating through bits and digits</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/rojeetdhakal">
            <AiFillGithub size="2.8rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/rojeet-dhakal-5430591a2/">
            <AiFillLinkedin size="2.8rem" />
          </SocialIcons>
          <SocialIcons href="https://www.instagram.com/rojeetdhakaal/">
            <AiFillInstagram size="2.8rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
