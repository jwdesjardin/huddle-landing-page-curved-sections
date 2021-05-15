import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

import { FooterNewsletter } from './FooterNewsletter'
import { FooterBrand } from './FooterBrand'
import { FooterSocial } from './FooterSocial'

export const Footer = () => {
	return (
		<FooterBox>
			<div className='flex-row contained'>
				{/* footer newletter  */}
				<div className='place-second' style={{ maxWidth: '600px' }}>
					<FooterNewsletter></FooterNewsletter>
				</div>

				<div style={{ maxWidth: '340px' }}>
					{/* footer brand  */}
					<FooterBrand></FooterBrand>

					{/* footer social */}
					<FooterSocial></FooterSocial>
				</div>
			</div>
		</FooterBox>
	)
}

const FooterBox = styled.div`
	background-color: var(--very-dark-cyan);
	color: white;
	padding: 86px 28px;
	font-size: 14px;
	font-weight: 600;
	@media (min-width: 1440px) {
		padding: 146px 96px;
	}
`
