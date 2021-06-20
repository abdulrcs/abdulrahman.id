import {
  Avatar,
  Text,
  Heading,
  Stack,
  Image,
  ScaleFade,
} from '@chakra-ui/react'
import Head from 'next/head'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'
import mdxPrism from 'mdx-prism'
import dateFormat from 'dateformat'
import readingTime from 'reading-time'

import Container from '../../components/Container'
import PostContainer from '../../components/PostContainer'
import MDXComponents from '../../components/MDXComponents'
import { useEffect, useState } from 'react'

export default function Post({ metadata, source }) {
  const [views, setViews] = useState('...')
  useEffect(() => {
    async function getViews() {
      await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/views/${metadata.slug}`,
      )
        .then((res) => res.json())
        .then((json) => setViews(json.views))
    }
    getViews()
  }, [])
  return (
    <>
      <Container>
        <Head>
          <title>{metadata.title}</title>
          <meta name="title" content={metadata.title} />
          <meta name="description" content={metadata.summary} />

          <meta property="og:type" content="website" />
          <meta
            property="og:url"
            content={`https://abdulrahman.id/blog/${metadata.slug}`}
          />
          <meta property="og:title" content={metadata.title} />
          <meta property="og:description" content={metadata.summary} />
          <meta property="og:image" content={metadata.image} />

          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:url"
            content={`https://abdulrahman.id/blog/${metadata.slug}`}
          />
          <meta property="twitter:title" content={metadata.title} />
          <meta property="twitter:description" content={metadata.summary} />
          <meta property="twitter:image" content={metadata.image} />
        </Head>
        <Stack my="15vh" justifyContent="center" alignItems="center">
          <Stack
            w={['100vw', '95vw']}
            maxW="680px"
            p={['20px', '20px', '24px', '24px']}
          >
            <Heading
              fontSize={['3xl', '3xl', '5xl', '5xl']}
              color="displayColor"
            >
              {metadata.title}
            </Heading>
            <Stack
              py={4}
              isInline
              alignItems="center"
              justifyContent="space-between"
            >
              <Stack isInline alignItems="center">
                <Avatar
                  name="Abdul Rahman"
                  size="xs"
                  src="https://i.imgur.com/CbbuXeI.png"
                  border="1px solid textPrimary"
                />
                <Text fontSize={['xs', 'xs', 'sm', 'sm']} color="textPrimary">
                  Abdul Rahman /{' '}
                  {dateFormat(Date.parse(metadata.date), 'mmmm d yyyy')}
                </Text>
              </Stack>
              <Stack>
                <Text fontSize={['xs', 'xs', 'sm', 'sm']} color="textSecondary">
                  {metadata.readingTime} &bull; {views} views
                </Text>
              </Stack>
            </Stack>
            <Stack
              bg="secondary"
              borderRadius="10px"
              minH="320px"
              maxH="500px"
              border="1px"
              borderColor={{ base: '#333', md: 'borderColor' }}
            >
              <ScaleFade in={true}>
                <Image
                  src={metadata.image}
                  borderRadius="10px"
                  w="100%"
                  h="100%"
                  mx="auto"
                  alt="illustration"
                ></Image>
              </ScaleFade>
            </Stack>
            <PostContainer>
              <MDXRemote {...source} components={MDXComponents} />
            </PostContainer>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}

let client = require('contentful').createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
})

export async function getStaticPaths() {
  let data = await client.getEntries({
    content_type: 'blogPosts',
  })
  return {
    paths: data.items.map((item) => ({
      params: { slug: item.fields.slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  let data = await client.getEntries({
    content_type: 'blogPosts',
    'fields.slug': params.slug,
  })

  const article = data.items[0].fields
  const source = article.body
  article.readingTime = readingTime(source).text
  const mdxSource = await serialize(source, {
    mdxOptions: {
      rehypePlugins: [mdxPrism],
    },
  })

  return {
    props: {
      metadata: article,
      source: mdxSource,
    },
  }
}
