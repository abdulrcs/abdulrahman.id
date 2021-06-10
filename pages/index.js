import Head from 'next/head'
import { Stack } from '@chakra-ui/react'
import Container from '../components/Container'
import Introduction from '../components/Introduction'
import FeaturedProjects from '../components/FeaturedProjects'
import LatestArticle from '../components/LatestArticle'

export default function Index({ projects }) {
  return (
    <>
      <Container enableTransition={true}>
        <Head>
          <title>Home - Abdul Rahman</title>
          <title>Abdul Rahman - Software Engineer</title>
          <meta name="title" content="Abdul Rahman - Software Engineer" />
          <meta
            name="description"
            content="Front-end Developer based in Indonesia."
          />

          <meta property="og:type" content="website" />
          <meta property="og:url" content="https://metatags.io/" />
          <meta
            property="og:title"
            content="Abdul Rahman - Software Engineer"
          />
          <meta
            property="og:description"
            content="Front-end Developer based in Indonesia."
          />
          <meta
            property="og:image"
            content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
          />

          <meta property="twitter:card" content="summary_large_image" />
          <meta property="twitter:url" content="https://metatags.io/" />
          <meta
            property="twitter:title"
            content="Abdul Rahman - Software Engineer"
          />
          <meta
            property="twitter:description"
            content="Front-end Developer based in Indonesia."
          />
          <meta
            property="twitter:image"
            content="https://metatags.io/assets/meta-tags-16a33a6a8531e519cc0936fbba0ad904e52d35f34a46c97a2c9f6f7dd7d336f2.png"
          />
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
          <FeaturedProjects projects={projects} />
        </Stack>
      </Container>
    </>
  )
}

let client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticProps() {
  let data = await client.getEntries({
    content_type: 'featuredProjects',
    order: 'fields.order',
  })
  return {
    props: {
      projects: data.items,
    },
  }
}
