import {
  TagLeftIcon,
  Tag,
  Heading,
  Text,
  Image,
  Stack,
  Divider,
  TagLabel,
} from '@chakra-ui/react'
import {
  FaReact,
  FaPython,
  FaPepperHot,
  FaJs,
  FaSass,
  FaCode,
} from 'react-icons/fa'

export default function Cards({ imageURL, title, desc, projectURL, tag }) {
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

  const Tags = tag.map((item) => (
    <Tag colorScheme={getTag(item)[0]} size="md">
      <TagLeftIcon as={getTag(item)[1]}></TagLeftIcon>
      <TagLabel>{item}</TagLabel>
    </Tag>
  ))

  return (
    <Stack bg="secondary" borderRadius="10px" minH="350px" maxH="500px">
      <Image
        w="100%"
        src={imageURL}
        transition="0.3s"
        borderRadius="10px 10px 0px 0px"
      ></Image>
      <Stack px={5} py={3}>
        <Text fontFamily="Ubuntu" fontSize="2xl" color="white">
          {title}
        </Text>
        <Stack isInline>{Tags}</Stack>
        <Divider />
        <Text color="textSecondary">{desc}</Text>
      </Stack>
    </Stack>
  )
}
