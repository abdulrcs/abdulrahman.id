import React, { useRef } from 'react'
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
        initialFocusRef={firstField}
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
      >
        <DrawerOverlay />
        <DrawerContent bgColor="secondary">
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            <Bracket>&#123;</Bracket>A<Bracket>&#125;</Bracket>
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <NextLink passHref href="/">
                <Button as="a" fontSize="16px" variant="ghost">
                  Home
                </Button>
              </NextLink>
              <NextLink passHref href="/projects">
                <Button as="a" fontSize="16px" variant="ghost">
                  Projects
                </Button>
              </NextLink>
              <NextLink passHref href="/blog">
                <Button as="a" fontSize="16px" variant="ghost">
                  Blog
                </Button>
              </NextLink>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )

  return (
    <Box pos="sticky" zIndex={99}>
      <Slide
        direction="top"
        bg="black"
        transition={
          enableTransition
            ? { enter: { duration: 0.5, delay: 0.01 } }
            : { enter: { duration: 0, delay: 0 } }
        }
        in={true}
        reverse
      >
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          direction="row"
          w={{ base: '100%', lg: '75rem' }}
          mx="auto"
          px="22px"
          py="3"
          bg="black"
          borderBottom="0.5px solid #1e2029"
        >
          <NextLink passHref href="/">
            <Text
              color="displayColor"
              fontSize="32px"
              fontWeight="bold"
              cursor="pointer"
            >
              <Bracket>&#123;</Bracket>A<Bracket>&#125;</Bracket>
            </Text>
          </NextLink>
          {isLargerThan768 ? (
            <Box mr={7} color="displayColor">
              <NextLink passHref href="/">
                <Button as="a" p="4" fontSize="16px" variant="ghost">
                  Home
                </Button>
              </NextLink>
              <NextLink passHref href="/projects">
                <Button as="a" p="4" fontSize="16px" variant="ghost">
                  Projects
                </Button>
              </NextLink>
              <NextLink passHref href="/blog">
                <Button as="a" p="4" fontSize="16px" variant="ghost">
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
