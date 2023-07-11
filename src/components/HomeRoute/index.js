import {Component} from 'react'
import {Switch, Link} from 'react-router-dom'
import {AiFillHome} from 'react-icons/ai'
import {HiFire, HiOutlineSave} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import ReactContext from '../ReactContext'
import Header from '../Header'
import Trending from '../TrendingRoute'
import HomeSection from '../HomeBox'
import GamingRoute from '../GamingRoute'
import VideoItemDetailsRoute from '../VideoItemDetailsRoute'
import SavedVideos from '../SavedVideos'
import NotFound from '../NotFound'

import {
  Background,
  DownContainer,
  TabsContainer,
  TopTabs,
  ContactUsSection,
  TabBox,
  TabText,
  IconColorBox,
  ContactHeading,
  Icons,
  ContactPara,
} from './styledComponents'
import ProtectedRoute from '../ProtectedRoute'

const tabs = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED VIDEOS',
}

class HomeRoute extends Component {
  selectHome = changeState => {
    const {history} = this.props
    history.replace('/')
    changeState()
  }

  selectTrending = changeState => {
    const {history} = this.props
    history.replace('/trending')
    changeState()
  }

  selectGaming = changeState => {
    const {history} = this.props
    history.replace('/gaming')
    changeState()
  }

  selectSavedVideos = changeState => {
    const {history} = this.props
    history.replace('/saved-videos')
    changeState()
  }

  tabsContainer = () => (
    <ReactContext.Consumer>
      {value => {
        const {condition, activeTab, changeState} = value
        const requiredColor = condition ? '#f1f1f1' : '#424242'
        const homeTab = activeTab === tabs.home ? requiredColor : 'transparent'
        const trendingTab =
          activeTab === tabs.trending ? requiredColor : 'transparent'
        const gamingTab =
          activeTab === tabs.gaming ? requiredColor : 'transparent'
        const savedTab =
          activeTab === tabs.savedVideos ? requiredColor : 'transparent'

        return (
          <TabsContainer backgroundColor={condition}>
            <TopTabs>
              <Link to="/" style={{textDecoration: 'none'}}>
                <TabBox
                  values={condition}
                  backgroundColor={homeTab}
                  onClick={() => {
                    this.selectHome(changeState)
                  }}
                >
                  <IconColorBox colors={tabs.home === activeTab}>
                    <AiFillHome />
                  </IconColorBox>

                  <TabText values={condition}>Home</TabText>
                </TabBox>
              </Link>
              <Link to="/trending" style={{textDecoration: 'none'}}>
                <TabBox
                  values={condition}
                  backgroundColor={trendingTab}
                  onClick={() => {
                    this.selectTrending(changeState)
                  }}
                >
                  <IconColorBox colors={tabs.trending === activeTab}>
                    <HiFire />
                  </IconColorBox>
                  <TabText values={condition}>Trending</TabText>
                </TabBox>
              </Link>

              <Link to="/gaming" style={{textDecoration: 'none'}}>
                <TabBox
                  values={condition}
                  backgroundColor={gamingTab}
                  onClick={() => {
                    this.selectGaming(changeState)
                  }}
                >
                  <IconColorBox colors={tabs.gaming === activeTab}>
                    <SiYoutubegaming />
                  </IconColorBox>
                  <TabText values={condition}>Gaming</TabText>
                </TabBox>
              </Link>

              <Link to="/saved-videos" style={{textDecoration: 'none'}}>
                <TabBox
                  values={condition}
                  backgroundColor={savedTab}
                  onClick={() => {
                    this.selectSavedVideos(changeState)
                  }}
                >
                  <IconColorBox colors={tabs.savedVideos === activeTab}>
                    <HiOutlineSave />
                  </IconColorBox>
                  <TabText values={condition}>Saved Videos</TabText>
                </TabBox>
              </Link>
            </TopTabs>
            <ContactUsSection>
              <ContactHeading values={condition}>Contact Us</ContactHeading>

              <Icons
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-facebook-logo-img.png"
                alt="facebook logo"
              />
              <Icons
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-twitter-logo-img.png "
                alt="twitter logo"
              />
              <Icons
                src="https://assets.ccbp.in/frontend/react-js/nxt-watch-linked-in-logo-img.png "
                alt="linked in logo"
              />
              <ContactPara values={condition}>
                Enjoy! Now to see your channels and recommendations!
              </ContactPara>
            </ContactUsSection>
          </TabsContainer>
        )
      }}
    </ReactContext.Consumer>
  )

  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {condition} = value

          return (
            <Background values={condition} data-testid="home">
              <Header />
              <DownContainer backgroundColor={condition}>
                {this.tabsContainer()}
                <Switch>
                  <ProtectedRoute exact path="/" component={HomeSection} />
                  <ProtectedRoute exact path="/trending" component={Trending} />
                  <ProtectedRoute
                    exact
                    path="/gaming"
                    component={GamingRoute}
                  />
                  <ProtectedRoute
                    exact
                    path="/videos/:id"
                    component={VideoItemDetailsRoute}
                  />

                  <ProtectedRoute
                    exact
                    path="/saved-videos"
                    component={SavedVideos}
                  />
                  <ProtectedRoute exact path="/NotFound" component={NotFound} />
                </Switch>
              </DownContainer>
            </Background>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}
export default HomeRoute
