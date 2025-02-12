import {
  Box,
  Code,
  Divider,
  HStack,
  Heading,
  Link,
  Text,
  useColorMode,
  Center,
} from '@chakra-ui/react'
import Image from 'next/image'
import NextLink from 'next/link'

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
  <HStack
    pl={props.as === 'h2' && 4}
    borderLeft={props.as === 'h2' && '4px solid #3CCF91'}
  >
    <Link
      color="displayColor"
      _hover={{
        textDecoration: 'none !important',
        '.heading-anchor': {
          visibility: 'visible',
        },
      }}
      cursor="pointer"
      outline="none"
      href={`#${props.id}`}
    >
      <Heading
        as={props.as}
        fontSize={props.as === 'h2' ? '1.75em' : '1.25em'}
        pointerEvents="auto"
        css={{
          scrollMarginTop: '80px',
          scrollSnapMargin: '80px', // Safari
          cursor: 'pointer',
        }}
        id={props.id}
      >
        {props.children}
        <Box
          className="heading-anchor"
          as="span"
          pl={2}
          color="logoGrey"
          visibility="hidden"
          aria-label="anchor"
        >
          #
        </Box>
      </Heading>
    </Link>
  </HStack>
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
  h2: (props) => (
    <DocsHeading
      as="h2"
      id={props.children}
      fontWeight="bold"
      size="lg"
      {...props}
    />
  ),
  h3: (props) => (
    <DocsHeading
      as="h3"
      id={props.children}
      fontWeight="bold"
      size="md"
      {...props}
    />
  ),
  h4: (props) => (
    <DocsHeading
      as="h4"
      id={props.children}
      fontWeight="bold"
      size="sm"
      {...props}
    />
  ),
  h5: (props) => (
    <DocsHeading
      as="h5"
      id={props.children}
      fontWeight="bold"
      size="sm"
      {...props}
    />
  ),
  h6: (props) => (
    <DocsHeading
      as="h6"
      id={props.children}
      fontWeight="bold"
      size="xs"
      {...props}
    />
  ),
  img: (props) => (
    <Center>
      <Box width={{ base: '100%', md: '80%' }} height="auto" maxWidth="1366px">
        <Image
          src={props.src}
          width={1366}
          height={768}
          layout="responsive"
          {...props}
          alt=""
        />
      </Box>
    </Center>
  ),
  inlineCode: (props) => (
    <Code mt={-10} fontSize="0.84em" colorScheme="blue" {...props} />
  ),
  br: (props) => <Box h="24px" {...props} />,
  hr: Hr,
  a: CustomLink,
  p: (props) => <Text as="p" mt={0} lineHeight="tall" {...props} />,
  ul: (props) => <Box as="ul" ml={2} pt={2} pl="1.625em" {...props} />,
  ol: (props) => <Box as="ol" ml={2} pt={2} pl="1.625em" {...props} />,
  li: (props) => <Box as="li" pb={1} {...props} />,
}

export { CustomLink }
export default MDXComponents
