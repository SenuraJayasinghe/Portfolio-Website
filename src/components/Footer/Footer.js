import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import {  FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
   <FooterWrapper id='contact'>
     <LinkList>
       <LinkColumn>
         <LinkTitle>Call:</LinkTitle>
         <LinkItem href= "tel:-077-087-1644">+94-77-087-1644</LinkItem>
       </LinkColumn>
       <LinkColumn>
         <LinkTitle>Email:</LinkTitle>
         <LinkItem href= "mailto:senurajayasinghe.se@gmail.com">senurajayasinghe.se@gmail.com</LinkItem>
       </LinkColumn>
     </LinkList>
     <SocialContainer>
     <SocialIconsContainer>
     <SocialIcons href="https://github.com/SenuraJayasinghe?tab=repositories" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/senura-jayasinghe-33998b1b5/" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
     </SocialIconsContainer>
     </SocialContainer>
   </FooterWrapper>
  );
};

export default Footer;
