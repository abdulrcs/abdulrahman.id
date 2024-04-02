import { useEffect, useState } from 'react'
import {
  Avatar,
  Text,
  Heading,
  Stack,
  Spinner,
  Center,
  HStack,
} from '@chakra-ui/react'
import { serialize } from 'next-mdx-remote/serialize'
import { MDXRemote } from 'next-mdx-remote'

import { ArticleJsonLd, NextSeo } from 'next-seo'

import mdxPrism from 'mdx-prism'
import dateFormat from 'dateformat'
import readingTime from 'reading-time'

import Image from '../../components/ChakraNextImage'
import Container from '../../components/Container'
import PostContainer from '../../components/PostContainer'
import MDXComponents from '../../components/MDXComponents'
import { useRouter } from 'next/router'

import { GithubBlog } from '@rena.to/github-blog'

import useUtterances from '../../hook/useUtterances'

export default function Post({ metadata, publishedDate, source }) {
  const [views, setViews] = useState('...')
  const router = useRouter()
  const { slug } = router.query
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/views/${slug}`)
      .then((res) => res.json())
      .then((json) => setViews(json.views))
  }, [])

  const { isCommentsLoading } = useUtterances('comments', metadata.title)

  return (
    <>
      <NextSeo
        title={metadata.title}
        description={metadata.summary}
        canonical={`https://abdulrahman.id/blog/${slug}`}
        openGraph={{
          url: `https://abdulrahman.id/blog/${slug}`,
          site_name: 'Abdul Rahman',
          title: metadata.title,
          description: metadata.summary,
          type: 'article',
          article: {
            authors: ['Abdul Rahman'],
            publishedTime: publishedDate,
            modifiedTime: publishedDate,
            tags: ['Programming', 'Web Development', 'Software Engineering'],
          },
          images: [
            {
              url: metadata.frontmatter.image,
              alt: metadata.title,
            },
          ],
        }}
        additionalMetaTags={[
          { property: 'twitter:card', content: 'summary_large_image' },
          {
            property: 'twitter:url',
            content: `https://abdulrahman.id/blog/${slug}`,
          },
          { property: 'twitter:title', content: metadata.title },
          { property: 'twitter:description', content: metadata.summary },
          { property: 'twitter:image', content: metadata.frontmatter.image },
        ]}
      />
      <ArticleJsonLd
        url={`https://abdulrahman.id/blog/${slug}`}
        title={metadata.title}
        images={[metadata.frontmatter.image]}
        datePublished={publishedDate}
        dateModified={publishedDate}
        authorName="Abdul Rahman"
        publisherName="Abdul Rahman"
        publisherLogo="https://imagizer.imageshack.com/a/img923/7612/A5tDeP.png"
        description={metadata.summary}
      />
      <Container>
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
              direction={{ base: 'column', md: 'row' }}
              alignItems="baseline"
              justifyContent="space-between"
            >
              <Stack isInline alignItems="center">
                <Avatar
                  name="Abdul Rahman"
                  size="xs"
                  src="https://i.imgur.com/jHFMo9A.jpeg"
                  border="1px solid textPrimary"
                />
                <Text fontSize={['xs', 'xs', 'sm', 'sm']} color="textPrimary">
                  Abdul Rahman /{' '}
                  {dateFormat(Date.parse(publishedDate), 'mmmm d, yyyy')}
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
              minH="200px"
              border="1px"
              borderColor={{ base: '#333', md: 'borderColor' }}
            >
              <Image
                src={metadata.frontmatter.image}
                borderRadius="10px"
                width={1366}
                height={892}
                w="100%"
                h="auto"
                mx="auto"
                alt=""
                priority
              ></Image>
            </Stack>
            <PostContainer>
              <MDXRemote {...source} components={MDXComponents} />
              {isCommentsLoading && (
                <Center flexDirection="column" pt={8}>
                  <Spinner thickness="5px" w="56px" h="56px" color="#058d92" />
                  <Text color="textSecondary" fontSize="sm" pt={2}>
                    Loading comments...
                  </Text>
                </Center>
              )}
              <Stack opacity={isCommentsLoading ? 0 : 1}>
                <div id="comments" />
              </Stack>
            </PostContainer>
          </Stack>
        </Stack>
      </Container>
    </>
  )
}

export async function getStaticPaths() {
  const blog = new GithubBlog({
    repo: 'abdulrcs/abdulrahman.id',
    token: process.env.GITHUB_TOKEN,
  })

  const data = await blog.getPosts({
    query: {
      author: 'abdulrcs',
      type: 'post',
      state: 'published',
    },
    pager: { limit: 10, offset: 0 },
  })

  return {
    paths: data.edges.map(({ post }) => ({
      params: { slug: post.frontmatter.slug },
    })),
    fallback: false,
  }
}

export async function getStaticProps({ params }) {
  const blog = new GithubBlog({
    repo: 'abdulrcs/abdulrahman.id',
    token: process.env.GITHUB_TOKEN,
  })
  const data = await blog.getPost({
    query: {
      author: 'abdulrcs',
      search: params.slug,
    },
  })
  const article = data.post
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
      publishedDate: new Date(article.frontmatter.date).toISOString(),
      source: mdxSource,
    },
    revalidate: 30,
  }
}
