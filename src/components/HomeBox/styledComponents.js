import styled from 'styled-components'

export const RightContainer = styled.div`
  background-color: ${props => (props.values ? '#ffffff' : ' #181818')};
  height: 100vh;
  overflow-y: scroll;
  @media screen and (min-width: 768px) {
    width: 75%;
  }
`

export const SectionBackground = styled.div`
  background-image: url('https://assets.ccbp.in/frontend/react-js/nxt-watch-banner-bg.png');
  display: ${props => (props.values ? 'block' : 'none')};
  background-size: cover;
  height: 33%;
  padding-left: 7%;
  padding-right: 7%;
  padding-top: 3%;
  padding-bottom: 3%;
`
export const SectionImage = styled.img`
  height: 35px;
`
export const TopSection = styled.div`
  display: flex;
  justify-content: space-between;
`
export const Heading = styled.p`
  font-weight: 450;
  font-family: roboto;
  font-size: 25px;
  color: #1e293b;
`
export const GetButton = styled.button`
  color: #475569;
  font-family: roboto;
  border: 2px solid #1e293b;
  background-color: transparent;
  height: 50px;
  width: 130px;
  font-weight: bold;
  font-size: 18px;
`
export const CrossButton = styled.button`
  background-color: transparent;
  border-style: none;
  font-size: 18px;
`
export const BottomSection = styled.div`
  background-color: ${props => (props.values ? '#f4f4f4' : '#181818')};
  min-height: 100vh;
  padding-top: 20px;
  padding-bottom: 20px;
`
export const SearchSection = styled.input`
  border-style: none;
  background-color: transparent;
  outline: none;
  width: 100%;
  padding-right: 10px;
`
export const SearchBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid #cccccc;
  width: 90%;
  margin: auto;
  padding-left: 3%;
  height: 35px;
  margin-bottom: 25px;
  @media screen and (min-width: 768px) {
    width: 70%;
    margin-left: 5%;
  }
`
export const SearchIconBox = styled.button`
  background-color: ${props => (props.values ? '#f4f4f4' : '#424242')};
  border-left-style: solid;
  border-left-width: 1px;
  border-left-color: #cccccc;
  border-top-style: none;
  border-bottom-style: none;
  border-right-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  color: ${props => (props.values ? '#424242' : '#cccccc')};
  height: 100%;
`
export const LoaderContainer = styled.div`
  text-align: center;
`
export const UnorderedList = styled.ul`
  padding-left: 0px;
  list-style-type: none;
  @media screen and (min-width: 576px) {
    display: flex;
    flex-wrap: wrap;
    padding: 5%;
  }
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
  color: ${props => (props.values ? '#1e293b' : '#ffffff')};
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
