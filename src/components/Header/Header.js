import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GiAmplitude } from 'react-icons/gi';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span, Resume} from './HeaderStyles';

const Header = () =>  (
 <Container>
   <Div1>
      <Link href="/">
        <a style={{display:"flex", alignItems: "center", color:"white"}}>
          <GiAmplitude size="5rem"></GiAmplitude> <Span>Portfolio</Span>
        </a>
      </Link>
   </Div1>
   <Div2>
     <li>
       <Link href="#projects">
         <NavLink>Projects</NavLink>
       </Link>
     </li>
     <li>
       <Link href="#tech">
         <NavLink>Technologies</NavLink>
       </Link>
     </li>
     <li>
       <Link href="#about">
         <NavLink>Education</NavLink>
       </Link>
     </li>
     <li>
       <Link href="#contact">
         <NavLink>Contact</NavLink>
       </Link>
     </li>
   </Div2>
  <Div3>
        <SocialIcons href="https://github.com/SenuraJayasinghe?tab=repositories" target="_blank">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/senura-jayasinghe-33998b1b5/" target="_blank">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <Resume
         href="https://drive.google.com/file/d/1xUu-1J_lk5u-ZW6DRfMr9Lej_Veka4NT/view?usp=sharing" target="_blank">Resume</Resume>
      </Div3>
 </Container>
);

export default Header;
