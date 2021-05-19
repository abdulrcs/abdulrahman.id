// Wrapper for any page we gonna add in our website
// So we dont write basic page style multiple time
import React, { useState, useEffect } from 'react'
import { Button, Flex, Box, Text, Slide } from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'

const Container = ({ children }) => {
  const [navbar, setNavbar] = useState(true)

  const changeBackground = () => {
    console.log(window.scrollY)
    if (window.scrollY >= 80) {
      setNavbar(false)
    } else {
      setNavbar(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeBackground)
  }, [])

  const StickNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
  `

  const Bracket = styled.span`
    color: #8f9094;
    font-weight: 600;
  `

  return (
    <>
      <Slide
        direction="top"
        reverse
        in={navbar}
        transition={{ enter: { duration: 0.4, delay: 0.3 } }}
      >
        <StickNav
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          as="nav"
          px="3vw"
          my={5}
        >
          <Text color="white" fontWeight="bold" fontSize="32px">
            <Bracket>&#123;</Bracket>A<Bracket>&#125;</Bracket>
          </Text>
          <Box color="textSecondary">
            <NextLink href="/" passHref>
              <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px">
                Home
              </Button>
            </NextLink>
            <NextLink href="/blog" passHref>
              <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px">
                Blog
              </Button>
            </NextLink>
          </Box>
        </StickNav>
      </Slide>
      <Flex
        as="main"
        justifyContent="center"
        flexDirection="column"
        // px={[0, 4, 4]}
        // mt={[4, 8, 8]}
      >
        {children}
      </Flex>
    </>
  )
}

export default Container
