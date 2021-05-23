import { Stack, Heading, Text, SimpleGrid, Flex } from '@chakra-ui/layout'
import Cards from './Card'

export default function Projects() {
  return (
    <>
      <Stack spacing={8} w="full">
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
          <Stack spacing={1} fontFamily="Ubuntu">
            <Text fontSize="2xl">All Creative Works.</Text>
            <Text fontSize="xl" color="textSecondary">
              Here's some of my projects that I have worked on.
            </Text>
            <Text fontSize="xl" color="button1">
              Explore more &rarr;
            </Text>
          </Stack>
          <Cards
            imageURL="https://i.imgur.com/VY2D1A2.png"
            title="creative@home"
            desc="A website that provides roadmap for various fields in Programming and help people learn to code for free."
            tag={['Javascript', 'Sass']}
          />
          <Cards
            imageURL="https://i.imgur.com/3nCKJ6U.png"
            title="Opiniometer"
            desc="Analyze whether an opinion on specific topic is Positive / Negative / Neutral based on recent tweets! It's possible using Natural Language Processing (NLP) concept called Sentiment Analysis that can determine if a chunk of text is positive, negative, or neutral based on its polarity."
            mt="-50%"
            tag={['React', 'Python', 'Chart.js']}
          />
          <Cards
            imageURL="https://i.imgur.com/CKkK64o.png"
            title="Daily Prayer Time API"
            desc="It's an easy to use API to get today's (and tomorrow!) prayer time in any city in the world, based on Muslim Pro."
            tag={['Python', 'Flask', 'Beautiful Soup']}
          />
        </SimpleGrid>
      </Stack>
    </>
  )
}
