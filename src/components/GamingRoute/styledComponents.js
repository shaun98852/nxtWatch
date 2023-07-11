import styled from 'styled-components'

export const TrendingBox = styled.div`
  background-color: ${props => (props.val ? '#f9f9f9' : ' #0f0f0f')};
  height: 100vh;
  overflow-y: scroll;
  @media screen and (min-width: 768px) {
    width: 75%;
  }
`

export const Backgroun = styled.div`
  display: flex;
  align-items: center;

  height: 120px;
  width: 100%;
  padding-left: 5%;
  background-color: ${props => (props.backgroundColor ? '#ebebeb' : '#1e293b')};
`

export const ImageBox = styled.div`
  font-size: 50px;
  margin-right: 10px;
  background-color: ${props => (props.colour ? '#d7dfe9' : '#475569')};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  text-align: center;
  color: #ff0000;
`

export const TrendingHeading = styled.h1`
  font-family: roboto;
  color: ${props => (props.colour ? '#1e293b' : '#ffffff')};
  font-weight: 550;
`

export const ErrorBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
  background-color: ${props => (props.errorColor ? '#f9f9f9' : ' #0f0f0f')};
`
export const ErrorImage = styled.img`
  height: 150px;
`
export const ErrorHeading = styled.h1`
  font-family: roboto;
  font-size: 22px;
  text-align: center;
  color: ${props => (props.Condition ? '#1e293b' : '#ffffff')};
`
export const ErrorParagraph = styled.p`
  font-family: roboto;
  font-size: 18px;
  text-align: center;
  font-weight: 450;
  color: #64748b;
`
export const RetryButton = styled.button`
  color: #ffffff;
  font-family: roboto;
  background-color: #4f46e5;
  border-style: none;
  border-radius: 5px;
  height: 45px;
  width: 110px;
  font-weight: 450;
`

export const UnorderedList = styled.ul`
  list-style-type: none;
  padding-left: 0px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
`
export const LoaderContainer = styled.div`
  text-align: center;
`
