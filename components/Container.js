import { Box, Flex, Stack, Text, chakra } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import ReactGA from 'react-ga4'
import Navbar from './Navbar'

const Container = ({ enableTransition, children }) => {
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    ReactGA.initialize(process.env.NEXT_PUBLIC_UA_CODE)
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  // fix hydration mismatch from using useMediaQuery hooks
  if (mounted)
    return (
      <Box
        w={{ base: '100%', md: '70rem' }}
        mx={{ base: '0', md: 'auto' }}
        px={{ base: '22px', lg: 0 }}
        py={4}
        transition="0.4s"
      >
        <Navbar enableTransition={enableTransition} />
        <Flex as="main" justify="center" direction="column">
          {children}
        </Flex>
        <Stack alignItems="center" mt={10} mb={5}>
          <Text fontSize="sm" textAlign="center">
            Designed and Developed by Abdul Rahman.
            <br />
            Built with{' '}
            <chakra.span color="button1" fontWeight="semibold">
              Next.js
            </chakra.span>{' '}
            &{' '}
            <chakra.span color="button1" fontWeight="semibold">
              Chakra UI
            </chakra.span>
            . Hosted on{' '}
            <chakra.span color="button1" fontWeight="semibold">
              Vercel
            </chakra.span>
            .
          </Text>
        </Stack>
      </Box>
    )
}

export default Container
