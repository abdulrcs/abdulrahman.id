import Head from 'next/head'
import { Text, Stack, Flex, Heading, useColorMode } from '@chakra-ui/react'
import Container from '../components/Container'

export default function Index() {
  const { colorMode } = useColorMode()

  const colorSecondary = {
    light: 'gray.700',
    dark: 'gray.400',
  }

  return (
    <>
      <Container>
        <Head>
          <title>Home - Abdul Rahman</title>
        </Head>
        <Stack
          as="main"
          spacing={8}
          justifyContent="center"
          alignItems="flex-start"
          m="0 auto 4rem auto"
          maxWidth="700px"
          px={2}
        >
          <Flex
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start"
            maxWidth="700px"
          >
            <Heading mb={2}>Hi, I'm Abdul Rahman 👋</Heading>
            <Text color={colorSecondary[colorMode]}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi
              quae magnam sed aliquam, nihil quisquam. Possimus praesentium
              temporibus cum, quam nulla optio quae!
            </Text>
          </Flex>
        </Stack>
      </Container>
    </>
  )
}
