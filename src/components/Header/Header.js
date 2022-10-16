import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', 
        alignItems: 'center', 
        color:"white",
        marginBottom:'20px'
        }}>
          <DiCssdeck size="3rem" /> <span>Portfolio</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li style={{zIndex:'5', padding:'0 15px'}} >
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li style={{zIndex:'5', padding:'0 15px'}}>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li style={{zIndex:'5', padding:'0 15px'}}>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/rojeetdhakal">
          <AiFillGithub size="2.8rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/rojeet-dhakal-5430591a2/">
          <AiFillLinkedin size="2.8rem" />
        </SocialIcons>
        <SocialIcons href="https://www.instagram.com/rojeetdhakaal/">
          <AiFillInstagram size="2.8rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
