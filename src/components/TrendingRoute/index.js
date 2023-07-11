import {Component} from 'react'
import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import {HiFire} from 'react-icons/hi'
import ReactContext from '../ReactContext'
import TrendingEachComponent from '../TrendingEachComponent'

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

class Trending extends Component {
  state = {trendingVideos: [], whichDetailsToShow: ''}

  componentDidMount() {
    this.getTrendingVideos()
  }

  getTrendingVideos = async () => {
    const {trendingVideos} = this.state
    if (trendingVideos.length === 0) {
      this.setState({whichDetailsToShow: switchDetails.loader})
    }
    const url = 'https://apis.ccbp.in/videos/trending'
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
        channelName: eachItem.channel.name,
        profileImageUrl: eachItem.channel.profile_image_url,
        publishedAt: eachItem.published_at,
        thumbnailUrl: eachItem.thumbnail_url,
        id: eachItem.id,
        title: eachItem.title,
        viewCount: eachItem.view_count,
      }))

      if (newList.length === 0) {
        this.setState({whichDetailsToShow: switchDetails.nothingFound})
      } else {
        this.setState({
          trendingVideos: newList,
          whichDetailsToShow: switchDetails.success,
        })
      }
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
            <ErrorHeading values={condition}>
              OOps! Something Went Wrong
            </ErrorHeading>
            <ErrorParagraph>
              We are having some trouble to complete your request. Please try
              again.
            </ErrorParagraph>
            <RetryButton onClick={this.getTrendingVideos}>Retry</RetryButton>
          </ErrorBackground>
        )
      }}
    </ReactContext.Consumer>
  )

  returnTrendingVideos = () => {
    const {trendingVideos} = this.state

    return (
      <UnorderedList>
        {trendingVideos.map(eachItem => (
          <TrendingEachComponent listVideo={eachItem} key={eachItem.id} />
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
        return this.returnTrendingVideos()
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
            <TrendingBox values={condition} data-testid="trending">
              <Backgroun backgroundColor={condition}>
                <ImageBox color={condition}>
                  <HiFire />
                </ImageBox>
                <TrendingHeading color={condition}>Trending</TrendingHeading>
              </Backgroun>
              {this.switchFunction()}
            </TrendingBox>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default Trending
