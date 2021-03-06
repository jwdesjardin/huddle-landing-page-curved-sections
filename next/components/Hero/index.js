import React from 'react'
import Image from 'next/image'
import styled, { css } from 'styled-components'

export const Hero = ({ heading, text, button, imgURL, altText, secondary }) => {
	return (
		<HeroBox className='contained'>
			{/* OPTIONAL HEADER */}
			{heading && <HeroHeading secondary={secondary}>{heading}</HeroHeading>}
			{/* OPTIONAL TEXT */}
			{text && <HeroText>{text}</HeroText>}
			{/* OPTIONAL BUTTON */}
			{button && <HeroButton>Get Started For Free</HeroButton>}
			{/* OPTIONAL IMAGE */}
			{imgURL && (
				<div style={{ margin: '6rem 0 1rem' }}>
					<Image src={imgURL} alt={altText ? altText : ''} width='1016px' height='720px' />
				</div>
			)}
		</HeroBox>
	)
}

const HeroBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-evenly;
	align-items: center;
	text-align: center;
	padding: 0 32px;
	margin-top: 5rem;
	@media (min-width: 1440px) {
		margin-top: 150px;
	}
`
const HeroHeading = styled.h1`
	font-size: 24px;
	@media (min-width: 1440px) {
		font-size: 48px;
		${(props) =>
			props.secondary &&
			css`
				font-size: 40px;
			`};
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

// probably want this to stay consistent large size and not overly responsive
const HeroButton = styled.button`
	height: 40px;
	width: 200px;
	font-weight: 700;
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
		box-shadow: 0px 2px 1px rgba(0, 0, 0, 0.1);
	}

	/* using this method to scale up size and font of button */
	/* also look into clamp in SCSS?  */
	@media (min-width: 800px) {
		font-size: 16px;
		height: 60px;
		width: 300px;
	}
	@media (min-width: 1440px) {
		box-shadow: 0px 8px 8px 0px rgba(0, 0, 0, 0.1);
		font-size: 20px;
		height: 80px;
		width: 400px;
	}
`
