
import styled from 'styled-components'

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
  background-image: url("https://media-exp1.licdn.com/dms/image/C5603AQH9FSasxwOW_w/profile-displayphoto-shrink_400_400/0/1644654342582?e=1656547200&v=beta&t=v_AptMiOvjUY8EQ4w_oJP8TAO7tGlRcYWcHuiHIrr2A");
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
