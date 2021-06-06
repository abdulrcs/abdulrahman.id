import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/Introduction'
import Projects from '../components/Projects'
import LatestArticle from '../components/LatestArticle'

export default function Index() {
  return (
    <>
      <Container enableTransition={true}>
        <Head>
          <title>Home - Abdul Rahman</title>
        </Head>

        <Stack
          as="main"
          spacing={20}
          justifyContent="center"
          alignItems="flex-start"
          px={['5vw', '10vw']}
          mt={['15vh', '15vh', '22.5vh', '22.5vh']}
        >
          <Introduction />
          <Projects />
        </Stack>
      </Container>
    </>
  )
}
