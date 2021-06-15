import {
  SimpleGrid,
  Text,
  Stack,
  Heading,
  Image,
  Flex,
  Box,
  chakra,
} from '@chakra-ui/react'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
export default function AboutMe() {
  return (
    <>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
        <SlideUpWhenVisible>
          <Stack spacing={4}>
            <Heading fontFamily="Ubuntu" fontSize="2xl">
              ⚡ About Me
            </Heading>
            <Text
              color="textSecondary"
              fontSize={{ base: '14px', md: '16px' }}
              whiteSpace="pre-line"
            >
              Hey! I'm Abdul Rahman, I've been close to a computer since an
              early age, and been passionate about it ever since. <br />
              <br /> I really like to build stuff using no-code tools back in
              2010, and from that, I explored how to code myself and
              fast-forward to today, I do programming in various languages and
              technologies, and had the privilege to worked as a Software
              Engineer in a B2B Company, I'm interested in building something
              awesome with code and automate tasks with code, currently focused
              in <chakra.span color="button1">
                Web Development
              </chakra.span>,{' '}
              <chakra.span color="button1">Open Source</chakra.span> and{' '}
              <chakra.span color="button1">Competitive Programming</chakra.span>
              .
              <br />
              <br />
              When I'm not coding I play games with my friends, watch some show
              on Netflix, or if the weather's good, play basketball! 🏀
            </Text>
          </Stack>
        </SlideUpWhenVisible>
        <SlideUpWhenVisible>
          <Flex alignItems="center" justifyContent="center" position="relative">
            <Box
              maxW={{ base: '300px', lg: '350px' }}
              maxH={{ base: '300px', lg: '350px' }}
            >
              <Image
                src="https://svgsilh.com/svg/26432.svg"
                filter="invert(0.1)"
                zIndex={3}
                position="absolute"
                top={0}
                right={0}
                w={{ base: '100px', lg: '150px' }}
              />
              <Image
                src="https://i.imgur.com/CbbuXeI.png"
                w="100%"
                maxW={{ base: '300px', lg: '350px' }}
                maxH={{ base: '300px', lg: '350px' }}
              />
            </Box>
          </Flex>
        </SlideUpWhenVisible>
      </SimpleGrid>
    </>
  )
}
