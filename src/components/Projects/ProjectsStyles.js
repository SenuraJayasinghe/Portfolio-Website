import styled from 'styled-components';

export const Img = styled.img`
  width:100%;
  height: 250px;
  object-fit: cover;
  overflow: hidden;

  @media ${(props) => props.theme.breakpoints.esm} {
  height:150px;
}
`

export const GridContainer = styled.section`
display: grid;
grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
padding: 3rem;
place-items:center;
column-gap: 5rem;
row-gap: 7rem;
@media ${(props) => props.theme.breakpoints.sm} {
  display: flex;
  flex-direction: column;
  padding: 2rem;
  padding-bottom: 0;
}

`
export const BlogCard = styled.div`
  border-radius: 20px;
  box-shadow: 3px 3px 20px rgba(77, 182, 172, 0.3);
  text-align: center;
  width: 400px;
  
  
  @media ${(props) => props.theme.breakpoints.sm} {
    width: 100%;
    margin-bottom: 5px;
  }
  @media ${(props) => props.theme.breakpoints.esm} {
    width: calc(100vw - 102px);
    margin-bottom: 5px;
  }
`;
export const TitleContent = styled.div`
  text-align: center;
  z-index: 20;
  width: 100%;
padding-top: 10px;
`;


export const HeaderThree = styled.h3`
  font-weight: 500;
  letter-spacing: 2px;
  background: linear-gradient(to bottom, #D5DEE7 0%, #E8EBF2 50%, #E2E7ED 100%), linear-gradient(to bottom, rgba(0,0,0,0.02) 50%, rgba(255,255,255,0.02) 61%, rgba(0,0,0,0.02) 73%), linear-gradient(33deg, rgba(255,255,255,0.20) 0%, rgba(0,0,0,0.20) 100%);
 background-blend-mode: normal,color-burn;
 -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  padding: .5rem 0;
  font-size: ${(props) => props.title ? '3rem' : '2rem'};
`;

export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 20px auto;
  border: 0;
  background:rgba(77, 182, 172, 0.8);

`;

export const Intro = styled.div`
  width: 170px;
  margin: 0 auto;
  color: #dce3e7;
  font-family: 'Droid Serif', serif;
  font-size: 13px;
  font-style: italic;
  line-height: 18px;
`;


export const CardInfo = styled.p`
  width: 100%;
  padding: 0 50px;
  color: #e4e6e7;
  font-style: 2rem;
  line-height: 24px;
  text-align: justify;
  @media ${(props) => props.theme.breakpoints.sm} {
    padding:.3rem

    @media ${(props) => props.theme.breakpoints.esm} {
      padding:.3rem;
  
  
}
`;


export const UtilityList = styled.ul`
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: space-around;
  margin: 2.5rem 0;
`;

export const ExternalLinks = styled.a`
color:white;
font-size: 1.6rem;
padding:1rem 1.5rem;
background:#0d9488;
border-radius: 10px;
transition: 0.5s;
&:hover{
  background:#5eead4;
  transition: all 0.5s ease;
  color: black;

}
`;

export const TagList = styled.ul`
display: flex;
justify-content: space-around;
padding: 2rem;
`
export const Tag = styled.li`
color: #d8bfbf;
font-size: 1.5rem;
`