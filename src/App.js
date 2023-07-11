import {Switch, Route, Redirect, withRouter} from 'react-router-dom'

import {Component} from 'react'
import ProtectedRoute from './components/ProtectedRoute'
import LoginRoute from './components/LoginRoute'
import HomeRoute from './components/HomeRoute'

import ReactContext from './components/ReactContext'

import './App.css'

const tabs = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED VIDEOS',
}

// Replace your code here
class App extends Component {
  state = {condition: true, savedVideos: [], activeTab: ''}

  componentDidMount() {
    this.changeState()
  }

  changeValue = () => {
    this.setState(prevState => ({condition: !prevState.condition}))
  }

  changeState = () => {
    const {history} = this.props
    const {location} = history
    const {pathname} = location

    if (pathname === '/') {
      this.setState({activeTab: tabs.home})
    } else if (pathname === '/trending') {
      this.setState({activeTab: tabs.trending})
    } else if (pathname === '/gaming') {
      this.setState({activeTab: tabs.gaming})
    } else if (pathname === '/saved-videos') {
      this.setState({activeTab: tabs.savedVideos})
    }
  }

  changeFunction = object => {
    const {savedVideos} = this.state
    const {trueOrFalse, video} = object

    if (trueOrFalse === false) {
      if (savedVideos.some(eachItem => eachItem.id === video.id) === false) {
        this.setState(prevState => ({
          savedVideos: [...prevState.savedVideos, video],
        }))
      }
    } else if (trueOrFalse === true) {
      const newList = savedVideos.filter(eachItem => eachItem !== video)
      this.setState({savedVideos: newList})
    }
  }

  render() {
    const {condition, savedVideos, activeTab} = this.state

    return (
      <ReactContext.Provider
        value={{
          condition,
          savedVideos,
          activeTab,
          changeValue: this.changeValue,
          changeFunction: this.changeFunction,
          changeState: this.changeState,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <ProtectedRoute exact path="/" component={HomeRoute} />
          <ProtectedRoute exact path="/trending" component={HomeRoute} />
          <ProtectedRoute exact path="/gaming" component={HomeRoute} />
          <ProtectedRoute exact path="/videos/:id" component={HomeRoute} />
          <ProtectedRoute exact path="/saved-videos" component={HomeRoute} />
          <ProtectedRoute exact path="/NotFound" component={HomeRoute} />
          <Redirect to="/NotFound" />
        </Switch>
      </ReactContext.Provider>
    )
  }
}

export default withRouter(App)
