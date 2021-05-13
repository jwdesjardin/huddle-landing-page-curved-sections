import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

export const Hero = ({ heading, text, button, imgURL, altText }) => {
	return (
		<HeroBox className='contained'>
			{/* OPTIONAL HEADER */}
			{heading && <HeroHeading>{heading}</HeroHeading>}
			{/* OPTIONAL TEXT */}
			{text && <HeroText>{text}</HeroText>}
			{/* OPTIONAL BUTTON */}
			{button && <HeroButton>Get Started For Free</HeroButton>}
			{/* OPTIONAL IMAGE */}
			{imgURL && (
				<div style={{ margin: '6rem 0 1rem' }}>
					<HeroImg src={imgURL} alt={altText} />
				</div>
			)}
		</HeroBox>
	)
}

const HeroBox = styled.div`
	margin: 2rem auto;
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	text-align: center;
	padding: 0 32px;
`
const HeroHeading = styled.h1`
	font-size: 24px;
	font-weight: 600;
	@media (min-width: 1440px) {
		font-size: 48px;
	}
`
const HeroText = styled.p`
	font-size: 14px;
	margin: 2rem 0;
	max-width: 600px;
	@media (min-width: 1440px) {
		font-size: 20px;
		line-height: 1.6;
	}
`
const HeroButton = styled.button`
	font-weight: 600;
	padding: 2vh 4vw;
	border: none;
	background-color: var(--pink);
	color: white;
	border-radius: 150px;
	box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.1);
	margin: 2rem 0 1rem;
	transition: all 0.2s linear;
	&:hover {
		background-color: var(--light-pink);
		transform: scale(0.9);
	}
	@media (min-width: 1440px) {
		font-size: 20px;
	}
`
const HeroImg = styled.img`
	width: 100%;
	max-width: 800px;
`
