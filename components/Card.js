import {
  TagLeftIcon,
  Tag,
  Text,
  Stack,
  Divider,
  TagLabel,
  Link,
  ScaleFade,
  chakra,
} from '@chakra-ui/react'
import {
  FaReact,
  FaPython,
  FaPepperHot,
  FaJs,
  FaSass,
  FaCode,
  FaGithub,
  FaExternalLinkAlt,
  FaLaravel,
  FaBootstrap,
  FaDatabase,
} from 'react-icons/fa'
import { SiNextDotJs } from 'react-icons/si'
import useMediaQuery from '../hook/useMediaQuery'
import ReactGA from 'react-ga'

import Image from './ChakraNextImage'

export default function Cards({
  imageURL,
  title,
  desc,
  githubLink,
  deployLink,
  tag,
}) {
  const getTag = (tag) => {
    let values = []
    if (tag == 'React') {
      values[0] = 'blue'
      values[1] = FaReact
    } else if (tag == 'Python') {
      values[0] = 'orange'
      values[1] = FaPython
    } else if (tag == 'Javascript') {
      values[0] = 'yellow'
      values[1] = FaJs
    } else if (tag == 'Sass') {
      values[0] = 'pink'
      values[1] = FaSass
    } else if (tag == 'Flask') {
      values[0] = 'green'
      values[1] = FaPepperHot
    } else if (tag == 'Laravel') {
      values[0] = 'red'
      values[1] = FaLaravel
    } else if (tag == 'Bootstrap') {
      values[0] = 'purple'
      values[1] = FaBootstrap
    } else if (tag == 'SQL') {
      values[0] = 'blue'
      values[1] = FaDatabase
    }
    else if (tag == 'Next.js') {
      values[0] = 'gray'
      values[1] = SiNextDotJs
    }
    else {
      values[0] = 'gray'
      values[1] = FaCode
    }
    return values
  }

  const isLargerThan800 = useMediaQuery(800)

  const Tags = tag.map((item) => (
    <Tag
      key={item}
      colorScheme={getTag(item)[0]}
      size={isLargerThan800 ? 'md' : 'sm'}
    >
      <TagLeftIcon as={getTag(item)[1]}></TagLeftIcon>
      <TagLabel>{item}</TagLabel>
    </Tag>
  ))
  const handleClick = (event) => {
    ReactGA.event({
      category: 'click',
      action: event,
    })
  }

  return (
    <Stack
      bg="secondary"
      borderRadius="10px"
      minH="320px"
      maxH="500px"
      border="1px"
      borderColor={{ base: '#333', md: 'borderColor' }}
    >
      <Link href={deployLink} isExternal>
        <ScaleFade in={true} transition={{ duration: 1 }}>
          <Image
            width={1250}
            height={600}
            w="auto"
            h="auto"
            src={imageURL}
            transition="0.3s"
            borderRadius="10px 10px 0px 0px"
            alt="project image"
          ></Image>
          <Stack px={4} py={2}>
            <Stack isInline justifyContent="space-between" alignItems="center">
              <Text fontFamily="Ubuntu" fontSize="2xl" color="displayColor">
                {title}
              </Text>
              <Stack
                isInline
                justifyContent="flex-end"
                alignItems="center"
                spacing={4}
              >
                {githubLink && (
                  <Link
                    href={githubLink}
                    color="white"
                    onClick={() =>
                      handleClick(`githublink_${title.replace('@', '-at-')}`)
                    }
                    isExternal
                  >
                    <FaGithub aria-label="github" size={23} />
                  </Link>
                )}
                {deployLink && (
                  <Link
                    href={deployLink}
                    color="white"
                    onClick={() =>
                      handleClick(`deploylink_${title.replace('@', '-at')}`)
                    }
                    isExternal
                  >
                    <FaExternalLinkAlt aria-label="project link" size={20} />
                  </Link>
                )}
              </Stack>
            </Stack>
            <Stack isInline>{Tags}</Stack>
            <Divider />
            <Text color="textSecondary" fontSize={['sm', 'md']}>
              {desc}
            </Text>
          </Stack>
        </ScaleFade>
      </Link>
    </Stack>
  )
}
