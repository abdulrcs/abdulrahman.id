import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/Introduction'
import Projects from '../components/Projects'

export default function Index() {
  return (
    <>
      <Container>
        <Head>
          <title>Home - Abdul Rahman</title>
        </Head>

        <Stack
          as="main"
          spacing={20}
          justifyContent="center"
          alignItems="flex-start"
          mx={{ sm: '8vw', md: '10vw' }}
          mt="22.5vh"
        >
          <Introduction />
          <Projects />
        </Stack>
      </Container>
    </>
  )
}
