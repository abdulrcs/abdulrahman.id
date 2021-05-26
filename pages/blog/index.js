import { Stack, Heading } from '@chakra-ui/layout'
import Head from 'next/head'
import Container from '../../components/Container'

export default function Index() {
  return (
    <Container>
      <Head>
        <title>Blog - Abdul Rahman</title>
      </Head>

      <Stack
        as="main"
        spacing={20}
        justifyContent="center"
        alignItems="flex-start"
        mx={{ sm: '8vw', md: '10vw' }}
        my="22.5vh"
      >
        <Heading>This is a Blog.</Heading>
      </Stack>
    </Container>
  )
}
