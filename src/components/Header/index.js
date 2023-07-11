import {Component} from 'react'
import {withRouter, Link} from 'react-router-dom'
import {BsSun} from 'react-icons/bs'
import {FaMoon} from 'react-icons/fa'
import {VscThreeBars} from 'react-icons/vsc'
import {FiLogOut} from 'react-icons/fi'
import Cookies from 'js-cookie'
import Popup from 'reactjs-popup'
import {AiFillHome} from 'react-icons/ai'
import {HiFire, HiOutlineSave} from 'react-icons/hi'
import {SiYoutubegaming} from 'react-icons/si'
import {RiCloseFill} from 'react-icons/ri'

// import 'reactjs-popup/dist/index.css'

import ReactContext from '../ReactContext'

import {
  HeaderBackground,
  Image,
  SmallSizeHeaderBox,
  Button,
  LargeSizeHeaderBox,
  ProfileImage,
  LogoutButton,
  PopupBox,
  PopupPara,
  PopupButtonBox,
  Button1,
  Button2,
  TabsContainer,
  TopTabs,
  TabBox,
  TabText,
  IconColorBox,
  CrossBox,
  TabBoxes,
  LogoBox,
  UlList,
} from './styledComponents'

const tabs = {
  home: 'HOME',
  trending: 'TRENDING',
  gaming: 'GAMING',
  savedVideos: 'SAVED VIDEOS',
}

class Header extends Component {
  Logout = () => {
    Cookies.remove('jwt_token')
    const {history} = this.props
    history.replace('/login')
  }

  Home = changeState => {
    const {history} = this.props
    history.replace('/')
    changeState()
  }

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
        const {condition, changeState, activeTab} = value
        const requiredColor = condition ? '#f1f1f1' : '#424242'
        const homeTab = activeTab === tabs.home ? requiredColor : 'transparent'
        const trendingTab =
          activeTab === tabs.trending ? requiredColor : 'transparent'
        const gamingTab =
          activeTab === tabs.gaming ? requiredColor : 'transparent'
        const savedTab =
          activeTab === tabs.savedVideos ? requiredColor : 'transparent'

        return (
          <TabBoxes>
            <TopTabs>
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
            </TopTabs>
          </TabBoxes>
        )
      }}
    </ReactContext.Consumer>
  )

  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {condition, changeValue, changeState} = value
          const image = condition
            ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png'
            : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-dark-theme-img.png'

          return (
            <HeaderBackground val={condition}>
              <UlList>
                <LogoBox key="unique1">
                  <Button
                    onClick={() => {
                      this.Home(changeState)
                    }}
                  >
                    <Link to="/" style={{textDecoration: 'none'}}>
                      <Image src={image} alt="website logo" />
                    </Link>
                  </Button>
                </LogoBox>

                <SmallSizeHeaderBox key="unique2">
                  <Button
                    onClick={changeValue}
                    val={condition}
                    data-testid="theme"
                  >
                    {condition ? <FaMoon /> : <BsSun />}
                  </Button>

                  <Popup
                    modal
                    trigger={
                      <Button val={condition}>
                        <VscThreeBars />
                      </Button>
                    }
                  >
                    {close => (
                      <TabsContainer backgroundColor={condition}>
                        <CrossBox
                          crossColor={condition}
                          onClick={() => close()}
                        >
                          <RiCloseFill />
                        </CrossBox>
                        {this.tabsContainer()}
                      </TabsContainer>
                    )}
                  </Popup>

                  <Popup
                    modal
                    trigger={
                      <Button val={condition}>
                        <FiLogOut />
                      </Button>
                    }
                  >
                    {close => (
                      <PopupBox backgroundColor={condition}>
                        <PopupPara colours={condition}>
                          Are you sure, you want to logout
                        </PopupPara>
                        <PopupButtonBox>
                          <Button1
                            borderColor={condition}
                            onClick={() => close()}
                          >
                            Cancel
                          </Button1>
                          <Button2 onClick={this.Logout}>Confirm</Button2>
                        </PopupButtonBox>
                      </PopupBox>
                    )}
                  </Popup>
                </SmallSizeHeaderBox>

                <LargeSizeHeaderBox key="unique3">
                  <Button
                    val={condition}
                    onClick={changeValue}
                    data-test-id="theme"
                  >
                    {condition ? <FaMoon /> : <BsSun />}
                  </Button>
                  <Button>
                    <ProfileImage
                      src="https://assets.ccbp.in/frontend/react-js/nxt-watch-profile-img.png"
                      alt="profile"
                    />
                  </Button>
                  <Popup
                    modal
                    trigger={
                      <LogoutButton onClick={this.Logout}>Logout</LogoutButton>
                    }
                  >
                    {close => (
                      <PopupBox backgroundColor={condition}>
                        <PopupPara colours={condition}>
                          Are you sure, you want to logout
                        </PopupPara>
                        <PopupButtonBox>
                          <Button1
                            borderColor={condition}
                            onClick={() => close()}
                          >
                            Cancel
                          </Button1>
                          <Button2 onClick={this.Logout}>Confirm</Button2>
                        </PopupButtonBox>
                      </PopupBox>
                    )}
                  </Popup>
                </LargeSizeHeaderBox>
              </UlList>
            </HeaderBackground>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}
export default withRouter(Header)
