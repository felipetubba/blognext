import React from 'react';

import Brand from '../Brand'
import Nav from '../Nav'

import { Container } from './styles';

const Header: React.FC = () => {
  return(
    <Container>
      <Brand />
      <Nav />
    </Container>
  )
}

export default Header;