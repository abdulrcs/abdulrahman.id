import { Heading } from '@chakra-ui/layout'
import { Box, Flex, Link, Stack, Text, SimpleGrid } from '@chakra-ui/react'
import dateFormat from 'dateformat'
import SlideUpWhenVisible from '../hook/SlideUpWhenVisible'
import NextLink from 'next/link'

export default function LatestArticle({ articles }) {
  return (
    <Stack
      spacing={5}
      w="100%"
      h="auto"
      display={articles.length < 2 ? 'none' : 'block'}
    >
      <SlideUpWhenVisible>
        <Flex alignItems="center" justifyContent="space-between">
          <Heading fontSize={{ base: 'xl', md: '2xl' }} fontFamily="Ubuntu">
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
              href={'/blog/' + article.frontmatter.slug}
              _hover={{ textDecoration: 'none' }}
              _focus={{ outline: 'none' }}
              w="100%"
            >
              <Stack
                direction="column"
                alignItems="flex"
                bg="secondary"
                _hover={{ bg: '#111' }}
                transition="0.3s"
                border="1px"
                borderColor={{ base: '#333', md: 'borderColor' }}
                borderRadius="10px"
                p={5}
                justifyContent="space-between"
                space={2}
                minH={{ base: 'auto', md: '130px' }}
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
                  2 min read
                </Text>
              </Stack>
            </Link>
          </SlideUpWhenVisible>
        ))}
      </SimpleGrid>
    </Stack>
  )
}
