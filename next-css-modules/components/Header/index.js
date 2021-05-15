import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

export const Header = () => {
	return (
		<HeaderBox className='contained'>
			<HeaderLogo src='/images/logo.svg' alt='huddle logo' />
			<HeaderButton>Try It Free</HeaderButton>
		</HeaderBox>
	)
}

const HeaderBox = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 24px;

	@media (min-width: 1440px) {
		padding: 48px;
	}
`
const HeaderButton = styled.button`
	border: 1px solid hsl(322, 100%, 66%);
	background-color: white;
	width: 80px;
	height: 24px;
	color: hsl(322, 100%, 66%);
	font-size: 9.41px;
	border-radius: 150px;
	@media (min-width: 1440px) {
		font-size: 16px;
		width: 136px;
		height: 40px;
	}
`

const HeaderLogo = styled.img`
	width: 96px;
	height: 16px;
	@media (min-width: 768px) {
		width: 120px;
		height: 19px;
	}
	@media (min-width: 1440px) {
		width: 240px;
		height: 38px;
	}
`
