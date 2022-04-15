import React from 'react'
import {Flex, Image, Text, Spacer, Box, Select, SimpleGrid, Button, Input, Divider} from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import AboutUs from '../components/AboutUs'
import Donate from '../components/Donate'
import Volunteer from '../components/Volunteer'
import bgPng from '../assets/images/background1.png'

import profPng from '../assets/images/speech.png'
import Footer from '../components/Footer'
import NewsLetter from '../components/NewsLetter'
import CallModal from '../components/CallModal'


const Home = () => {
    
    return (
       <Flex w='100%' direction='column' h='auto'>
          <CallModal />
            <Flex bgImage={bgPng} backgroundSize={{base:'scale-down', md:'cover'}} w='100%' h={{base:'auto', md:'auto'}} direction='column' bgRepeat='no-repeat'>
                <Navbar/>
                <Hero/>
            </Flex>
            <Flex h='auto' bg='white'  px={{base:'20px', md:'150px'}} pt={{base:'15px', md:'60px'}} w='100%' >
               <AboutUs/>
            </Flex>
            <Flex bg='background' w='100%' px={{base:'20px', md:'150px'}} py={{base:3, md:12}} >
                    <Donate/>
            </Flex>
            <Flex bg='white' w='100%' px={{base:'20px', md:'150px'}} py={{base:'15px', md:'120px'}} >
               <Volunteer/>
            </Flex>
            <Flex bg='background' w='100%'px={{base:'20px', md:'150px'}} py={{base:'10px', md:'80px'}}>
               < NewsLetter />
            </Flex>
            <>
               <Footer/>
            </>
       </Flex>
    )
}

export default Home
