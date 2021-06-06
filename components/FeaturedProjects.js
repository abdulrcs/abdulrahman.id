import { useEffect } from 'react'
import { Stack, Heading, Text, SimpleGrid, Flex, Box } from '@chakra-ui/layout'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import Cards from './Card'
import { Slide } from '@chakra-ui/transition'

export default function FeaturedProjects() {
  function SlideUpWhenVisible({ children, slideFrom, threshold }) {
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
          visible: { opacity: 1, y: 0 },
          hidden: { opacity: 0, y: 20 },
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
          <SlideUpWhenVisible slideFrom={0}>
            <Stack
              spacing={1}
              fontFamily="Ubuntu"
              textAlign={['center', 'left']}
            >
              <Text fontSize="2xl" color="displayColor">
                All Creative Works.
              </Text>
              <Text fontSize={['md', 'xl']} color="textSecondary">
                Here's some of my projects that I have worked on.
              </Text>
              <Text fontSize={['md', 'xl']} color="button1">
                Explore more &rarr;
              </Text>
            </Stack>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible slideFrom={1}>
            <Cards
              imageURL="https://i.imgur.com/VY2D1A2.png"
              title="creative@home"
              desc="A website that provides roadmap for various fields in Programming and help people learn to code for free."
              githubLink="https://github.com/varcode-project/creative-at-home"
              deployLink="https://varcode-project.github.io/creative-at-home/"
              tag={['Javascript', 'Sass']}
            />
          </SlideUpWhenVisible>
          <SlideUpWhenVisible slideFrom={0}>
            <Box mt={{ md: '-50%' }}>
              <Cards
                imageURL="https://i.imgur.com/3nCKJ6U.png"
                title="Opiniometer"
                desc="A web app to analyze whether an opinion on specific topic is Positive or Negative based on recent tweets using Natural Language Processing (NLP) concept called Sentiment Analysis."
                githubLink="https://github.com/abdulrcs/Opiniometer"
                deployLink="http://abdulrahman.id/Opiniometer"
                tag={['React', 'Python', 'Chart.js']}
              />
            </Box>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible slideFrom={1} threshold={1}>
            <Cards
              imageURL="https://i.imgur.com/CKkK64o.png"
              title="Prayer Time API"
              desc="It's an easy to use API to get today's (and tomorrow!) prayer time in any city in the world, based on Muslim Pro."
              githubLink="https://github.com/abdulrcs/Daily-Prayer-Time-API"
              deployLink="https://dailyprayer.abdulrcs.repl.co/api/jakarta"
              tag={['Python', 'Flask', 'Beautiful Soup']}
            />
          </SlideUpWhenVisible>
        </SimpleGrid>
      </Stack>
    </>
  )
}
