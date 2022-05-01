import React from 'react';
import {IconContext} from "react-icons";
import { FaNode, FaDatabase} from "react-icons/fa";
import { SiTailwindcss, SiMaterialui, SiFirebase, SiMongodb, SiMysql, SiDocker, SiVisualstudiocode,
   SiPostman, SiAdobexd, SiGit, SiNpm, SiReact, SiJavascript, SiBootstrap, SiVuedotjs, SiJava, SiPhp } from "react-icons/si";

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListTitle, Icon, IconSize} from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
 <SectionDivider style={{marginTop:"30px"}} />

 <SectionTitle main>Technologies</SectionTitle>
 <SectionText>
 
   I've worked with a range of technologies in the web development world.
   From Back-end to Design
 </SectionText>
 <List>
 <IconContext.Provider value={{ className:"IconSize"}}>
 <ListItem>
   <Icon>
    <SiJavascript   />
    </Icon>
      <ListContainer>
        <ListTitle>JavaScript</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <Icon>
    <SiReact  />
    </Icon>
      <ListContainer>
        <ListTitle> React</ListTitle>
      </ListContainer>
 </ListItem>


 <ListItem>
 <Icon>
    <SiVuedotjs />
    </Icon>
      <ListContainer>
        <ListTitle>Vue.js</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <Icon>
    <FaNode />
    </Icon>
      <ListContainer>
        <ListTitle>Node.js</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <Icon>
    <SiJava/>
    </Icon>
      <ListContainer>
        <ListTitle>Java</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <Icon>
    <FaDatabase/>
    </Icon>
      <ListContainer>
        <ListTitle>SQL</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <Icon>
    <SiPhp/>
    </Icon>
      <ListContainer>
        <ListTitle>PHP</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <Icon>
    <SiBootstrap/>
    </Icon>
      <ListContainer>
        <ListTitle>Bootstrap</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <Icon>
    <SiTailwindcss/>
    </Icon>
      <ListContainer>
        <ListTitle>Tailwind CSS</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <Icon>
    <SiMaterialui/>
    </Icon>
      <ListContainer>
        <ListTitle>Material-UI</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <Icon>
    <SiFirebase/>
    </Icon>
      <ListContainer>
        <ListTitle>Firebase</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <Icon>
    <SiMongodb/>
    </Icon>
      <ListContainer>
        <ListTitle>MongoDB</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <Icon>
    <SiMysql/>
    </Icon>
      <ListContainer>
        <ListTitle>MySQL</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <Icon>
    <SiDocker/>
    </Icon>
      <ListContainer>
        <ListTitle>Docker</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <Icon>
    <SiGit/>
    </Icon>
      <ListContainer>
        <ListTitle>Git</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <Icon>
    <SiVisualstudiocode/>
    </Icon>
      <ListContainer>
        <ListTitle>Visual Studio Code</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <Icon>
    <SiNpm/>
    </Icon>
      <ListContainer>
        <ListTitle>NPM</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <Icon>
    <SiPostman/>
    </Icon>
      <ListContainer>
        <ListTitle>Postman</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <Icon>
    <SiAdobexd/>
    </Icon>
      <ListContainer>
        <ListTitle>Adobe XD</ListTitle>
      </ListContainer>
 </ListItem>

</IconContext.Provider>
 </List>
 </Section>
);

export default Technologies;
