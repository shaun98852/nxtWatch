import styled from 'styled-components'

export const Background = styled.div`
  background-color: ${props => (props.values ? '#f9f9f9' : ' #181818')};
  height: 100vh;
`

export const DownContainer = styled.div`
  background-color: ${props => (props.backgroundColor ? '#f1f1f1' : '#181818')};
  @media screen and (min-width: 768px) {
    display: flex;
  }
`
export const TabsContainer = styled.div`
  display: none;
  background-color: ${props =>
    props.backgroundColor ? ' #ffffff' : '#181818'};
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 25%;
    min-height: 100vh;
  }
`

export const TopTabs = styled.div``

export const TabBox = styled.div`
  display: flex;
  align-items: center;
  padding-left: 7%;
  color: ${props => (props.values ? '#231f20' : '#e2e8f0')};
  background-color: ${props => props.backgroundColor};
`

export const TabText = styled.p`
  font-family: Roboto;
  font-weight: 450;
  margin-left: 12px;
`

export const IconColorBox = styled.div`
  color: ${props => (props.colors ? '#ff0b37' : '')};
`

export const ContactUsSection = styled.div`
  padding-left: 7%;
  padding-right: 5%;
`

export const ContactHeading = styled.p`
  font-size: 22px;
  font-family: roboto;
  color: ${props => (props.values ? '#181818' : '#ffffff')};
  font-weight: bold;
`
export const Icons = styled.img`
  height: 35px;
  margin-right: 15px;
`
export const ContactPara = styled.p`
  font-family: roboto;
  font-size: 18px;
  font-weight: 450;
  color: ${props => (props.values ? '#181818' : '#ffffff')};
`
