import React from 'react';
import { FaNode, FaDatabase} from "react-icons/fa";
import { SiTailwindcss, SiMaterialui, SiFirebase, SiMongodb, SiMysql, SiDocker, SiVisualstudiocode,
   SiPostman, SiAdobexd, SiGit, SiNpm, SiReact, SiJavascript, SiBootstrap, SiVuedotjs, SiJava, SiPhp, SiNodedotjs } from "react-icons/si";

import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListTitle} from './TechnologiesStyles';

const Technologies = () =>  (
 <Section id="tech">
 <SectionDivider style={{marginTop:"30px"}} />

 <SectionTitle main>Technologies</SectionTitle>
 <SectionText>
   I've worked with a range of technologies in the web development world.
   From Back-end to Design
 </SectionText>
 <List>
 <ListItem>
 <div style={{display: "flex", justifyContent: "center", marginTop:"15px"}}>
    <SiJavascript size="8rem"  />
    </div>
      <ListContainer>
        <ListTitle>JavaScript</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <div style={{display: "flex", justifyContent: "center", marginTop:"15px"}}>
    <SiReact size="8rem"  />
    </div>
      <ListContainer>
        <ListTitle> React</ListTitle>
      </ListContainer>
 </ListItem>


 <ListItem>
 <div style={{display: "flex", justifyContent: "center", marginTop:"15px"}}>
    <SiVuedotjs size="8rem"  />
    </div>
      <ListContainer>
        <ListTitle>Vue.js</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <div style={{display: "flex", justifyContent: "center", marginTop:"15px"}}>
    <FaNode size="8rem"  />
    </div>
      <ListContainer>
        <ListTitle>Node.js</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <div style={{display: "flex", justifyContent: "center", marginTop:"15px"}}>
    <SiJava size="8rem"  />
    </div>
      <ListContainer>
        <ListTitle>Java</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <div style={{display: "flex", justifyContent: "center", marginTop:"15px"}}>
    <FaDatabase size="8rem"  />
    </div>
      <ListContainer>
        <ListTitle>SQL</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <div style={{display: "flex", justifyContent: "center", marginTop:"15px"}}>
    <SiPhp size="8rem"  />
    </div>
      <ListContainer>
        <ListTitle>PHP</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <div style={{display: "flex", justifyContent: "center", marginTop:"15px"}}>
    <SiBootstrap size="8rem"  />
    </div>
      <ListContainer>
        <ListTitle>Bootstrap</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <div style={{display: "flex", justifyContent: "center", marginTop:"15px"}}>
    <SiTailwindcss size="8rem"  />
    </div>
      <ListContainer>
        <ListTitle>Tailwind CSS</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <div style={{display: "flex", justifyContent: "center", marginTop:"15px"}}>
    <SiMaterialui size="8rem"  />
    </div>
      <ListContainer>
        <ListTitle>Material-UI</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <div style={{display: "flex", justifyContent: "center", marginTop:"15px"}}>
    <SiFirebase size="8rem"  />
    </div>
      <ListContainer>
        <ListTitle>Firebase</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <div style={{display: "flex", justifyContent: "center", marginTop:"15px"}}>
    <SiMongodb size="8rem"  />
    </div>
      <ListContainer>
        <ListTitle>MongoDB</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <div style={{display: "flex", justifyContent: "center", marginTop:"15px"}}>
    <SiMysql size="8rem"  />
    </div>
      <ListContainer>
        <ListTitle>MySQL</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <div style={{display: "flex", justifyContent: "center", marginTop:"15px"}}>
    <SiDocker size="8rem"  />
    </div>
      <ListContainer>
        <ListTitle>Docker</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <div style={{display: "flex", justifyContent: "center", marginTop:"15px"}}>
    <SiGit size="8rem"  />
    </div>
      <ListContainer>
        <ListTitle>Git</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <div style={{display: "flex", justifyContent: "center", marginTop:"15px"}}>
    <SiVisualstudiocode size="8rem"  />
    </div>
      <ListContainer>
        <ListTitle>Visual Studio Code</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <div style={{display: "flex", justifyContent: "center", marginTop:"15px"}}>
    <SiNpm size="8rem"  />
    </div>
      <ListContainer>
        <ListTitle>NPM</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
 <div style={{display: "flex", justifyContent: "center", marginTop:"15px"}}>
    <SiPostman size="8rem"  />
    </div>
      <ListContainer>
        <ListTitle>Postman</ListTitle>
      </ListContainer>
 </ListItem>

 <ListItem>
    <div style={{display: "flex", justifyContent: "center", paddingTop:"15px"}}>
    <SiAdobexd size="8rem"  />
    </div>
      <ListContainer>
        <ListTitle>Adobe XD</ListTitle>
      </ListContainer>
 </ListItem>



 </List>

 </Section>
);

export default Technologies;
