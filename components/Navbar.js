import React, { useState, useEffect } from 'react'
import { Button, Flex, Box, Text, Slide } from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'

export default function Navbar({ enableTransition }) {
  const [navbar, setNavbar] = useState(2)

  // Show navbar on scroll up, hide when scroll down.
  let scrollValue = 0
  const showNavbar = () => {
    if (window.scrollY < scrollValue) {
      setNavbar(1)
    } else if (window.scrollY > 50) {
      setNavbar(0)
    }
    scrollValue = window.scrollY
  }

  useEffect(() => {
    window.addEventListener('scroll', showNavbar)
  }, [])

  const StickNav = styled(Flex)`
    position: sticky;
    z-index: 10;
    top: 0;
    border-bottom: 0.5px solid #1e2029;
    backdrop-filter: blur(4px);
  `

  const Bracket = styled.span`
    color: #8f9094;
    font-weight: 600;
  `
  const navbarDuration = navbar == 2 ? (enableTransition ? 0.4 : 0) : 0.2

  return (
    <Slide
      direction="top"
      reverse
      in={navbar}
      transition={
        enableTransition
          ? { enter: { duration: navbarDuration, delay: 0.01 } }
          : { enter: { duration: navbarDuration, delay: 0 } }
      }
    >
      <StickNav
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
        as="nav"
        px="3vw"
        py="3"
      >
        <NextLink href="/" passHref>
          <Text
            cursor="pointer"
            color="displayColor"
            fontWeight="bold"
            fontSize="32px"
          >
            <Bracket>&#123;</Bracket>A<Bracket>&#125;</Bracket>
          </Text>
        </NextLink>
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
  )
}
