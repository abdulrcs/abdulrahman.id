// Wrapper for any page we gonna add in our website
// So we dont write basic page style multiple time
import React from 'react'
import { chakra, Flex, Stack, Text } from '@chakra-ui/react'
import Navbar from './Navbar'

const Container = ({ enableTransition, children }) => {
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
