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
      <NewsletterInput type='text' />
      <NewsletterButton>Subscribe</NewsletterButton>
    </NewsletterBox>
  )
}

const NewsletterBox = styled.div`
  margin-bottom: 85px;
`

const NewsletterHeading = styled.p`
  font-size: 20px;
`

const NewsletterText = styled.p`
  margin: 1rem 0;
  line-height: 2;
`

const NewsletterInput = styled.input`
  width: 100%;
  padding: 15px;
  background-color: white;
  border: none;
  border-radius: 6px;
`

const NewsletterButton = styled.button`
  height: 48px;
  width: 160px;
  background-color: var(--pink);
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  font-weight: 700;
  margin: 1rem 0;
  float: right;
`
