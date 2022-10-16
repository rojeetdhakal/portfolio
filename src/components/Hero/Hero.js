import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { ExternalLinks } from '../Projects/ProjectsStyles';
import { LeftSection } from './HeroStyles';

const Hero = () => (
  
  
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          HELLO; <br />
          <span >
          I am Rojit Dhakal.
            </span>
        </SectionTitle>
        <SectionText>
        Welcome to my Personal Portfolio.
        </SectionText>
        <Button><ExternalLinks href='https://www.linkedin.com/in/rojeet-dhakal-5430591a2/' style={{border:'none', background:'none', fontSize:'2.4rem', color:'white'}}>

        Learn More
        </ExternalLinks>
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;