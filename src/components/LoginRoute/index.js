import {Component} from 'react'
import {Redirect} from 'react-router-dom'

import Cookies from 'js-cookie'
import ReactContext from '../ReactContext'

import {
  Background,
  LoginBox,
  Logo,
  UsernameBox,
  UsernameLabel,
  UsernameInputBox,
  Checkbox,
  CheckboxLabel,
  CheckboxBox,
  LoginButton,
  ErrorMsg,
} from './styledComponents'

class LoginRoute extends Component {
  state = {
    username: '',
    password: '',
    errorMsg: '',
    showErrorOrNot: false,
    showPasswordOrNot: false,
  }

  enterPassword = event => {
    this.setState({password: event.target.value})
  }

  enterUsername = event => {
    this.setState({username: event.target.value})
  }

  checkBox = event => {
    if (event.target.checked === true) {
      this.setState({showPasswordOrNot: true})
    } else {
      this.setState({showPasswordOrNot: false})
    }
  }

  onClickSubmitButton = async event => {
    event.preventDefault()

    const {username, password} = this.state

    const url = 'https://apis.ccbp.in/login'
    const details = {username, password}
    const options = {
      method: 'POST',
      body: JSON.stringify(details),
    }

    const userDetails = await fetch(url, options)
    const finalDetails = await userDetails.json()

    if (userDetails.status === 200) {
      const jwtToken = finalDetails.jwt_token
      Cookies.set('jwt_token', jwtToken, {expires: 30})
      const {history} = this.props
      history.replace('/')
    } else {
      this.setState({errorMsg: finalDetails.error_msg, showErrorOrNot: true})
    }
  }

  render() {
    const requiredCookie = Cookies.get('jwt_token')
    if (requiredCookie !== undefined) {
      return <Redirect path="/" />
    }
    const {errorMsg, showErrorOrNot, showPasswordOrNot} = this.state
    return (
      <ReactContext.Consumer>
        {value => {
          const {condition} = value
          const imageUrl = condition
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          return (
            <Background value={condition}>
              <LoginBox value={condition} onSubmit={this.onClickSubmitButton}>
                <Logo src={imageUrl} alt="website logo" />
                <UsernameBox>
                  <UsernameLabel htmlFor="username">USERNAME</UsernameLabel>
                  <UsernameInputBox
                    placeholder="Username"
                    id="username"
                    onChange={this.enterUsername}
                  />
                </UsernameBox>

                <UsernameBox>
                  <UsernameLabel htmlFor="password">PASSWORD</UsernameLabel>
                  <UsernameInputBox
                    placeholder="Password"
                    id="password"
                    type={showPasswordOrNot ? 'text' : 'password'}
                    onChange={this.enterPassword}
                  />
                </UsernameBox>

                <CheckboxBox>
                  <Checkbox
                    id="checkbox"
                    type="checkbox"
                    onChange={this.checkBox}
                  />
                  <CheckboxLabel htmlFor="checkbox" value={condition}>
                    Show Password
                  </CheckboxLabel>
                </CheckboxBox>

                <LoginButton type="submit">Login</LoginButton>
                {showErrorOrNot && <ErrorMsg>*{errorMsg}</ErrorMsg>}
              </LoginBox>
            </Background>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}
export default LoginRoute
