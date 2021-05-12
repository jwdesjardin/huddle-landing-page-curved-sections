import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { FooterNewsletter } from './FooterNewsletter'
import { FooterBrand } from './FooterBrand'
import { FooterSocial } from './FooterSocial'

export const Footer = () => {
  return (
    <FooterBox>
      {/* footer newletter  */}
      <FooterNewsletter></FooterNewsletter>

      {/* footer brand  */}
      <FooterBrand></FooterBrand>

      {/* footer social */}
      <FooterSocial></FooterSocial>
    </FooterBox>
  )
}

const FooterBox = styled.div`
  background-color: var(--very-dark-cyan);
  color: white;
  padding: 32px;
  display: flex;
  flex-direction: column;
  font-size: 14px;
  font-weight: 600;
`
