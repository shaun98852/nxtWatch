import ReactContext from '../ReactContext'

import {
  Background,
  NotFoundImage,
  NotFoundHeading,
  NotFoundParagraph,
} from './styledComponents'

const NotFound = () => (
  <ReactContext.Consumer>
    {value => {
      const {condition} = value
      const Url = condition
        ? 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-light-theme-img.png'
        : 'https://assets.ccbp.in/frontend/react-js/nxt-watch-not-found-dark-theme-img.png'

      return (
        <Background>
          <NotFoundImage src={Url} alt="not found" />
          <NotFoundHeading colours={condition}>Page Not Found</NotFoundHeading>
          <NotFoundParagraph colours={condition}>
            we are sorry, the page you requested could not be found.
          </NotFoundParagraph>
        </Background>
      )
    }}
  </ReactContext.Consumer>
)

export default NotFound
