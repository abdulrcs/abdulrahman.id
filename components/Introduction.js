import {
  Link,
  Text,
  Stack,
  Heading,
  Box,
  Icon,
  Button,
  SlideFade,
  useMediaQuery,
} from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Introduction() {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  return (
    <>
      <Stack spacing={10} justifyContent="flex-start" alignItems="flex-start">
        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.6 } }}
        >
          <Text color="button1" fontSize="display2" fontWeight="medium">
            Hey there!, I'm-
          </Text>

          <Heading
            color="textPrimary"
            fontSize="display"
            lineHeight={'95%'}
            fontSize="display"
            color="displayColor"
            letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
          >
            Abdul Rahman.
          </Heading>
        </SlideFade>

        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.7 } }}
        >
          <Heading
            color="textSecondary"
            fontSize="display2"
            fontWeight="medium"
            whiteSpace="pre-wrap"
            letterSpacing={{ sm: '-1.2px', md: '-1.8px' }}
          >
            <Box as="span" color="displayColor">
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
          transition={{ enter: { duration: 0.4, delay: 0.8 } }}
        >
          <Text fontSize="display3" color="textSecondary">
            🚀 Loves to build stuff with Javascript and Python.
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
          transition={{ enter: { duration: 0.4, delay: 0.9 } }}
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
                  background: '#f24b62',
                }}
                position="static"
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
