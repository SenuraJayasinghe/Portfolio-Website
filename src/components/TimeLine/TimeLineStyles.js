import styled from 'styled-components'
import img from '../../../public/images/profpic.jpg';

export const SectionLetters = styled.p`
 font-size: 15px;

 @media ${(props) => props.theme.breakpoints.sm} {
     font-size: 8px;
    
  }
`

export const AboutSection = styled.div`
  
  display: grid;
  grid-template-columns: 3fr 1fr;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  max-width: 1300px;
  padding: 0px 10px;
`

export const ImgCard = styled.div`
  padding-bottom:100px;
  margin: 10px 10px 100px 10px;
  height: 230px;
  width: 230px;
  border-radius: 504px;
  color: #fff;
  background-image: url(${img.src});
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
  
    @media ${(props) => props.theme.breakpoints.sm} {
      height: 130px;
      width: 130px;  
    
  }

  @media ${(props) => props.theme.breakpoints.esm} {
      height: 90px;
      width: 90px;  
    
  }
`
