import {Link} from 'react-router-dom'
import ReactContext from '../ReactContext'

import {
  EachListItem,
  GamingImage,
  GameName,
  GameCount,
} from './styledComponents'

const EachGamingComponent = props => {
  const {videoList} = props
  const {thumbnailUrl, title, id, viewCount} = videoList

  return (
    <ReactContext.Consumer>
      {value => {
        const {condition} = value
        return (
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <EachListItem>
              <GamingImage src={thumbnailUrl} alt="video thumbnail" />
              <GameName vals={condition}>{title}</GameName>
              <GameCount>{viewCount} Watching Worldwide</GameCount>
            </EachListItem>
          </Link>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default EachGamingComponent
