import styled from 'styled-components'

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;
`

const Title = styled.h5`
  font-size: 1.8rem;
`

const Description = styled.span`
  font-size: 1.6rem;
`

const Link = styled.a`
  font-size: 1.6rem;
  text-decoration: none;
  color: white;
`

export const S = {
  InfoItem,
  Title,
  Description,
  Link,
}
