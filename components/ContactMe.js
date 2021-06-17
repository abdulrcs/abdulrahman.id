import { Link, Button, chakra, Heading, Stack, Text } from '@chakra-ui/react'
import useMediaQuery from '../hook/useMediaQuery'
import { FaLinkedin, FaEnvelope, FaFileAlt } from 'react-icons/fa'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
export default function ContactMe() {
  const isLargerThan800 = useMediaQuery(800)
  return (
    <>
      <Stack
        spacing={10}
        h="70vh"
        w="100%"
        alignItems="center"
        justifyContent="center"
      >
        <SlideUpWhenVisible>
          <Heading fontSize={{ base: '4xl', md: '5xl' }} textAlign="center">
            Keep In Touch.
          </Heading>
        </SlideUpWhenVisible>

        <SlideUpWhenVisible>
          <Text fontSize="md" color="textSecondary" textAlign="center">
            I'm currently open to work as a{' '}
            <chakra.span
              color="button1"
              display={{ base: 'block', md: 'inline' }}
            >
              {' '}
              Front-end Developer.
            </chakra.span>
            <br /> Let's get in touch and talk more about your projects.
          </Text>
        </SlideUpWhenVisible>

        <SlideUpWhenVisible>
          <Stack isInline spacing={4}>
            <Link href="https://linkedin.com/in/abdulrcs" isExternal>
              <Button
                leftIcon={<FaLinkedin fill="#3CCF91" />}
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="white"
              >
                LinkedIn
              </Button>
            </Link>
            <Link href="mailto:abdulrcs1@gmail.com" isExternal>
              <Button
                color="white"
                leftIcon={<FaEnvelope fill="#3CCF91" />}
                transition="0.3s"
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
              >
                Email
              </Button>
            </Link>
            <Link
              href="https://drive.google.com/file/d/1IvhcdThnfMAcPEHy6Yvq4o8vSaIi_ArV/view?usp=sharing"
              isExternal
            >
              <Button
                leftIcon={<FaFileAlt fill="#3CCF91" />}
                position="static"
                size={isLargerThan800 ? 'md' : 'sm'}
                color="white"
              >
                Resume
              </Button>
            </Link>
          </Stack>
        </SlideUpWhenVisible>
      </Stack>
    </>
  )
}
