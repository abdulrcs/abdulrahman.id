import {
  Box,
  Code,
  Heading,
  Link,
  Text,
  Divider,
  useColorMode,
} from '@chakra-ui/react'
import { jsx } from '@emotion/react'
import NextLink from 'next/link'
import Image from './ChakraNextImage'

const CustomLink = (props) => {
  const { colorMode } = useColorMode()
  const color = {
    light: 'blue.500',
    dark: 'blue.500',
  }

  const href = props.href
  const isInternalLink = href && (href.startsWith('/') || href.startsWith('#'))

  if (isInternalLink) {
    return (
      <NextLink passHref href={href}>
        <Link color={color[colorMode]} {...props} />
      </NextLink>
    )
  }

  return <Link color={color[colorMode]} isExternal {...props} />
}

const DocsHeading = (props) => (
  <Heading
    css={{
      scrollMarginTop: '100px',
      scrollSnapMargin: '100px', // Safari
      '&[id]': {
        pointerEvents: 'none',
      },
      '&[id]:before': {
        display: 'block',
        height: ' 6rem',
        marginTop: '-6rem',
        visibility: 'hidden',
        content: `""`,
      },
      '&[id]:hover a': { opacity: 1 },
    }}
    {...props}
    mt="2em"
    mb="1em"
  >
    <Box pointerEvents="auto">
      {props.children}
      {props.id && (
        <Box
          as="a"
          ml="0.375rem"
          color="blue.500"
          fontWeight="normal"
          opacity="0"
          _focus={{
            opacity: 1,
            boxShadow: 'outline',
          }}
          outline="none"
          aria-label="anchor"
          href={`#${props.id}`}
        >
          #
        </Box>
      )}
    </Box>
  </Heading>
)

const Hr = () => {
  const { colorMode } = useColorMode()
  const borderColor = {
    light: 'gray.200',
    dark: 'gray.600',
  }

  return <Divider w="100%" my={4} borderColor={borderColor[colorMode]} />
}

const MDXComponents = {
  h1: (props) => (
    <Heading as="h1" my={4} color="displayColor" size="xl" {...props} />
  ),
  h2: (props) => <DocsHeading as="h2" fontWeight="bold" size="lg" {...props} />,
  h3: (props) => <DocsHeading as="h3" fontWeight="bold" size="md" {...props} />,
  h4: (props) => <DocsHeading as="h4" fontWeight="bold" size="sm" {...props} />,
  h5: (props) => <DocsHeading as="h5" fontWeight="bold" size="sm" {...props} />,
  h6: (props) => <DocsHeading as="h6" fontWeight="bold" size="xs" {...props} />,
  img: (props) => (
    <Image height={300} objectFit="contain" width={600} {...props} alt="" />
  ),
  inlineCode: (props) => (
    <Code mt={-10} fontSize="0.84em" colorScheme="blue" {...props} />
  ),
  br: (props) => <Box h="24px" {...props} />,
  hr: Hr,
  a: CustomLink,
  p: (props) => <Text as="p" mt={0} lineHeight="tall" {...props} />,
  ul: (props) => <Box as="ul" ml={2} pt={2} pl={4} {...props} />,
  ol: (props) => <Box as="ol" ml={2} pt={2} pl={4} {...props} />,
  li: (props) => <Box as="li" pb={1} {...props} />,
}

export { CustomLink }
export default MDXComponents
