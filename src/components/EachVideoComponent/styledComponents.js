import styled from 'styled-components'

export const BackGround = styled.li`
  @media screen and (min-width: 576px) {
    width: 280px;
    margin-right: 2%;
    margin-bottom: 5%;
  }
`
export const ThumbnailImage = styled.img`
  height: 200px;
  width: 100%;
  //   @media screen and (min-width: 576px) {
  //     width: 50%;
  //   }
`
export const DetailsBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 4%;
  padding-right: 4%;
`
export const CompanyLogo = styled.img`
  height: 30px;
  margin-right: 5px;
`
export const CompanyDetails = styled.div`
  margin-left: 5px;
`
export const Title = styled.p`
  font-weight: 450;
  font-family: roboto;
  //   color: #475569;

  margin-bottom: 0px;
  color: ${props => (props.val ? '#475569' : '#ffffff')};
`
export const Name = styled.p`
  font-family: roboto;
  color: #64748b;
  font-weight: 400;
  margin-right: 25px;
`

export const FewDetails = styled.ul`
  display: flex;
  padding-left: 0px;
  align-items: center;
  list-style-type: square;
`

export const Views = styled.p`
  font-family: roboto;
  color: #64748b;
  font-weight: 400;
  margin-right: 25px;
`
export const PublishedAt = styled.p`
  font-family: roboto;
  color: #64748b;
  font-weight: 400;
`

export const Details = styled.div`
  display: flex;
  align-items: center;

  width: 100%;
  margin-top: -10px;
`

// export const BackGround=styled.div`

// `
// export const BackGround=styled.div`

// `
// export const BackGround=styled.div`

// `
// export const BackGround=styled.div`

// `
