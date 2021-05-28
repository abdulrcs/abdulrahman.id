import { Flex, Heading, Stack } from '@chakra-ui/layout'
import Head from 'next/head'
import Container from '../components/Container'
import styled from '@emotion/styled'

export default function Post({ children, frontMatter }) {
  const { title } = frontMatter
  const PostContainer = styled(Stack)`
    &&& {
      max-width: 960px;
      padding: 24px;
      p {
        font-size: 20px;
        margin-top: 15px;
        margin-bottom: 15px;
        column-count: 1;
      }
      a {
        text-decoration: none;
        color: secondary;
        font-weight: bold;
      }
      a:hover {
        text-decoration: underline;
      }
      li {
        margin-top: 8px;
        margin-bottom: 8px;
      }
      li p {
        margin: 0;
      }
      blockquote {
        padding: 16px;
        color: rgba(255, 255, 255, 0.82);
        border-left: 0.25em solid;
        border-color: #ff1744;
        margin: 0;
        margin-top: 1px;
        margin-bottom: 1px;
        background: #121212;
      }
      blockquote p {
        margin: 0;
        font-style: italic;
      }
    }
  `
  return (
    <>
      <Container>
        <Head>
          <title>{title}</title>
        </Head>
        <Flex my="15vh" justifyContent="center" alignItems="center">
          <PostContainer as="main">
            <Heading>{title}</Heading>
            {children}
          </PostContainer>
        </Flex>
      </Container>
    </>
  )
}
