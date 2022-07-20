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
    Hello I'm Senura Jayasinghe, a fresh Software Engineering graduate seeking to acquire an opportunity in the IT industry to further sharpen and utilize my skills. I hold a strong incentive for work ethics and am driven by hunger to thrive for more
   </SectionText>
  </LeftSection>
</Section>
);

export default Hero;