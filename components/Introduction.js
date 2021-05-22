import {
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
          >
            <Box as="span" color="white">
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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum quas
            expedita laudantium soluta debitis consequuntur nesciunt voluptates
            minima esse nostrum!
          </Text>
        </SlideFade>
        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.9 } }}
        >
          <Stack isInline spacing={4}>
            <Button
              colorScheme="gray"
              leftIcon={<FaGithub />}
              position="static"
            >
              Github
            </Button>
            <Button
              backgroundColor="#0077b5"
              leftIcon={<FaLinkedin />}
              _hover={{ backgroundColor: '#0090db' }}
              position="static"
            >
              LinkedIn
            </Button>
            <Button
              backgroundColor="#EA4335"
              color="#fff"
              leftIcon={<FaEnvelope />}
              _hover={{ backgroundColor: '#e05a4f' }}
              position="static"
            >
              Email
            </Button>
          </Stack>
        </SlideFade>
      </Stack>
    </>
  )
}
