import { useEffect } from 'react'
import {
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Box,
  Link,
} from '@chakra-ui/layout'
import Cards from './Card'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'

export default function FeaturedProjects({ projects }) {
  return (
    <>
      <Stack spacing={8} w="full">
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={16}>
          <SlideUpWhenVisible threshold={0.1}>
            <Stack spacing={1}>
              <Stack
                isInline
                alignItems="center"
                justifyContent="space-between"
              >
                <Heading
                  fontSize={{ base: 'xl', md: '2xl' }}
                  color="displayColor"
                  fontFamily="Ubuntu"
                >
                  All Creative Works.
                </Heading>
                <Link href="/projects">
                  <a>
                    <Text
                      display={{ base: 'block', md: 'none' }}
                      fontSize={{ base: 'sm', md: 'xl' }}
                    >
                      Explore more &rarr;
                    </Text>
                  </a>
                </Link>
              </Stack>
              <Text fontSize={{ base: 'md', md: 'xl' }} color="textSecondary">
                Here's some of my projects that I have worked on.
              </Text>
              <Link href="/projects">
                <a>
                  <Text
                    display={{ base: 'none', md: 'block' }}
                    fontSize={{ base: 'md', md: 'xl' }}
                  >
                    Explore more &rarr;
                  </Text>
                </a>
              </Link>
            </Stack>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible>
            <Cards
              imageURL={projects[0].fields.imageUrl}
              title={projects[0].fields.title}
              desc={projects[0].fields.description}
              githubLink={projects[0].fields.githubLink}
              deployLink={projects[0].fields.deployLink}
              tag={projects[0].fields.tags}
            />
          </SlideUpWhenVisible>
          <SlideUpWhenVisible>
            <Box mt={{ md: '-50%' }}>
              <Cards
                imageURL={projects[1].fields.imageUrl}
                title={projects[1].fields.title}
                desc={projects[1].fields.description}
                githubLink={projects[1].fields.githubLink}
                deployLink={projects[1].fields.deployLink}
                tag={projects[1].fields.tags}
              />
            </Box>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible threshold={0.8}>
            <Cards
              imageURL={projects[2].fields.imageUrl}
              title={projects[2].fields.title}
              desc={projects[2].fields.description}
              githubLink={projects[2].fields.githubLink}
              deployLink={projects[2].fields.deployLink}
              tag={projects[2].fields.tags}
            />
          </SlideUpWhenVisible>
        </SimpleGrid>
      </Stack>
    </>
  )
}
