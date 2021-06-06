import {
  Stack,
  Heading,
  Text,
  Divider,
  Flex,
  Box,
  Tag,
  TagLabel,
} from '@chakra-ui/react'
import Head from 'next/head'
import Link from 'next/link'
import Container from '../../components/Container'
import { FaSearch } from 'react-icons/fa'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import useMediaQuery from '../../hook/useMediaQuery'
import readingTime from 'reading-time'
import dateFormat from 'dateformat'

export default function Index({ articles }) {
  const isLargerThan1024 = useMediaQuery(1024)
  const TagColor = (tag) => {
    // github, python, react, javascript, productivity, tutorial
    if (tag == 'career') return 'blue'
    else if (tag == 'programming') return 'teal'
    else if (tag == 'webdev') return 'purple'
    else if (tag == 'github') return 'gray'
    else if (tag == 'python') return 'yellow'
    else if (tag == 'react') return 'cyan'
    else if (tag == 'javascript') return 'yellow'
    else if (tag == 'productivity') return 'orange'
    else if (tag == 'tutorial') return 'green'
    else return 'gray'
  }

  return (
    <Container>
      <Head>
        <title>Blog - Abdul Rahman</title>
      </Head>

      <Stack
        as="main"
        spacing={5}
        justifyContent="center"
        alignItems="flex-start"
        px={['5vw', '10vw']}
        my={['15vh', '15vh', '22.5vh', '22.5vh']}
      >
        <Heading color="displayColor" fontSize="6xl">
          Blog
        </Heading>
        <Text fontSize="16px">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatum
          facilis velit dolorem dolorum excepturi. Impedit molestias sunt hic a
          provident!
        </Text>
        <InputGroup maxW="400px">
          <InputRightElement pointerEvents="none" children={<FaSearch />} />
          <Input type="text" placeholder="Search articles" />
        </InputGroup>
        <Divider />
        <Stack spacing={5}>
          {articles.map((article) => (
            <Stack
              direction={isLargerThan1024 ? 'row' : 'column'}
              alignItems="flex-start"
              justifyContent="flex-start"
            >
              <Text
                color="textSecondary"
                display={isLargerThan1024 ? 'block' : 'none'}
              >
                {dateFormat(Date.parse(article.fields.date), 'mmmm d yyyy')}
                <br />{' '}
                <Text fontSize="sm" textAlign="right">
                  {readingTime(article.fields.body).text}
                </Text>
              </Text>
              <Text
                color="textSecondary"
                fontSize="sm"
                display={isLargerThan1024 ? 'none' : 'block'}
              >
                {dateFormat(Date.parse(article.fields.date), 'mmmm d yyyy')}{' '}
                <Box as="span" fontSize="xs">
                  &bull;
                </Box>{' '}
                2 min read
              </Text>
              <Flex flexDirection="column" px={isLargerThan1024 ? 10 : 0}>
                <Link href={'/blog/' + article.fields.slug}>
                  <a>
                    <Text
                      color="displayColor"
                      fontSize="xl"
                      fontWeight="bold"
                      cursor="pointer"
                    >
                      {article.fields.title}
                    </Text>
                    <Text color="textSecondary">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Ullam, quia!
                    </Text>

                    <Text color="button1" cursor="pointer">
                      Learn more &rarr;
                    </Text>
                  </a>
                </Link>
              </Flex>
            </Stack>
          ))}
        </Stack>
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
