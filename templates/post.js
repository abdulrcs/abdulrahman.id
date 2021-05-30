import { Heading, Stack } from '@chakra-ui/react'
import Head from 'next/head'
import Container from '../components/Container'
import PostContainer from '../components/PostContainer'

export default function Post({ children, frontMatter }) {
  const { title } = frontMatter
  return (
    <>
      <Container>
        <Head>
          <title>{title}</title>
        </Head>
        <Stack my="15vh" justifyContent="center" alignItems="center">
          <PostContainer as="main" background="secondary">
            <Heading as="h1" fontSize="2em">
              {title}
            </Heading>
            {children}
          </PostContainer>
        </Stack>
      </Container>
    </>
  )
}
