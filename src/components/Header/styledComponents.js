import styled from 'styled-components'

export const HeaderBackground = styled.div`
  background-color: ${props => (props.val ? '#ffffff' : ' #181818')};
  height: 60px;
  display: flex;
  flex-direction: column;
  // justify-content: space-between;
  //   align-items: center;
  //   padding-left: 5%;
  padding-right: 5%;
  margin-top: 0px;
`

export const UlList = styled.ul`
  //   height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  list-style-type: none;
  //   padding-left: 5%;
  //   padding-right: 5%;
`

export const LogoBox = styled.li``

export const Image = styled.img`
  height: 25px;
`

export const Button = styled.button`
  background-color: transparent;
  border-style: none;
  font-size: 20px;
  margin-right: 5%;
  color: ${props => (props.val ? '#181818' : ' #ffffff')};
`

export const SmallSizeHeaderBox = styled.li`
  display: flex;
  align-items: center;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const LargeSizeHeaderBox = styled.li`
  display: flex;
  align-items: center;
  @media screen and (max-width: 768px) {
    display: none;
  }
`

export const ProfileImage = styled.img`
  height: 25px;
`
export const LogoutButton = styled.button`
  background-color: transparent;
  border: 1px solid #3b82f6;
  color: #3b82f6;
  font-family: roboto;
  font-weight: bold;
  border-radius: 3px;
  height: 30px;
  width: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const PopupBox = styled.div`
  background-color: ${props => (props.backgroundColor ? '#ffffff' : '#313131')};
  border-radius: 10px;
  height: 150px;
  width: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`
export const PopupPara = styled.p`
  font-family: roboto;
  font-weight: 450;
  color: ${props => (props.colours ? '#00306e' : '#e2e8f0')};
  font-size: 17px;
`

export const PopupButtonBox = styled.div``
export const Button1 = styled.button`
  border-style: solid;
  border-width: 1px;
  border-color: ${props => (props.borderColor ? '#1e293b' : '#94a3b8')};
  background-color: transparent;
  font-family: roboto;
  border-radius: 5px;
  height: 30px;
  width: 90px;
  color: #64748b;
  margin-right: 5px;
`
export const Button2 = styled.button`
  border-style: none;
  background-color: #3b82f6;
  font-family: roboto;
  border-radius: 5px;
  height: 30px;
  width: 90px;
  color: #ffffff;
  margin-left: 5px;
`

export const Box = styled.div``

export const TabsContainer = styled.div`
  background-color: ${props =>
    props.backgroundColor ? ' #ffffff' : '#181818'};
  width: 250px;
  height: 70vh;

  @media screen and (min-width: 768px) {
    display: none;
  }
`

export const TopTabs = styled.div``

export const TabBox = styled.div`
  display: flex;
  padding-left: 50%;
  align-items: center;
  padding-right: 5%;
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

export const CrossBox = styled.div`
  text-align: right;
  color: ${props => (props.crossColor ? '#231f20' : '#e2e8f0')};
`

export const TabBoxes = styled.div`
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`
