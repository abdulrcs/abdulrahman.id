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
import { FaReact, FaPython, FaFlask } from 'react-icons/fa'

export default function Cards({ imageURL, title, desc, projectURL, tag, mt }) {
  return (
    <Stack
      bg="secondary"
      borderRadius="10px"
      mt={{ md: mt }}
      minH="350px"
      maxH="500px"
    >
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
        <Stack isInline>
          <Tag colorScheme="orange" size="md">
            <TagLeftIcon as={FaFlask}></TagLeftIcon>
            <TagLabel>Python</TagLabel>
          </Tag>
          <Tag colorScheme="blue" size="md">
            <TagLeftIcon as={FaReact}></TagLeftIcon>
            <TagLabel>React</TagLabel>
          </Tag>
        </Stack>
        <Divider />
        <Text color="textSecondary">{desc}</Text>
      </Stack>
    </Stack>
  )
}
