import { Heading } from '@chakra-ui/layout'
import { Box, Flex, Link, Stack, Text, SimpleGrid } from '@chakra-ui/react'
import dateFormat from 'dateformat'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import NextLink from 'next/link'

export default function LatestArticle({ articles }) {
  return (
    <Stack
      display={articles.length < 2 ? 'none' : 'block'}
      w="100%"
      h="auto"
      spacing={5}
    >
      <SlideUpWhenVisible>
        <Flex align="center" justify="space-between">
          <Heading fontFamily="Ubuntu" fontSize={{ base: 'xl', md: '2xl' }}>
            📰 Latest Article.
          </Heading>
          <NextLink href="/projects">
            <Link>
              <Text fontSize={{ base: 'sm', md: 'md' }}>
                View all articles &rarr;
              </Text>
            </Link>
          </NextLink>
        </Flex>
      </SlideUpWhenVisible>
      <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={{ base: 2, md: 4 }}>
        {articles.map((article, index) => (
          <SlideUpWhenVisible key={index}>
            <Link
              w="100%"
              _hover={{ textDecoration: 'none' }}
              _focus={{ outline: 'none' }}
              href={'/blog/' + article.frontmatter.slug}
            >
              <Stack
                alignItems="flex"
                justifyContent="space-between"
                direction="column"
                minH={{ base: 'auto', md: '130px' }}
                p={5}
                bg="secondary"
                border="1px"
                borderColor={{ base: '#333', md: 'borderColor' }}
                borderRadius="10px"
                _hover={{ bg: '#111' }}
                transition="0.3s"
                space={2}
              >
                <Text
                  color="displayColor"
                  fontSize={{ base: 'md', md: 'xl' }}
                  fontWeight="bold"
                  cursor="pointer"
                  noOfLines={2}
                >
                  {article.title.length > 100 ? (
                    <>{article.title.substring(0, 100)}...</>
                  ) : (
                    article.title
                  )}
                </Text>
                <Text color="textSecondary" fontSize="sm">
                  {dateFormat(
                    Date.parse(article.frontmatter.date),
                    'mmmm d yyyy',
                  )}{' '}
                  <Box as="span" fontSize="xs">
                    &bull;
                  </Box>{' '}
                  {article.frontmatter.readingTime}
                </Text>
              </Stack>
            </Link>
          </SlideUpWhenVisible>
        ))}
      </SimpleGrid>
    </Stack>
  )
}
