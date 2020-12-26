import styled from 'styled-components'

export const Container = styled.div`
  display: grid;
  grid-template-areas:
  ". . . ."
  ". texto texto ."
  ". . . .";
`

export const Texto = styled.p`
    grid-area: texto;
    background: red;
    margin-top: 200px;
`