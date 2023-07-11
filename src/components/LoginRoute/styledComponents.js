import styled from 'styled-components'

export const Background = styled.div`
  background-color: ${props => (props.value ? '#ffffff' : ' #181818')};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const LoginBox = styled.form`
  background-color: ${props => (props.value ? '#ffffff' : '#0f0f0f')};
  display: flex;
  flex-direction: column;

  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  min-height: 40%;
  width: 60%;
  border-radius: 5px;
  padding: 30px;

  @media screen and (min-width: 768px) {
    // height: 50%;
    width: 40%;
  }
`
export const Logo = styled.img`
  height: 20px;

  @media screen and (min-width: 768px) {
    height: 40px;
  }
`
export const UsernameBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
`
export const UsernameLabel = styled.label`
  font-family: roboto;
  color: #94a3b8;
  font-weight: 450;
  margin-top: 20px;
  margin-bottom: 5px;
  font-size: 14px;
`
export const UsernameInputBox = styled.input`
  border: 0.5px solid #d7dfe9;
  color: #94a3b8;
  background-color: transparent;
  height: 35px;
  width: 100%;
  border-radius: 3px;
  padding-left: 10px;

  @media screen and (min-width: 768px) {
    flex-grow: 1;
  }
`
export const CheckboxBox = styled.div`
  width: 200px;
  margin-top: 20px;
  align-self: flex-start;
  padding-left: 5%;
  @media screen and (min-width: 768px) {
    width: 280px;
  }
`

export const Checkbox = styled.input``

export const CheckboxLabel = styled.label`
  font-family: roboto;
  color: ${props => (props.value ? '#1e293b' : '#94a3b8')};
`

export const LoginButton = styled.button`
  margin-top: 20px;
  background-color: #3b82f6;
  color: #ffffff;
  border-style: none;
  border-radius: 10px;
  width: 90%;
  height: 35px;
`
export const ErrorMsg = styled.p`
  color: #ff0b37;
  font-family: roboto;
  font-size: 14px;
  align-self: flex-start;
  padding-left: 5%;
`
