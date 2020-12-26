import React from 'react'

import { Container, GithubIcon, InstagramIcon, YoutubeIcon, LinkedinIcon } from './styles'

const Footer: React.FC = () => {
  return(
    <Container>
      <GithubIcon />
      <InstagramIcon />
      <LinkedinIcon />
      <YoutubeIcon />
    </Container>
  )
}

export default Footer;