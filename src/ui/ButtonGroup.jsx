import styled, { css } from 'styled-components'

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.2rem;
  ${props =>
    props.type === 'between'
      ? css`
          align-items: center;
          justify-content: space-between;
        `
      : css`
          justify-content: flex-end;
        `}
`

export default ButtonGroup
