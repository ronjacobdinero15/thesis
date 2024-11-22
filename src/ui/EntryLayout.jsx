import styled, { css } from 'styled-components'

const EntryLayout = styled.main`
  min-height: 100vh;
  display: grid;
  align-content: center;
  justify-content: center;
  gap: 3.2rem;
  background-color: var(--color-grey-50);

  ${props =>
    props.type === 'regular' &&
    css`
      grid-template-columns: 48rem;
    `}

  ${props =>
    props.type === 'patientsignup' &&
    css`
      grid-template-columns: 80rem;
    `}
`

EntryLayout.defaultProps = {
  type: 'regular',
}

export default EntryLayout
