import React, { useState, useRef, useEffect } from 'react';

import { ImgCard, AboutSection, SectionLetters} from './TimeLineStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';


const Timeline = () => {
  
  return (
    <Section id="about">
     <SectionDivider style={{marginTop:"30px"}} />
      <SectionTitle main>Education</SectionTitle>
      <AboutSection>
      <SectionText>•	BSc (Hons) Software Engineering Plymouth University – United Kingdom.  
         <SectionLetters>
        (2017-2020) (Upper Second Class Honours)
       </SectionLetters>
       <br/>
•	Lyceum International School Nugegoda, Cambridge Ordinary and Advanced levels.
<SectionLetters>
 (Batch of 2016/2017)
 </SectionLetters>
</SectionText>
       <ImgCard />
      </AboutSection>
   
    

      

      </Section>
    
  )};

export default Timeline;