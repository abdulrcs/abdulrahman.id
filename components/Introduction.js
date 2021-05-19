import {
  Text,
  Stack,
  Heading,
  Box,
  Icon,
  SlideFade,
  useMediaQuery,
} from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'

export default function Introduction() {
  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  return (
    <>
      <Stack spacing={5} justifyContent="flex-start" alignItems="flex-start">
        <SlideFade
          direction="top"
          in={true}
          transition={{ enter: { duration: 0.4, delay: 0.7 } }}
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
          transition={{ enter: { duration: 0.4, delay: 0.8 } }}
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
          transition={{ enter: { duration: 0.4, delay: 0.9 } }}
        >
          <Stack isInline spacing={4}>
            <Icon as={FaGithub} w={6} h={6} />
            <Icon as={FaLinkedin} w={6} h={6} />
            <Icon as={FaEnvelope} w={6} h={6} />
          </Stack>
        </SlideFade>
      </Stack>
    </>
  )
}
