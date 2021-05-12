import React from 'react'
import Image from 'next/image'
import styled from 'styled-components'

export const FooterBrandContact = () => {
  return (
    <ContactBox>
      <ContactRow>
        <ContactImage>
          <Image src='/images/icon-phone.svg' alt='phone icon' width='18px' height='18px' />
        </ContactImage>
        <ContactText>Phone: +1-543-123-4567</ContactText>
      </ContactRow>
      <ContactRow>
        <ContactImage>
          <Image src='/images/icon-email.svg' alt='email icon' width='18px' height='18px' />
        </ContactImage>
        <ContactText>example@huddle.com</ContactText>
      </ContactRow>
    </ContactBox>
  )
}

const ContactBox = styled.div`
  margin: 2.5rem 0;
`
const ContactRow = styled.div`
  display: flex;
  margin: 1rem 0;
`
const ContactImage = styled.div`
  margin-right: 1.5rem;
`
const ContactText = styled.div`
  font-weight: 400;
`
