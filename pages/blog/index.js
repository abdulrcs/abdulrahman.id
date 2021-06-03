import { Stack, Heading } from '@chakra-ui/layout'
import Head from 'next/head'
import Link from 'next/link'
import Container from '../../components/Container'

export default function Index({ articles }) {
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
        <ul>
          {articles.map((article) => (
            <li key={article.sys.id}>
              <Link href={'/blog/' + article.fields.slug}>
                <a>{article.fields.title}</a>
              </Link>
            </li>
          ))}
        </ul>
      </Stack>
    </Container>
  )
}

let client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'blogPosts',
  })
  return {
    props: {
      articles: data.items,
    },
  }
}
