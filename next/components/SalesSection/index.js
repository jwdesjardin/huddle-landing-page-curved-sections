import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

export const SalesInfoSection = ({ imgURL, altText, title, text, bgBlue }) => {
  return (
    <SalesInfoSectionContainer className={bgBlue ? 'blue-bg flex-row' : 'flex-row'}>
      <SalesInfoImageBox>
        <Image src={imgURL} alt={altText} width='280px' height='280px' />
      </SalesInfoImageBox>

      <SalesInfoContentBox>
        <SalesInfoHeading>{title}</SalesInfoHeading>
        <SalesInfotext>{text}</SalesInfotext>
      </SalesInfoContentBox>
    </SalesInfoSectionContainer>
  )
}

// STYLED COMPONENTS
const SalesInfoSectionContainer = styled.div`
  padding: 2rem 0;
`
const SalesInfoContentBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-self: center;
  text-align: center;
  margin: 2rem 1.5rem;
`
const SalesInfoHeading = styled.p`
  font-size: 20px;
  font-weight: 700;
`
const SalesInfotext = styled.p`
  font-size: 14px;
  line-height: 1.8;
  margin: 1rem 0;
`
const SalesInfoImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;
`
