import styled from 'styled-components'

export const EachListItem = styled.li`
  margin: 10px;
`

export const GamingImage = styled.img`
  height: 250px;
`

export const GameName = styled.p`
  font-size: 20px;
  font-family: roboto;
  color: ${props => (props.vals ? '#1e293b' : '#ffffff')};
  font-weight: 450;
`

export const GameCount = styled.p`
  font-size: 15px;
  font-family: roboto;
  color: #64748b;
`
