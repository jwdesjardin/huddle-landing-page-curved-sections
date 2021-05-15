import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

export const DataSection = () => {
	return (
		<section className='flex-row contained' style={{ maxWidth: '1200px' }}>
			<DataSectionBox
				imgURL='/images/icon-communities.svg'
				heading='1.4k+'
				text='Communities Formed'
			></DataSectionBox>
			<DataSectionBox
				imgURL='/images/icon-messages.svg'
				heading='2.7m+'
				text='Messages Sent'
			></DataSectionBox>
		</section>
	)
}

const DataSectionBox = ({ imgURL, heading, text }) => {
	return (
		<DataSectionBoxContainer>
			<DataSectionImageBox>
				<Image height='48px' width='48px' src={imgURL} alt='communities icon' />
			</DataSectionImageBox>
			<DataSectionBoxHeading>{heading}</DataSectionBoxHeading>
			<DataSectionBoxText>{text}</DataSectionBoxText>
		</DataSectionBoxContainer>
	)
}

const DataSectionBoxContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin: 4rem 0;
`

// best example of using the next.js Image component with wrapper styles
const DataSectionImageBox = styled.div`
	width: 36px;
	transform: translateX(-66px);
	@media (min-width: 1440px) {
		width: 56px;
		transform: translateX(-99px);
	}
`

const DataSectionBoxHeading = styled.p`
	font-weight: 700;
	font-size: 56px;
	line-height: 85px;
	@media (min-width: 768px) {
		font-size: 72px;
		line-height: 110px;
	}
	@media (min-width: 1440px) {
		font-size: 96px;
		line-height: 140px;
	}
`

const DataSectionBoxText = styled.p`
	color: #808e9a;
	font-size: 13px;
	@media (min-width: 1440px) {
		font-size: 24px;
	}
`
