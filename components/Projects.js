import { useEffect } from 'react'
import { Stack, Heading, Text, SimpleGrid, Flex, Box } from '@chakra-ui/layout'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import Cards from './Card'
import { Slide } from '@chakra-ui/transition'

export default function Projects() {
  function SlideInWhenVisible({ children, slideFrom, threshold }) {
    const controls = useAnimation()
    const [ref, inView] = useInView({ threshold: threshold ? threshold : 0.35 })

    useEffect(() => {
      if (inView) {
        controls.start('visible')
      }
    }, [controls, inView])

    return (
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.4 }}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: slideFrom ? 100 : -100 },
        }}
      >
        {children}
      </motion.div>
    )
  }

  return (
    <>
      <Stack spacing={8} w="full">
        <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
          <SlideInWhenVisible slideFrom={0}>
            <Stack spacing={1} fontFamily="Ubuntu">
              <Text fontSize="2xl">All Creative Works.</Text>
              <Text fontSize="xl" color="textSecondary">
                Here's some of my projects that I have worked on.
              </Text>
              <Text fontSize="xl" color="button1">
                Explore more &rarr;
              </Text>
            </Stack>
          </SlideInWhenVisible>
          <SlideInWhenVisible slideFrom={1}>
            <Cards
              imageURL="https://i.imgur.com/VY2D1A2.png"
              title="creative@home"
              desc="A website that provides roadmap for various fields in Programming and help people learn to code for free."
              tag={['Javascript', 'Sass']}
            />
          </SlideInWhenVisible>
          <SlideInWhenVisible slideFrom={0}>
            <Box mt={{ md: '-50%' }}>
              <Cards
                imageURL="https://i.imgur.com/3nCKJ6U.png"
                title="Opiniometer"
                desc="A web app to analyze whether an opinion on specific topic is Positive / Negative / Neutral based on recent tweets using Natural Language Processing (NLP) concept called Sentiment Analysis."
                tag={['React', 'Python', 'Chart.js']}
              />
            </Box>
          </SlideInWhenVisible>
          <SlideInWhenVisible slideFrom={1} threshold={1}>
            <Cards
              imageURL="https://i.imgur.com/CKkK64o.png"
              title="Daily Prayer Time API"
              desc="It's an easy to use API to get today's (and tomorrow!) prayer time in any city in the world, based on Muslim Pro."
              tag={['Python', 'Flask', 'Beautiful Soup']}
            />
          </SlideInWhenVisible>
        </SimpleGrid>
      </Stack>
    </>
  )
}
