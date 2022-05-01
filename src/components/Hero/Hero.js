import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { LeftSection } from './HeroStyles';

const Hero = () => (
<Section row nopadding>
  <LeftSection>
    <SectionTitle main center>
      Welcome To <br />
      My Personal Portfolio
    </SectionTitle>
    <SectionText>   
    Hello my name is Senura Jayasinghe. I'm a recent software engineering graduate looking to succeed as a software engineer. I have a strong work ethic and I'm always eager to learn more  
   </SectionText>
  </LeftSection>
</Section>
);

export default Hero;