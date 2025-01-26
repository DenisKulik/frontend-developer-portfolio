import styled from 'styled-components'

const Projects = styled.section`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  overflow: hidden;
`

const ProjectsInner = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 2.5rem;
`

export const S = {
  Projects,
  ProjectsInner,
}
