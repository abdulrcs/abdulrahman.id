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
          mx={{ sm: '8vw', md: '10vw' }}
          my="22.5vh"
        >
          <Introduction />
          <Projects />
          <LatestArticle />
        </Stack>
      </Container>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch('https://dailyprayer.abdulrcs.repl.co/api/mataram')
  const data = await res.json()
  return {
    props: { prayer: data },
  }
}
