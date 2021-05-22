import { Stack, Heading, SimpleGrid } from '@chakra-ui/layout'
import Cards from './Card'

export default function Projects() {
  return (
    <>
      <Stack spacing={8} w="full">
        <Heading fontSize="5xl">Projects.</Heading>
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={5}>
          <Cards imageURL="https://i.imgur.com/3nCKJ6U.png" />
          <Cards imageURL="https://i.imgur.com/VY2D1A2.png" />
          <Cards imageURL="https://i.imgur.com/CKkK64o.png" />
        </SimpleGrid>
      </Stack>
    </>
  )
}
