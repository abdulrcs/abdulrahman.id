import { Box, Flex, Link, chakra, Image } from '@chakra-ui/react'

export default function Cards({ imageURL, title, desc, projectURL }) {
  return (
    <Image
      w="100%"
      src={imageURL}
      filter="brightness(30%)"
      transition="0.3s"
      borderRadius="10px"
      _hover={{ filter: 'brightness(100%)' }}
    ></Image>
  )
}
