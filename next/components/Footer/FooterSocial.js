import React from 'react'
import styled from 'styled-components'

export const FooterSocial = () => {
  return (
    <SocialBox>
      <SocialLink href='#'>
        <i className='fab fa-facebook-square'></i>
      </SocialLink>
      <SocialLink href='#'>
        <i className='fab fa-instagram'></i>
      </SocialLink>
      <SocialLink href='#'>
        <i className='fab fa-twitter-square'></i>
      </SocialLink>
    </SocialBox>
  )
}

const SocialBox = styled.div`
  margin-top: 3rem;
`
const SocialLink = styled.a`
  color: white;
  font-size: 23px;
  margin-right: 1rem;
`
