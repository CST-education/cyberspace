import React from 'react'

import { Container } from '../../components/Container/Container'
import { Hero } from '../../components/Hero/Hero'

import { Slider } from '../../components/About/About'
import { Courses } from '../../components/CoursesList/CoursesList'

function Home() {
  return (
    <>
      <Container>
        <Hero />
      </Container>

      <Container>
        <Slider />
      </Container>
      <Container>
        <Courses />
      </Container>
    </>
  )
}
export default Home
