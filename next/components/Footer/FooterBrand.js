import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { FooterBrandContact } from './FooterBrandContact'

export const FooterBrand = () => {
  return (
    <div>
      <Image width='200px' height='32px' src='/images/logo-white.svg' alt='huddle brand logo' />
      <BrandText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla quam, hendrerit
        lacinia vestibulum a, ultrices quis sem.
      </BrandText>

      {/* footer brand contact  */}
      <FooterBrandContact></FooterBrandContact>
    </div>
  )
}

const BrandText = styled.p`
  margin: 1rem 0;
  line-height: 2;
`
