import {HiFire} from 'react-icons/hi'
import ReactContext from '../ReactContext'
import EachSavedComponent from '../EachSavedComponent'

import {
  ErrorBackground,
  ErrorImage,
  ErrorHeading,
  ErrorParagraph,
  TrendingBox,
  Backgroun,
  ImageBox,
  TrendingHeading,
  UnorderedList,
} from './styledComponents'

const SavedVideos = () => {
  const NoVideosSaved = () => (
    <ReactContext.Consumer>
      {value => {
        const {condition} = value

        return (
          <ErrorBackground errorColor={condition}>
            <ErrorImage
              src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-saved-videos-img.png"
              alt="no saved videos"
            />
            <ErrorHeading Condition={condition}>
              No saved videos found
            </ErrorHeading>
            <ErrorParagraph>
              You can save your videos while watching them again.
            </ErrorParagraph>
          </ErrorBackground>
        )
      }}
    </ReactContext.Consumer>
  )

  const VideosSaved = () => (
    <ReactContext.Consumer>
      {value => {
        const {condition, savedVideos} = value

        return (
          <TrendingBox bgsColor={condition} data-testid="savedVideos">
            <Backgroun backgroundColor={condition}>
              <ImageBox color={condition}>
                <HiFire />
              </ImageBox>
              <TrendingHeading color={condition}>Saved Videos</TrendingHeading>
            </Backgroun>
            <UnorderedList>
              {savedVideos.map(eachItem => (
                <EachSavedComponent listVideo={eachItem} key={eachItem.id} />
              ))}
            </UnorderedList>
          </TrendingBox>
        )
      }}
    </ReactContext.Consumer>
  )

  return (
    <ReactContext.Consumer>
      {value => {
        const {savedVideos} = value
        return savedVideos.length === 0 ? NoVideosSaved() : VideosSaved()
      }}
    </ReactContext.Consumer>
  )
}

export default SavedVideos
