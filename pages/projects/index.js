import { useEffect } from 'react'
import {
  Stack,
  Heading,
  Text,
  SimpleGrid,
  Flex,
  Box,
  Divider,
} from '@chakra-ui/react'
import { useInView } from 'react-intersection-observer'
import { motion, useAnimation } from 'framer-motion'

import Cards from '../../components/Card'
import { Slide } from '@chakra-ui/transition'
import Container from '../../components/Container'
import Head from 'next/head'
import { Input, InputGroup, InputRightElement } from '@chakra-ui/input'
import { FaSearch } from 'react-icons/fa'

export default function Projects() {
  return (
    <>
      <Container>
        <Head>
          <title>Projects - Abdul Rahman</title>
        </Head>

        <Stack
          spacing={10}
          justifyContent="center"
          px={['5vw', '10vw']}
          my={['15vh', '15vh', '22.5vh', '22.5vh']}
        >
          <Stack spacing={5}>
            {' '}
            <Heading color="displayColor" fontSize="6xl">
              Projects
            </Heading>
            <Text fontSize="16px">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autem
              voluptatum possimus accusantium nobis veniam magni est labore
              doloremque harum quam.
            </Text>
            <InputGroup maxW="400px">
              <InputRightElement pointerEvents="none" children={<FaSearch />} />
              <Input type="text" placeholder="Search projects" />
            </InputGroup>
            <Divider />
          </Stack>
          <SimpleGrid columns={{ sm: 1, md: 2 }} spacing={8}>
            <Cards
              imageURL="https://i.imgur.com/VY2D1A2.png"
              title="creative@home"
              desc="A website that provides roadmap for various fields in Programming and help people learn to code for free."
              githubLink="https://github.com/varcode-project/creative-at-home"
              deployLink="https://varcode-project.github.io/creative-at-home/"
              tag={['Javascript', 'Sass']}
            />
            <Box>
              <Cards
                imageURL="https://i.imgur.com/3nCKJ6U.png"
                title="Opiniometer"
                desc="A web app to analyze whether an opinion on specific topic is Positive or Negative based on recent tweets using Natural Language Processing (NLP) concept called Sentiment Analysis."
                githubLink="https://github.com/abdulrcs/Opiniometer"
                deployLink="http://abdulrahman.id/Opiniometer"
                tag={['React', 'Python', 'Chart.js']}
              />
            </Box>
            <Cards
              imageURL="https://i.imgur.com/CKkK64o.png"
              title="Prayer Time API"
              desc="It's an easy to use API to get today's (and tomorrow!) prayer time in any city in the world, based on Muslim Pro."
              githubLink="https://github.com/abdulrcs/Daily-Prayer-Time-API"
              deployLink="https://dailyprayer.abdulrcs.repl.co/api/jakarta"
              tag={['Python', 'Flask', 'Beautiful Soup']}
            />
          </SimpleGrid>
        </Stack>
      </Container>
    </>
  )
}
