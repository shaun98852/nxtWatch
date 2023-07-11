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
  NameBig,
  Name,
  Views,
  PublishedAt,
  FewDetails,
  Details,
  Dot,
  BDot,
} from './styledComponents'

const EachSavedComponent = props => {
  const {listVideo} = props
  const {
    name,
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
          <Link to={`/videos/${id}`} style={{textDecoration: 'none'}}>
            <BackGround>
              <ThumbnailImage src={thumbnailUrl} alt="video thumbnail" />
              <DetailsBox>
                <CompanyLogo src={profileImageUrl} alt="channel logo" />
                <CompanyDetails>
                  <Title value={condition}>{title}</Title>
                  <NameBig>{name}</NameBig>
                  <Details>
                    <Name>{name}</Name>
                    <FewDetails>
                      <BDot bgColor={condition}>.</BDot>
                      <Views>{viewCount} views</Views>
                      <Dot bgColor={condition}>.</Dot>
                      <PublishedAt>{finalDate} ago</PublishedAt>
                    </FewDetails>
                  </Details>
                </CompanyDetails>
              </DetailsBox>
            </BackGround>
          </Link>
        )
      }}
    </ReactContext.Consumer>
  )
}

export default EachSavedComponent
