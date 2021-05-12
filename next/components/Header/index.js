import React from 'react'
import Image  from 'next/image'
import styled from 'styled-components'

export const Header = () => {
  return (
    <HeaderBox>
      <Image src="/images/logo.svg" alt="huddle logo" width='96px' height='16px'/>
      <HeaderButton>Try It Free</HeaderButton>
    </HeaderBox>
  )
}

const HeaderBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  margin-bottom: 5rem;
`
const HeaderButton = styled.button`
    border: 1px solid hsl(322, 100%, 66%);
    background-color: white;
    width: 80px;
    height: 24px;
    color: hsl(322, 100%, 66%);
    font-size: 9.41px;
    border-radius: 150px;
`