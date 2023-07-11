import styled from 'styled-components'

export const ErrorBackground = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5%;
  background-color: ${props =>
    props.backgroundColor ? '#f9f9f9' : ' #0f0f0f'};
  width: 100%;
`
export const ErrorImage = styled.img`
  height: 150px;
`
export const ErrorHeading = styled.h1`
  font-family: roboto;
  font-size: 22px;
  text-align: center;
  color: ${props => (props.Condition ? '#1e293b' : '#ffffff')};
`
export const ErrorParagraph = styled.p`
  font-family: roboto;
  font-size: 18px;
  text-align: center;
  font-weight: 450;
  color: #64748b;
`
export const RetryButton = styled.button`
  color: #ffffff;
  font-family: roboto;
  background-color: #4f46e5;
  border-style: none;
  border-radius: 5px;
  height: 45px;
  width: 110px;
  font-weight: 450;
`

export const LoaderContainer = styled.div`
  width: 100%;
  text-align: center;
`

export const Background = styled.div`
  background-color: ${props =>
    props.backgroundColor ? '#f9f9f9' : ' #0f0f0f'};
  @media screen and (min-width: 768px) {
    width: 75%;
  }
`
export const Heading = styled.p`
  font-family: roboto;
  font-size: 20px;
  color: ${props => (props.condition ? '#1e293b' : '#ffffff')};
`
export const DownDetails = styled.div`
  padding-left: 2%;
`

export const ViewsTimeBox = styled.div`
  display: flex;
  align-items: center;
`

export const Views = styled.p`
  font-family: roboto;
  margin-right: 10px;
`
export const TimeContainer = styled.div`
  display: flex;
  align-items: center;
`
export const Time = styled.p`
  font-family: roboto;
  margin-right: 10px;
`

export const Dot = styled.p`
  background-color: ${props => (props.bgColor ? '#475569' : '  #64748b')};
  height: 5px;
  width: 5px;
  border-radius: 100%;
  margin-right: 10px;
`
export const LikesAndTimeBox = styled.div`
  display: flex;
  flex-direction: column;
  color: #64748b;

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    padding-right: 3%;
  }
`

export const LikeDislikeSaveBox = styled.div`
  display: flex;
  align-items: center;
`

export const LikeBox = styled.button`
  display: flex;
  align-items: center;
  margin-right: 12px;
  color: ${props => (props.selectedColor ? '#2563eb' : '#64748b')};
  border-style: none;
  background-color: transparent;
`

export const DislikeBox = styled.button`
  display: flex;
  align-items: center;
  margin-right: 12px;
  color: ${props => (props.selectedColor ? '#2563eb' : '#64748b')};
  border-style: none;
  background-color: transparent;
`

export const SaveBox = styled.button`
  display: flex;
  align-items: center;
  margin-right: 12px;
  color: ${props => (props.selectedColor ? '#2563eb' : '#64748b')};
  border-style: none;
  background-color: transparent;
`

export const Like = styled.div`
  margin-right: 5px;
`
export const LikeText = styled.p`
  font-family: roboto;
  font-weight: 450;
`
export const HorizontalLine = styled.hr`
  margin-right: 10px;
`

export const BelowDetails = styled.div``
export const IconAndChannelBox = styled.div`
  display: flex;
  align-items: center;
`
export const Icon = styled.img`
  height: 45px;
  margin-right: 10px;
  align-self: flex-start;
  padding-top: 15px;
`
export const TeamNameAndSubCountBox = styled.div``
export const ChannelName = styled.p`
  font-family: roboto;
  margin-right: 10px;
  color: #475569;
  font-weight: 450;
  margin-bottom: 0px;
  color: ${props => (props.condition ? '#475569' : '#ffffff')};
`
export const SubscriberCount = styled.p`
  font-family: roboto;
  margin-right: 10px;
  color: #64748b;
  margin-top: 5px;
`
export const Description = styled.p`
  font-family: roboto;
  font-weight: 440;

  margin-right: 15px;
  color: ${props => (props.condition ? '#475569' : '#ffffff')};
  @media screen and (min-width: 768px) {
    display: none;
  }
`
export const Descriptive = styled.p`
  font-family: roboto;
  font-weight: 440;
  color: #475569;
  margin-right: 15px;
  color: ${props => (props.condition ? '#475569' : '#ffffff')};
  @media screen and (max-width: 768px) {
    display: none;
  }
`
// export const some = styled.div``
// export const some = styled.div``
// export const some = styled.div``
// export const some = styled.div``
// export const some = styled.div``
// export const some = styled.div``
// export const some = styled.div``
// export const some = styled.div``
// export const some = styled.div``
// export const some = styled.div``
// export const some = styled.div``
// export const some = styled.div``
// export const some = styled.div``
// export const some = styled.div``
