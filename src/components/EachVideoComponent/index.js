import {Link} from 'react-router-dom'
import {formatDistanceToNow} from 'date-fns'
import ReactContext from '../ReactContext'

import {
  BackGround,
  ThumbnailImage,
  CompanyLogo,
  DetailsBox,
  CompanyDetails,
  Title,
  Name,
  Views,
  PublishedAt,
  FewDetails,
  Details,
} from './styledComponents'

const EachVideoComponent = props => {
  const {listVideo} = props
  const {
    channelName,
    profileImageUrl,
    publishedAt,
    thumbnailUrl,
    id,
    title,
    viewCount,
  } = listVideo

  const newDate = formatDistanceToNow(new Date(publishedAt)).split(' ')
  const finalDate = newDate.slice(1, newDate.length).join(' ')

  return (
    <ReactContext.Consumer>
      {value => {
        const {condition} = value
        return (
          <BackGround>
            <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <DetailsBox>
                <CompanyLogo src={profileImageUrl} alt="channel logo" />
                <CompanyDetails>
                  <Title val={condition}>{title}</Title>
                  <Details>
                    <Name>{channelName}</Name>
                    <FewDetails>
                      <Views>{viewCount} views</Views>
                      <PublishedAt>{finalDate} ago</PublishedAt>
                    </FewDetails>
                  </Details>
                </CompanyDetails>
              </DetailsBox>
            </Link>
          </BackGround>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default EachVideoComponent
