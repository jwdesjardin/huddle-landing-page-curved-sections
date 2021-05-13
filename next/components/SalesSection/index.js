import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

export const SalesInfoSection = ({ imgURL, altText, title, text, bgBlue, reversed }) => {
	return (
		<SalesInfoSectionContainer className={bgBlue ? 'blue-bg' : ''}>
			<div className='flex-row contained'>
				<ImageBox className={reversed ? 'place-second' : ''}>
					<SalesInfoImage src={imgURL} alt={altText} />
				</ImageBox>
				<SalesInfoContentBox>
					<SalesInfoHeading>{title}</SalesInfoHeading>
					<SalesInfotext>{text}</SalesInfotext>
				</SalesInfoContentBox>
			</div>
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
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	max-width: 520px;
	@media (min-width: 1440px) {
		text-align: left;
		align-items: flex-start;
	}
`
const SalesInfoHeading = styled.p`
	font-size: 20px;
	font-weight: 700;
	@media (min-width: 1440px) {
		font-size: 40px;
	}
`
const SalesInfotext = styled.p`
	font-size: 14px;
	line-height: 1.8;
	margin: 1rem 0;
	@media (min-width: 1440px) {
		font-size: 16px;
	}
`
const SalesInfoImage = styled.img`
	margin: 4rem 0;
	width: 100%;
	padding: 2rem;
	@media (min-width: 1440px) {
		width: 100%;
	}
`

const ImageBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
`
