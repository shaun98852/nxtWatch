import {Component} from 'react'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {SiYoutubegaming} from 'react-icons/si'
import ReactContext from '../ReactContext'
import EachGamingComponent from '../EachGamingComponent'

import {
  TrendingBox,
  Backgroun,
  ImageBox,
  TrendingHeading,
  ErrorBackground,
  ErrorImage,
  ErrorHeading,
  ErrorParagraph,
  RetryButton,
  UnorderedList,
  LoaderContainer,
} from './styledComponents'

const switchDetails = {
  loader: 'LOADER',
  error: 'ERROR',
  success: 'SUCCESS',
}

class GamingRoute extends Component {
  state = {gamingVideos: [], whichDetailsToShow: switchDetails.loader}

  componentDidMount() {
    this.getGamingVideos()
  }

  getGamingVideos = async () => {
    const {gamingVideos} = this.state
    if (gamingVideos.length === 0) {
      this.setState({whichDetailsToShow: switchDetails.loader})
    }
    const url = 'https://apis.ccbp.in/videos/gaming'
    const jwtToken = Cookies.get('jwt_token')
    const methods = {
      methods: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `bearer ${jwtToken}`,
      },
    }

    const getDetails = await fetch(url, methods)
    const finalDetails = await getDetails.json()
    if (getDetails.ok === true) {
      const listVideos = finalDetails.videos

      const newList = listVideos.map(eachItem => ({
        thumbnailUrl: eachItem.thumbnail_url,
        id: eachItem.id,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      this.setState({
        gamingVideos: newList,
        whichDetailsToShow: switchDetails.success,
      })
    } else {
      this.setState({whichDetailsToShow: switchDetails.error})
    }
  }

  errorPage = () => (
    <ReactContext.Consumer>
      {value => {
        const {condition} = value
        const ImageUrl = condition
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        return (
          <ErrorBackground errorColor={condition}>
            <ErrorImage src={ImageUrl} alt="failure view" />
            <ErrorHeading Condition={condition}>
              OOps! Something Went Wrong
            </ErrorHeading>
            <ErrorParagraph>
              We are having some trouble to complete your request. Please try
              again.
            </ErrorParagraph>
            <RetryButton onClick={this.getGamingVideos}>Retry</RetryButton>
          </ErrorBackground>
        )
      }}
    </ReactContext.Consumer>
  )

  returnGamingVideos = () => {
    const {gamingVideos} = this.state

    return (
      <UnorderedList>
        {gamingVideos.map(eachItem => (
          <EachGamingComponent videoList={eachItem} key={eachItem.id} />
        ))}
      </UnorderedList>
    )
  }

  returnLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  switchFunction = () => {
    const {whichDetailsToShow} = this.state

    switch (whichDetailsToShow) {
      case 'SUCCESS':
        return this.returnGamingVideos()
      case 'ERROR':
        return this.errorPage()
      case 'LOADER':
        return this.returnLoader()
      default:
        return null
    }
  }

  render() {
    return (
      <ReactContext.Consumer>
        {value => {
          const {condition} = value

          return (
            <TrendingBox val={condition} data-testid="gaming">
              <Backgroun backgroundColor={condition}>
                <ImageBox colour={condition}>
                  <SiYoutubegaming />
                </ImageBox>
                <TrendingHeading colour={condition}>Gaming</TrendingHeading>
              </Backgroun>
              {this.switchFunction()}
            </TrendingBox>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default GamingRoute
