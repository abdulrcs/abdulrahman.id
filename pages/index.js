import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/Introduction'

export default function Index() {
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
          mx="10vw"
          mt="20vh"
        >
          <Introduction />
        </Stack>
      </Container>
    </>
  )
}
