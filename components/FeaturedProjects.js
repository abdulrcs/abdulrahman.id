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
import ReactGA from 'react-ga4'

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
                  color="displayColor"
                  fontFamily="Ubuntu"
                  fontSize={{ base: 'xl', md: '2xl' }}
                >
                  All Creative Works.
                </Heading>
                <NextLink passHref href="/projects">
                  <Link
                    onClick={() => handleClick('featuredprojects_explore more')}
                  >
                    <Text
                      _hover={{ color: 'button2' }}
                      color="button1"
                      display={{ base: 'block', md: 'none' }}
                      fontSize={{ base: 'sm', md: 'xl' }}
                    >
                      {' '}
                      Explore more &rarr;
                    </Text>
                  </Link>
                </NextLink>
              </Stack>
              <Text color="textSecondary" fontSize={{ base: 'md', md: 'xl' }}>
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
              slug={projects[0].fields.slug}
              desc={projects[0].fields.description}
              imageURL={projects[0].fields.imageUrl}
              tag={projects[0].fields.tags}
              title={projects[0].fields.title}
            />
          </SlideUpWhenVisible>
          <SlideUpWhenVisible>
            <Box mt={{ md: '-50%' }}>
              <Cards
                slug={projects[1].fields.slug}
                desc={projects[1].fields.description}
                imageURL={projects[1].fields.imageUrl}
                tag={projects[1].fields.tags}
                title={projects[1].fields.title}
              />
            </Box>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible threshold={0.8}>
            <Cards
              slug={projects[2].fields.slug}
              desc={projects[2].fields.description}
              imageURL={projects[2].fields.imageUrl}
              tag={projects[2].fields.tags}
              title={projects[2].fields.title}
            />
          </SlideUpWhenVisible>
        </SimpleGrid>
      </Stack>
    </>
  )
}
