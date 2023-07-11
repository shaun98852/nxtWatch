import {Component} from 'react'
import Cookies from 'js-cookie'
import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {BiLike, BiDislike} from 'react-icons/bi'
import {HiOutlineSave} from 'react-icons/hi'

import Loader from 'react-loader-spinner'
import ReactContext from '../ReactContext'

import {
  ErrorBackground,
  ErrorImage,
  ErrorHeading,
  ErrorParagraph,
  RetryButton,
  LoaderContainer,
  Background,
  Heading,
  DownDetails,
  ViewsTimeBox,
  Views,
  TimeContainer,
  Time,
  Dot,
  LikesAndTimeBox,
  LikeDislikeSaveBox,
  LikeBox,
  Like,
  LikeText,
  HorizontalLine,
  BelowDetails,
  IconAndChannelBox,
  Icon,
  TeamNameAndSubCountBox,
  ChannelName,
  SubscriberCount,
  Description,
  Descriptive,
  DislikeBox,
  SaveBox,
} from './styledComponents'

const switchDetails = {
  loader: 'LOADER',
  error: 'ERROR',
  success: 'SUCCESS',
}

class VideoItemDetailsRoute extends Component {
  state = {
    videoDetail: [],
    whichDetailsToShow: '',
    likeHighlight: false,
    dislikeHighlight: false,
    highlightSaveBoxorNot: false,
  }

  componentDidMount() {
    this.getEachVideoDetails()
  }

  getEachVideoDetails = async () => {
    const {videoDetail} = this.state
    if (videoDetail.length === 0) {
      this.setState({whichDetailsToShow: switchDetails.loader})
    }
    const {match} = this.props
    const {params} = match
    const {id} = params
    const url = `https://apis.ccbp.in/videos/${id}`
    const jwtToken = Cookies.get('jwt_token')
    const methods = {
      methods: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `bearer ${jwtToken}`,
      },
    }

    const details = await fetch(url, methods)
    const detail = await details.json()
    const videos = {
      finalDetails: detail.video_details,
    }

