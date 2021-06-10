import { useEffect } from 'react'
import { Stack, Heading, Text, SimpleGrid, Flex, Box } from '@chakra-ui/layout'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import Cards from './Card'
import { Slide } from '@chakra-ui/transition'
import Link from 'next/link'

export default function FeaturedProjects({ projects }) {
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
              <Link href="/projects">
                <a>
                  <Text
                    fontSize={['md', 'xl']}
                    color="button1"
                    transition="0.3s"
                    _hover={{ letterSpacing: '2px' }}
                  >
                    Explore more &rarr;
                  </Text>
                </a>
              </Link>
            </Stack>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible slideFrom={1}>
            <Cards
              imageURL={projects[0].fields.imageUrl}
              title={projects[0].fields.title}
              desc={projects[0].fields.description}
              githubLink={projects[0].fields.githubLink}
              deployLink={projects[0].fields.deployLink}
              tag={projects[0].fields.tags}
            />
          </SlideUpWhenVisible>
          <SlideUpWhenVisible slideFrom={0}>
            <Box mt={{ md: '-50%' }}>
              <Cards
                imageURL={projects[1].fields.imageUrl}
                title={projects[1].fields.title}
                desc={projects[1].fields.description}
                githubLink={projects[1].fields.githubLink}
                deployLink={projects[1].fields.deployLink}
                tag={projects[1].fields.tags}
              />
            </Box>
          </SlideUpWhenVisible>
          <SlideUpWhenVisible slideFrom={1} threshold={0.8}>
            <Cards
              imageURL={projects[2].fields.imageUrl}
              title={projects[2].fields.title}
              desc={projects[2].fields.description}
              githubLink={projects[2].fields.githubLink}
              deployLink={projects[2].fields.deployLink}
              tag={projects[2].fields.tags}
            />
          </SlideUpWhenVisible>
        </SimpleGrid>
      </Stack>
    </>
  )
}
