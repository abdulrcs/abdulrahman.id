import {
  Link,
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Box,
} from '@chakra-ui/layout'
import NextLink from 'next/link'
import Cards from './Card'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import ReactGA from 'react-ga'

export default function FeaturedProjects({ projects }) {
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }

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
                <NextLink href="/projects" passHref>
                  <Link
                    onClick={() => handleClick('featuredprojects_explore more')}
                  >
                    <Text
                      display={{ base: 'block', md: 'none' }}
                      fontSize={{ base: 'sm', md: 'xl' }}
                      color="button1"
                      _hover={{ color: 'button2' }}
                    >
                      {' '}
                      Explore more &rarr;
                    </Text>
                  </Link>
                </NextLink>
              </Stack>
              <Text fontSize={{ base: 'md', md: 'xl' }} color="textSecondary">
                Here's some of my projects that I have worked on.
              </Text>
              <NextLink href="/projects">
                <Link
                  onClick={() => handleClick('featuredprojects_explore more')}
                >
                  <Text
                    display={{ base: 'none', md: 'block' }}
                    fontSize={{ base: 'md', md: 'xl' }}
                  >
                    Explore more &rarr;
                  </Text>
                </Link>
              </NextLink>
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
