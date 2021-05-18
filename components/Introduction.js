import { Text, Stack, Heading, Box, Icon } from '@chakra-ui/react'
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa'
export default function Introduction() {
  return (
    <>
      <Stack spacing={5} justifyContent="flex-start" alignItems="flex-start">
        <Text color="button1" fontSize="36px" fontWeight="medium">
          Hey there!, I'm-
        </Text>

        <Heading
          color="textPrimary"
          fontSize="display"
          lineHeight={'95%'}
          fontSize="96px"
        >
          Abdul Rahman.
        </Heading>

        <Heading color="textSecondary" fontSize="36px" fontWeight="medium">
          <Box as="span" color="white">
            Software Engineer.
          </Box>{' '}
          A self-taught developer with an <br /> interest in Computer Science.
        </Heading>
        <Stack isInline spacing={4}>
          <Icon as={FaGithub} w={6} h={6} />
          <Icon as={FaLinkedin} w={6} h={6} />
          <Icon as={FaEnvelope} w={6} h={6} />
        </Stack>
      </Stack>
    </>
  )
}
