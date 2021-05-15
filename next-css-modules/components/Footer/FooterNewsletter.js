import React from 'react'
import styled from 'styled-components'

export const FooterNewsletter = () => {
	return (
		<NewsletterBox>
			<NewsletterHeading>Newsletter</NewsletterHeading>
			<NewsletterText>
				To recieve tips on how to grow your community, sign up to our weekly newsletter. We’ll never
				send you spam or pass on your email address
			</NewsletterText>
			<InputContainer>
				<NewsletterInput type='text' />
				<NewsletterButton>Subscribe</NewsletterButton>
			</InputContainer>
		</NewsletterBox>
	)
}

const NewsletterBox = styled.div`
	margin-bottom: 85px;
	font-size: 14px;
	@media (min-width: 1440px) {
		width: 520px;
	}
`

const NewsletterHeading = styled.p`
	font-size: 20px;
	font-weight: 600;
	text-transform: uppercase;
	@media (min-width: 1440px) {
		font-size: 24px;
	}
`

const NewsletterText = styled.p`
	margin: 1rem 0;
	line-height: 2;
	@media (min-width: 1440px) {
		font-size: 14px;
		max-width: 344px;
	}
`

const InputContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	align-items: center;
	@media (min-width: 1440px) {
		grid-template-columns: repeat(4, 1fr);
	}
`

const NewsletterInput = styled.input`
	grid-column: 1 / span 2;
	background-color: white;
	border: none;
	border-radius: 6px;
	padding: 1rem;

	@media (min-width: 1440px) {
		grid-column: 1 / span 3;
		margin-right: 2rem;
	}
`

const NewsletterButton = styled.button`
	grid-column: 2 / span 1;
	padding: 0.8rem 0;
	background-color: var(--pink);
	color: white;
	border: none;
	border-radius: 5px;
	font-size: 16px;
	font-weight: 700;
	margin: 1rem 0;
	float: right;
	@media (min-width: 1440px) {
		grid-column: 4 / span 3;
	}
`