    if (details.ok === true) {
      const {finalDetails} = videos

      const convertedDetails = {
        id: finalDetails.id,
        name: finalDetails.channel.name,
        profileImageUrl: finalDetails.channel.profile_image_url,
        subscriberCount: finalDetails.channel.subscriber_count,
        description: finalDetails.description,
        publishedAt: finalDetails.published_at,
        thumbnailUrl: finalDetails.thumbnail_url,
        title: finalDetails.title,
        videoUrl: finalDetails.video_url,
        viewCount: finalDetails.view_count,
      }

      this.setState({
        videoDetail: convertedDetails,
        whichDetailsToShow: switchDetails.success,
      })
    } else {
      this.setState({whichDetailsToShow: switchDetails.error})
    }
  }

  highlightLike = () => {
    const {dislikeHighlight} = this.state
    if (dislikeHighlight === false) {
      this.setState(prevState => ({likeHighlight: !prevState.likeHighlight}))
    } else if (dislikeHighlight === true) {
      this.setState(prevState => ({
        likeHighlight: !prevState.likeHighlight,
        dislikeHighlight: false,
      }))
    }
  }

  highlightDislike = () => {
    const {likeHighlight} = this.state

    if (likeHighlight === false) {
      this.setState(prevState => ({
        dislikeHighlight: !prevState.dislikeHighlight,
      }))
    } else if (likeHighlight === true) {
      this.setState(prevState => ({
        dislikeHighlight: !prevState.dislikeHighlight,
        likeHighlight: false,
      }))
    }
  }

  save = changeFunction => {
    const {videoDetail, highlightSaveBoxorNot} = this.state

    const finalList = {trueOrFalse: highlightSaveBoxorNot, video: videoDetail}
    changeFunction(finalList)
  }

  changeColor = changeFunction => {
    this.setState(
      prevState => ({
        highlightSaveBoxorNot: !prevState.highlightSaveBoxorNot,
      }),
      this.save(changeFunction),
    )
  }

  errorPage = () => (
    <ReactContext.Consumer>
      {value => {
        const {condition} = value
        const ImageUrl = condition
          ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png'
          : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-dark-theme-img.png'
        return (
          <ErrorBackground backgroundColor={condition}>
            <ErrorImage src={ImageUrl} alt="failure view" />
            <ErrorHeading Condition={condition}>
              OOps! Something Went Wrong
            </ErrorHeading>
            <ErrorParagraph>
              We are having some trouble to complete your request. Please try
              again.
            </ErrorParagraph>
            <RetryButton onClick={this.getEachVideoDetails}>Retry</RetryButton>
          </ErrorBackground>
        )
      }}
    </ReactContext.Consumer>
  )

  returnLoader = () => (
    <LoaderContainer data-testid="loader">
      <Loader type="ThreeDots" color="#ffffff" height="50" width="50" />
    </LoaderContainer>
  )

  returnVideoDetails = () => {
    const {
      videoDetail,
      likeHighlight,
      dislikeHighlight,
      highlightSaveBoxorNot,
    } = this.state
    const {
      title,
      viewCount,
      publishedAt,
      profileImageUrl,
      subscriberCount,
      name,
      videoUrl,
      description,
    } = videoDetail

    const newDate = formatDistanceToNow(new Date(publishedAt)).split(' ')
    const finalDate = newDate.slice(1, newDate.length).join(' ')

    return (
      <ReactContext.Consumer>
        {value => {
          const {condition, changeFunction} = value
          const saveText = highlightSaveBoxorNot ? 'Saved' : 'Save'

          return (
            <Background
              backgroundColor={condition}
              data-testid="videoItemDetails"
            >
              <DownDetails>
                <ReactPlayer
                  url={videoUrl}
                  width="98%"
                  height="65vh"
                  controls="true"
                  playing="true"
                />

                <Heading condition={condition}>{title}</Heading>
                <LikesAndTimeBox>
                  <ViewsTimeBox>
                    <Views>{viewCount} views</Views>
                    <TimeContainer>
                      <Dot bgColor={condition}>.</Dot>
                      <Time>{finalDate} ago</Time>
                    </TimeContainer>
                  </ViewsTimeBox>
                  <LikeDislikeSaveBox>
                    <LikeBox
                      onClick={this.highlightLike}
                      selectedColor={likeHighlight}
                    >
                      <Like>
                        <BiLike />
                      </Like>
                      <LikeText>Like</LikeText>
                    </LikeBox>
                    <DislikeBox
                      onClick={this.highlightDislike}
                      selectedColor={dislikeHighlight}
                    >
                      <Like>
                        <BiDislike />
                      </Like>
                      <LikeText>Dislike</LikeText>
                    </DislikeBox>
                    <SaveBox
                      onClick={() => {
                        this.changeColor(changeFunction)
                      }}
                      selectedColor={highlightSaveBoxorNot}
                    >
                      <Like>
                        <HiOutlineSave />
                      </Like>
                      <LikeText>{saveText}</LikeText>
                    </SaveBox>
                  </LikeDislikeSaveBox>
                </LikesAndTimeBox>
                <HorizontalLine />
                <BelowDetails>
                  <IconAndChannelBox>
                    <Icon src={profileImageUrl} alt="channel logo" />
                    <TeamNameAndSubCountBox>
                      <ChannelName condition={condition}>{name}</ChannelName>
                      <SubscriberCount>
                        {subscriberCount} subscribers
                      </SubscriberCount>
                      <Descriptive condition={condition}>
                        {description}
                      </Descriptive>
                    </TeamNameAndSubCountBox>
                  </IconAndChannelBox>
                  <Description condition={condition}>{description}</Description>
                </BelowDetails>
              </DownDetails>
            </Background>
          )
        }}
      </ReactContext.Consumer>
    )
  }

  switchFunction = () => {
    const {whichDetailsToShow} = this.state
    console.log(whichDetailsToShow)
    switch (whichDetailsToShow) {
      case 'SUCCESS':
        return this.returnVideoDetails()
      case 'ERROR':
        return this.errorPage()
      case 'LOADER':
        return this.returnLoader()
      default:
        return null
    }
  }

  render() {
    return this.switchFunction()
  }
}

export default VideoItemDetailsRoute
