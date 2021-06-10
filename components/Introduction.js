import {
  Link,
  Text,
  Stack,
  Heading,
  Box,
  Icon,
  Button,
  SlideFade,
  Image,
} from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
import useMediaQuery from '../hook/useMediaQuery'
import styled from '@emotion/styled'

export default function Introduction() {
  const isLargerThan800 = useMediaQuery(800)
  return (
    <>
      <Stack spacing={10} justifyContent="flex-start" alignItems="flex-start">
        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.7 } }}
        >
          <Box position="relative">
            <Image
              src="https://svgsilh.com/svg/26432.svg"
              filter="invert(0.1)"
              w={{ base: '70px', md: '150px' }}
              position="absolute"
              top={{ base: '0', md: '-15' }}
              left={{ base: '-5', md: '-10' }}
              zIndex={0}
            ></Image>
            <Text
              color="button1"
              fontSize="display2"
              fontWeight="medium"
              position="relative"
              zIndex={1}
            >
              Hey there!, I'm-
            </Text>
          </Box>
          <Heading
            color="textPrimary"
            fontSize="display"
            lineHeight={'95%'}
            fontSize="display"
            color="displayColor"
            letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
            position="relative"
            zIndex={1}
          >
            Abdul Rahman.
          </Heading>
        </SlideFade>

        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.8 } }}
        >
          <Heading
            color="textSecondary"
            fontSize="display2"
            fontWeight="medium"
            whiteSpace="pre-wrap"
            letterSpacing="-1.6px"
          >
            <Box color="displayColor" as="span">
              Software Engineer.
            </Box>{' '}
            A self-taught developer{' '}
            {isLargerThan800
              ? 'with an\ninterest in Computer Science.'
              : 'with an interest in Computer Science.'}
          </Heading>
        </SlideFade>

        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.9 } }}
        >
          <Text fontSize="display3" color="textSecondary">
            🚀 Exploring opportunities and side projects.
            <br />
            <Stack isInline spacing={1}>
              <Box>🎓</Box>
              <Box>
                Currently an Informatics Student at Universitas Negeri Surabaya.
              </Box>
            </Stack>
          </Text>
        </SlideFade>
        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 1.0 } }}
        >
          <Stack isInline spacing={4}>
            <Link
              href="https://github.com/abdulrcs"
              _hover={{ textDecoration: 'none' }}
              isExternal
            >
              <Button
                colorScheme="gray"
                leftIcon={<FaGithub />}
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
              >
                Github
              </Button>
            </Link>
            <Link
              href="https://linkedin.com/in/abdulrcs"
              _hover={{ textDecoration: 'none' }}
              isExternal
            >
              <Button
                backgroundColor="#0077b5"
                leftIcon={<FaLinkedin />}
                _hover={{ backgroundColor: '#0090db' }}
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
              >
                LinkedIn
              </Button>
            </Link>
            <Link
              href="mailto:abdulrcs1@gmail.com"
              _hover={{ textDecoration: 'none' }}
              isExternal
            >
              <Button
                background="#e94057"
                color="white"
                leftIcon={<FaEnvelope />}
                transition="0.3s"
                _hover={{
                  background: '#f04f65',
                }}
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
              >
                Email
              </Button>
            </Link>
          </Stack>
        </SlideFade>
      </Stack>
    </>
  )
}
