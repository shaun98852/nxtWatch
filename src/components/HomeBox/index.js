import {Component} from 'react'

import {GrFormClose} from 'react-icons/gr'
import {AiOutlineSearch} from 'react-icons/ai'

import Loader from 'react-loader-spinner'
import Cookies from 'js-cookie'
import ReactContext from '../ReactContext'
import EachVideoComponent from '../EachVideoComponent'

import {
  SectionBackground,
  SectionImage,
  TopSection,
  Heading,
  GetButton,
  CrossButton,
  BottomSection,
  SearchSection,
  SearchBox,
  SearchIconBox,
  LoaderContainer,
  UnorderedList,
  ErrorBackground,
  ErrorImage,
  ErrorHeading,
  ErrorParagraph,
  RetryButton,
  RightContainer,
} from './styledComponents'

const switchDetails = {
  loader: 'LOADER',
  error: 'ERROR',
  success: 'SUCCESS',
  nothingFound: 'NOTHING FOUND',
}

class HomeSection extends Component {
  state = {
    showTopSection: true,
    searchValue: '',
    videoList: [],
    whichDetailsToShow: '',
  }

  componentDidMount = () => {
    this.details()
  }

  showTopSectionOrNot = () => {
    this.setState({showTopSection: false})
  }

  searchInput = event => {
    this.setState({searchValue: event.target.value})
  }

  details = async () => {
    const {searchValue, videoList} = this.state
    if (videoList.length === 0) {
      this.setState({whichDetailsToShow: switchDetails.loader})
    }

    const jwtToken = Cookies.get('jwt_token')
    const methods = {
      methods: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `bearer ${jwtToken}`,
      },
    }

    const url = `https://apis.ccbp.in/videos/all?search=${searchValue}`
    const details = await fetch(url, methods)

    const finalDetails = await details.json()
    if (details.ok === true) {
      const listVideos = finalDetails.videos
      console.log(listVideos)
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
          videoList: newList,
          whichDetailsToShow: switchDetails.success,
        })
      }
    } else {
      this.setState({whichDetailsToShow: switchDetails.error})
    }
  }

  nothingFoundPage = () => (
    <ReactContext.Consumer>
      {value => {
        const {condition} = value

        return (
          <ErrorBackground>
            <ErrorImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
              alt="no videos"
            />
            <ErrorHeading values={condition}>
              No Search results found
            </ErrorHeading>
            <ErrorParagraph>
              Try different key words or remove search filter
            </ErrorParagraph>
            <RetryButton onClick={this.details}>Retry</RetryButton>
          </ErrorBackground>
        )
      }}
    </ReactContext.Consumer>
  )

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
            <RetryButton onClick={this.details}>Retry</RetryButton>
          </ErrorBackground>
        )
      }}
    </ReactContext.Consumer>
  )

  switchFunction = () => {
    const {whichDetailsToShow} = this.state

    switch (whichDetailsToShow) {
      case 'SUCCESS':
        return this.returnVideos()
      case 'ERROR':
        return this.errorPage()
      case 'NOTHING FOUND':
        return this.nothingFoundPage()
      case 'LOADER':
        return this.returnLoader()
      default:
        return null
    }
  }

  returnLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  returnVideos = () => {
    const {videoList} = this.state

    return (
      <UnorderedList>
        {videoList.map(eachItem => (
          <EachVideoComponent listVideo={eachItem} key={eachItem.id} />
        ))}
      </UnorderedList>
    )
  }

  render() {
    const {showTopSection, searchValue} = this.state
    return (
      <ReactContext.Consumer>
        {value => {
          const {condition} = value
          return (
            <RightContainer>
              <SectionBackground values={showTopSection} data-testid="banner">
                <TopSection>
                  <SectionImage
                    src="https://assets.ccbp.in/frontend/react-js/nxt-watch-logo-light-theme-img.png"
                    alt="nxt watch logo"
                  />
                  <CrossButton
                    onClick={this.showTopSectionOrNot}
                    data-testid="close"
                  >
                    <GrFormClose />
                  </CrossButton>
                </TopSection>
                <Heading>Buy Nxt Watch Premium prepaid plans with UPI</Heading>
                <GetButton>GET IT NOW</GetButton>
              </SectionBackground>

              <BottomSection values={condition}>
                <SearchBox>
                  <SearchSection
                    type="search"
                    placeholder="Search"
                    onChange={this.searchInput}
                    value={searchValue}
                  />
                  <SearchIconBox
                    values={condition}
                    onClick={this.details}
                    data-testid="searchButton"
                  >
                    <AiOutlineSearch />
                  </SearchIconBox>
                </SearchBox>

                {this.switchFunction()}
              </BottomSection>
            </RightContainer>
          )
        }}
      </ReactContext.Consumer>
    )
  }
}

export default HomeSection
