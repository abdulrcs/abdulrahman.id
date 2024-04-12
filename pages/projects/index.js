import { useState } from 'react'
import { Stack, Heading, Text, SimpleGrid, Divider } from '@chakra-ui/react'

import Cards from '../../components/Card'
import Container from '../../components/Container'
import Head from 'next/head'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { FaSearch } from 'react-icons/fa'

export default function Projects({ projects }) {
  const [query, setQuery] = useState('')
  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  return (
    <>
      <Container>
        <Head>
          <title>Abdul Rahman - Software Engineer</title>
          <meta content="Abdul Rahman - Software Engineer" name="title" />
          <meta
            content="Software Engineer based in Indonesia, an undergraduate student at Universitas Negeri Surabaya."
            name="description"
          />

          <meta content="website" property="og:type" />
          <meta content="https://abdulrahman.id/projects" property="og:url" />
          <meta
            content="Abdul Rahman - Software Engineer"
            property="og:title"
          />
          <meta
            content="Software Engineer based in Indonesia, an undergraduate student at Universitas Negeri Surabaya."
            property="og:description"
          />
          <meta
            content="https://imagizer.imageshack.com/a/img923/3917/IFUVhm.png"
            property="og:image"
          />

          <meta content="summary_large_image" property="twitter:card" />
          <meta
            content="https://abdulrahman.id/projects"
            property="twitter:url"
          />
          <meta
            content="Abdul Rahman - Software Engineer"
            property="twitter:title"
          />
          <meta
            content="Software Engineer based in Indonesia, an undergraduate student at Universitas Negeri Surabaya."
            property="twitter:description"
          />
          <meta
            content="https://imagizer.imageshack.com/a/img923/3917/IFUVhm.png"
            property="twitter:image"
          />
        </Head>
        <Stack
          justifyContent="center"
          my={['15vh', '15vh', '22.5vh', '22.5vh']}
          px={['5vw', '10vw']}
          spacing={10}
        >
          <Stack spacing={5}>
            {' '}
            <Heading color="displayColor" fontSize={{ base: '4xl', md: '6xl' }}>
              Projects
            </Heading>
            <Text fontSize={{ base: '14px', md: '16px' }}>
              I love building projects and practice my engineering skills,
              here's an archive of things that I've worked on.
            </Text>
            <InputGroup maxW="400px">
              <InputRightElement pointerEvents="none">
                <FaSearch />
              </InputRightElement>
              <Input
                placeholder="Search projects"
                type="text"
                value={query}
                onChange={handleChange}
              />
            </InputGroup>
            <Divider />
          </Stack>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
            {projects
              .filter((e) =>
                e.fields.title.toLowerCase().includes(query.toLowerCase()),
              )
              .map((project) => (
                <Cards
                  key={project.fields.title}
                  deployLink={project.fields.deployLink}
                  desc={project.fields.description}
                  githubLink={project.fields.githubLink}
                  imageURL={project.fields.imageUrl}
                  tag={project.fields.tags}
                  title={project.fields.title}
                />
              ))}
          </SimpleGrid>
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
    content_type: 'projects',
    order: 'sys.updatedAt',
  })
  return {
    props: {
      projects: data.items.reverse(),
    },
  }
}
