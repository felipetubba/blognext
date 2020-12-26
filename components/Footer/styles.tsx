import styled from "styled-components";

import { Github } from '@styled-icons/fa-brands/Github'
import { Instagram } from '@styled-icons/fa-brands/Instagram'
import { Linkedin } from '@styled-icons/fa-brands/Linkedin'
import { Youtube } from '@styled-icons/fa-brands/Youtube'

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 6vh;
  width: 100%;
  bottom: 0;
  position: fixed;
  background: #ffffff;
  border-top: solid 1px #c7c7c7
`

export const GithubIcon = styled(Github)`
  color: #232323;
  width: 25px;
  height: 25px;
  margin: 0 15px;
`

export const LinkedinIcon = styled(Linkedin)`
  color: #232323;
  width: 25px;
  height: 25px;
  margin: 0 15px;

`
export const InstagramIcon = styled(Instagram)`
  color: #232323;
  width: 25px;
  height: 25px;
  margin: 0 15px;

`
export const YoutubeIcon = styled(Youtube)`
  color: #232323;
  width: 30px;
  height: 30px;
  margin: 0 15px;

`