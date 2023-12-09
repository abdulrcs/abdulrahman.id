import React, { useEffect, useState } from 'react'
import { chakra, Flex, Stack, Text } from '@chakra-ui/react'
import Navbar from './Navbar'
import ReactGA from 'react-ga4'

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
      <>
        <Navbar enableTransition={enableTransition} />
        <Flex as="main" justifyContent="center" flexDirection="column">
          {children}
        </Flex>
        <Stack alignItems="center" mt={10} mb={5}>
          <Text textAlign="center" fontSize="sm">
            Designed and Developed by Abdul Rahman.
            <br />
            Built with{' '}
            <chakra.span fontWeight="semibold" color="button1">
              Next.js
            </chakra.span>{' '}
            &{' '}
            <chakra.span fontWeight="semibold" color="button1">
              Chakra UI
            </chakra.span>
            . Hosted on{' '}
            <chakra.span fontWeight="semibold" color="button1">
              Vercel
            </chakra.span>
            .
          </Text>
        </Stack>
      </>
    )
}

export default Container
