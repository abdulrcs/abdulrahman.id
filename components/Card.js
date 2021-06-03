import {
  TagLeftIcon,
  Tag,
  Heading,
  Text,
  Image,
  Stack,
  Divider,
  TagLabel,
  useMediaQuery,
  Link,
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
} from 'react-icons/fa'

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
    } else {
      values[0] = 'gray'
      values[1] = FaCode
    }
    return values
  }

  const [isLargerThan800] = useMediaQuery('(min-width: 800px)')

  const Tags = tag.map((item) => (
    <Tag colorScheme={getTag(item)[0]} size={isLargerThan800 ? 'md' : 'sm'}>
      <TagLeftIcon as={getTag(item)[1]}></TagLeftIcon>
      <TagLabel>{item}</TagLabel>
    </Tag>
  ))

  return (
    <Stack
      bg="secondary"
      borderRadius="10px"
      minH="350px"
      maxH="500px"
      border="1px"
      borderColor="borderColor"
    >
      <Image
        w="100%"
        src={imageURL}
        transition="0.3s"
        borderRadius="10px 10px 0px 0px"
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
            <Link href={githubLink}>
              <FaGithub size={23} />
            </Link>
            <Link href={deployLink}>
              <FaExternalLinkAlt size={20} />
            </Link>
          </Stack>
        </Stack>
        <Stack isInline>{Tags}</Stack>
        <Divider />
        <Text color="textSecondary">{desc}</Text>
      </Stack>
    </Stack>
  )
}
