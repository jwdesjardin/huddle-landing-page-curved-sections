import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'
import { FooterBrandContact } from './FooterBrandContact'

export const FooterBrand = () => {
	return (
		<div>
			<BrandImage src='/images/logo-white.svg' alt='huddle brand logo' />
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
	line-height: 24px;
	font-weight: 600;
`
const BrandImage = styled.img`
	width: 120px;
	height: 19px;

	@media (min-width: 768px) {
		width: 240px;
		height: 38px;
	}
`
