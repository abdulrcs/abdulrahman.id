import {
  Avatar,
  Box,
  Center,
  Divider,
  HStack,
  Heading,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react'
import { MDXRemote } from 'next-mdx-remote'
import { serialize } from 'next-mdx-remote/serialize'
import { useEffect, useState } from 'react'

import mdxPrism from 'mdx-prism'

import readingTime from 'reading-time'

import dateFormat from 'dateformat'
import { useRouter } from 'next/router'
import Container from '../../components/Container'
import MDXComponents from '../../components/MDXComponents'
import ProjectContainer from '../../components/ProjectContainer'

import { GithubBlog } from '@rena.to/github-blog'

import NextSeoData from '../../components/NextSeoData'
import useUtterances from '../../hook/useUtterances'
import Image from 'next/image'

export default function Post({ metadata, publishedDate, source, toc }) {
  const [views, setViews] = useState('...')

  const router = useRouter()
  const { slug } = router.query
  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/views/${slug}`)
      .then((res) => res.json())
      .then((json) => setViews(json.views))
  }, [slug])

  const [activeId, setActiveId] = useState()
  useEffect(() => {
    const handleScroll = () => {
      let currentId
      for (const heading of toc) {
        const element = document.getElementById(heading.title)
        if (element) {
          const rect = element.getBoundingClientRect()
          if (rect.top < window.innerHeight / 2) {
            currentId = heading.title
          } else {
            break
          }
        }
      }
      setActiveId(currentId)
    }

    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [toc])

  const { isCommentsLoading } = useUtterances('comments', metadata.title)

  return (
    <>
      <NextSeoData
        slug={slug}
        metadata={metadata}
        publishedDate={publishedDate}
      />

      <Container>
        <Stack>
          <Stack
            mx="auto"
            mt="73px"
            border="1px"
            borderColor={{ base: '#333', md: 'borderColor' }}
            borderRadius="10px"
          >
            <Image
              width={1100}
              height={500}
              objectFit="cover"
              style={{
                borderRadius: '10px',
                objectFit: 'cover',
              }}
              alt=""
              priority
              src={metadata.frontmatter.image}
            />
          </Stack>

          <Stack pt={4}>
            <Heading
              as="h1"
              color="displayColor"
              fontSize={['3xl', '3xl', '5xl', '5xl']}
            >
              {metadata.title}
            </Heading>
            <HStack
              alignItems="center"
              justifyContent="space-between"
              direction={{ base: 'column', md: 'row' }}
              py={4}
            >
              <Stack alignItems="center" isInline>
                <Avatar
                  border="1px solid textPrimary"
                  name="Abdul Rahman"
                  size="xs"
                  src="https://i.imgur.com/jk8NmSx.jpeg"
                />

                <Text color="textPrimary" fontSize={['xs', 'xs', 'sm', 'sm']}>
                  Abdul Rahman /{' '}
                  {dateFormat(Date.parse(publishedDate), 'dd mmm yyyy')}
                </Text>
              </Stack>

              <Stack>
                <Text color="textSecondary" fontSize={['xs', 'xs', 'sm', 'sm']}>
                  {metadata.readingTime} &bull; {views} views
                </Text>
              </Stack>
            </HStack>
          </Stack>

          <Divider h="0.5px" my={4} bg="textSecondary" />
        </Stack>

        <HStack alignItems="start" pt="23px" spacing="36px">
          <Stack w={{ base: '100%', md: '50rem' }}>
            <ProjectContainer>
              <MDXRemote {...source} components={MDXComponents} />
            </ProjectContainer>
          </Stack>

          <Stack
            pos="sticky"
            top="6rem"
            display={{ base: 'none', md: 'flex' }}
            w="250px"
            h="500px"
          >
            <Text color="displayColor" fontSize="xl" fontWeight="semibold">
              Table of Contents
            </Text>

            {toc.map((heading) => (
              <Box key={heading.title} pl={`${heading.level * 1}rem`}>
                <Text
                  key={heading.id}
                  color={
                    heading.title === activeId ? 'activeColor' : 'textSecondary'
                  }
                  fontSize={['sm', 'sm', 'md', 'md']}
                  fontWeight={
                    heading.title === activeId ? 'semibold' : 'normal'
                  }
                >
                  <a href={`#${heading.title}`}>{heading.title}</a>
                </Text>
              </Box>
            ))}
          </Stack>
        </HStack>

        <Stack w="100%" mt="36px" mb="15vh">
          {isCommentsLoading && (
            <Center flexDir="column" pt={8}>
              <Spinner w="56px" h="56px" color="#058d92" thickness="5px" />
              <Text pt={2} color="textSecondary" fontSize="sm">
                Loading comments...
              </Text>
            </Center>
          )}
          <Stack opacity={isCommentsLoading ? 0 : 1}>
            <div id="comments" />
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

  const headings = source.match(/#{2,4} .+/g)
  const toc = headings.map((heading) => {
    const level = heading.match(/#/g).length - 2
    const title = heading.replace(/#{2,4} /, '')
    return { title, level }
  })

  return {
    props: {
      metadata: article,
      publishedDate: new Date(article.frontmatter.date).toISOString(),
      source: mdxSource,
      toc: toc,
    },
    revalidate: 30,
  }
}
