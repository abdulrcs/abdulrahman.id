import { useState } from 'react'
import { Stack, Heading, Text, Divider, Flex, Box } from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import Container from '../../components/Container'
import { FaSearch } from 'react-icons/fa'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import useMediaQuery from '../../hook/useMediaQuery'
import dateFormat from 'dateformat'

import { GithubBlog } from '@rena.to/github-blog'

export default function Index({ posts }) {
  const [query, setQuery] = useState('')
  const handleChange = (e) => setQuery(e.target.value)
  const isLargerThan1024 = useMediaQuery(1024)

  return (
    <Container>
      <Head>
        <title>Blog - Abdul Rahman</title>
        <meta name="title" content="Blog - Abdul Rahman" />
        <meta
          name="description"
          content="Writings on programming, tutorials, and my experiences."
        />

        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://abdulrahman.id/blog" />
        <meta property="og:title" content="Blog - Abdul Rahman" />
        <meta
          property="og:description"
          content="Writings on programming, tutorials, and my experiences."
        />
        <meta
          property="og:image"
          content="https://imagizer.imageshack.com/a/img924/6408/mSltwm.png"
        />

        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://abdulrahman.id/" />
        <meta property="twitter:title" content="Blog - Abdul Rahman" />
        <meta
          property="twitter:description"
          content="Writings on programming, tutorials, and my experiences."
        />
        <meta
          property="twitter:image"
          content="https://imagizer.imageshack.com/a/img923/7612/A5tDeP.png"
        />
      </Head>
      <Stack
        as="main"
        spacing={5}
        justifyContent="center"
        alignItems="flex-start"
        px={['5vw', '10vw']}
        my={['15vh', '15vh', '22.5vh', '22.5vh']}
      >
        <Heading color="displayColor" fontSize={{ base: '4xl', md: '6xl' }}>
          Blog
        </Heading>
        <Text fontSize={{ base: '14px', md: '16px' }}>
          This is where I share my writings on programming, tutorials, and my
          experiences.
        </Text>
        <InputGroup maxW="400px">
          <InputRightElement pointerEvents="none" children={<FaSearch />} />
          <Input
            type="text"
            placeholder="Search articles"
            value={query}
            onChange={handleChange}
          />
        </InputGroup>
        <Divider />
        <Stack spacing={5}>
          {posts
            .filter((e) =>
              e.post.title.toLowerCase().includes(query.toLowerCase()),
            )
            .map(({ post }) => (
              <Stack
                key={post.frontmatter.slug}
                direction={isLargerThan1024 ? 'row' : 'column'}
                alignItems="flex-start"
                justifyContent="flex-start"
              >
                <Text
                  color="textSecondary"
                  display={isLargerThan1024 ? 'block' : 'none'}
                  width={100}
                  textAlign="right"
                >
                  {dateFormat(Date.parse(post.frontmatter.date), 'mmm d yyyy')}
                  <br />{' '}
                  <Text fontSize="sm" textAlign="right">
                    {post.frontmatter.readingTime}
                  </Text>
                </Text>
                <Text
                  color="textSecondary"
                  fontSize="sm"
                  display={isLargerThan1024 ? 'none' : 'block'}
                >
                  {dateFormat(Date.parse(post.frontmatter.date), 'mmm d yyyy')}{' '}
                  <Box as="span" fontSize="xs">
                    &bull;
                  </Box>{' '}
                  {post.frontmatter.readingTime}
                </Text>
                <Flex flexDirection="column" px={isLargerThan1024 ? 10 : 0}>
                  <Link href={'/blog/' + post.frontmatter.slug}>
                    <Text
                      color="displayColor"
                      fontSize="xl"
                      fontWeight="bold"
                      cursor="pointer"
                    >
                      {post.title}
                    </Text>
                    <Text color="textSecondary">
                      {post.frontmatter.summary}
                    </Text>

                    <Text color="button1" cursor="pointer">
                      Learn more &rarr;
                    </Text>
                  </Link>
                </Flex>
              </Stack>
            ))}
        </Stack>
      </Stack>
    </Container>
  )
}

export async function getStaticProps() {
  const blog = new GithubBlog({
    repo: 'abdulrcs/abdulrahman.id',
    token: process.env.GITHUB_TOKEN,
  })
  const posts = await blog.getPosts({
    query: {
      author: 'abdulrcs',
      type: 'post',
      state: 'published',
    },
    pager: { limit: 10, offset: 0 },
  })

  return {
    props: {
      posts: posts.edges.sort(
        (a, b) =>
          Date.parse(b.post.frontmatter.date) -
          Date.parse(a.post.frontmatter.date),
      ),
    },
  }
}
