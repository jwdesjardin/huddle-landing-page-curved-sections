import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

export const Hero = ({ heading, text, button, imgURL, altText }) => {
  return (
    <HeroBox>
      {/* OPTIONAL HEADER */}
      {heading && <HeroHeading>{heading}</HeroHeading>}
      {/* OPTIONAL TEXT */}
      {text && <HeroText>{text}</HeroText>}
      {/* OPTIONAL BUTTON */}
      {button && <HeroButton>Get Started For Free</HeroButton>}
      {/* OPTIONAL IMAGE */}
      {imgURL && (
        <div style={{ margin: '6rem 0 1rem' }}>
          <Image width='296px' height='209px' src={imgURL} alt={altText} />
        </div>
      )}
    </HeroBox>
  )
}

const HeroBox = styled.div`
  margin: 2rem 0;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding: 0 32px;
`
const HeroHeading = styled.h1`
  font-size: 24px;
`
const HeroText = styled.p`
  font-size: 14px;
  margin: 2rem 0;
`
const HeroButton = styled.button`
  width: 200px;
  height: 40px;
  border: none;
  background-color: var(--pink);
  color: white;
  border-radius: 150px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
  margin: 1rem 0;
`
