import React, { useState, useEffect, useRef } from 'react'
import {
  Button,
  Flex,
  Box,
  Text,
  Slide,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  Stack,
  Icon,
} from '@chakra-ui/react'
import NextLink from 'next/link'
import styled from '@emotion/styled'
import useMediaQuery from '../hook/useMediaQuery'
import { AiOutlineMenu } from 'react-icons/ai'

export default function Navbar({ enableTransition }) {
  const isLargerThan768 = useMediaQuery(768)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const firstField = useRef()
  const Bracket = styled.span`
    color: #8f9094;
    font-weight: 600;
  `
  const NavbarDrawer = () => (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={onClose}
      >
        <DrawerOverlay />
        <DrawerContent backgroundColor="secondary">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Bracket>&#123;</Bracket>A<Bracket>&#125;</Bracket>
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" fontSize="16px">
                  Home
                </Button>
              </NextLink>
              <NextLink href="/projects" passHref>
                <Button as="a" variant="ghost" fontSize="16px">
                  Projects
                </Button>
              </NextLink>
              <NextLink href="/blog" passHref>
                <Button as="a" variant="ghost" fontSize="16px">
                  Blog
                </Button>
              </NextLink>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )

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

  const navbarDuration = navbar == 2 ? (enableTransition ? 0.5 : 0) : 0.2

  return (
    <Box zIndex="99">
      <Slide
        direction="top"
        reverse
        in={navbar}
        transition={
          enableTransition
            ? { enter: { duration: navbarDuration, delay: 0.01 } }
            : { enter: { duration: navbarDuration, delay: 0 } }
        }
        background="black"
      >
        <Flex
          as="nav"
          flexDirection="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
          px="3vw"
          py="3"
          borderBottom="0.5px solid #1e2029"
          background="black"
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
          {isLargerThan768 ? (
            <Box color="textSecondary">
              <NextLink href="/" passHref>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px">
                  Home
                </Button>
              </NextLink>
              <NextLink href="/projects" passHref>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px">
                  Projects
                </Button>
              </NextLink>
              <NextLink href="/blog" passHref>
                <Button as="a" variant="ghost" p="4" ml="3vw" fontSize="16px">
                  Blog
                </Button>
              </NextLink>{' '}
            </Box>
          ) : (
            <Icon as={AiOutlineMenu} w={7} h={7} onClick={onOpen} />
          )}
        </Flex>
      </Slide>
      <NavbarDrawer />
    </Box>
  )
}
