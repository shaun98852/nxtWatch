import styled from 'styled-components'

export const Background = styled.div`
  text-align: center;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 20px;
  padding-bottom: 20px;
  @media screen and (min-width: 768px) {
    width: 75%;
  }
`
export const NotFoundImage = styled.img`
  height: 350px;
  width: 60%;
  margin: auto;
`
export const NotFoundHeading = styled.h1`
  text-align: center;
  font-family: roboto;
  color: ${props => (props.colours ? '#0f0f0f' : '#ffffff')};
`
export const NotFoundParagraph = styled.p`
  text-align: center;
  color: #94a3b8;
  font-weight: 450;
  margin-top: 0px;
  font-size: 19px;
`
