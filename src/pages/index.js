import React from 'react'
import {Flex, Image, Text, Spacer, Box, Select, SimpleGrid, Button, Input, Divider} from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import NavBody from '../components/NavBody'
import AboutUs from '../components/AboutUs'
import Donate from '../components/Donate'
import Volunteer from '../components/Volunteer'
import bgPng from '../assets/images/background1.png'

import profPng from '../assets/images/speech.png'
import logoPng from '../assets/images/logo2.png'
import NewsLetter from '../components/NewsLetter'

const Home = () => {
    return (
       <Flex w='100%' direction='column' h='auto'>
            <Flex bgImage={bgPng} backgroundSize={'cover'} w='100%' h='100vh' direction='column'>
                <Navbar/>
                <NavBody/>
            </Flex>
            <Flex h='auto' bg='white'  px='150px' pt='60px' w='100%' >
               <AboutUs/>
            </Flex>
            <Flex bg='background' w='100%' px='150px' py={12} >
                    <Donate/>
            </Flex>
            <Flex bg='white' w='100%' px='150px' py='120px' >
               <Volunteer/>
            </Flex>
            <Flex bg='background' w='100%' px='150px' py='80px'>
               < NewsLetter />
            </Flex>
            <Flex bg='darkgreen' w='100%' px='150px' pt={12} align='center' direction='column' gap={2} pb='128px'>
                <Box w='100%' align='center' >
                    <Image src={logoPng} alt='logo' />
                </Box>
                <Text fontSize='18px' fontWeight='400' color='disable'>An Everyday Man Working For Everyday People.</Text>
            </Flex>
            <Divider borderColor='disable'/>
            <SimpleGrid columns={{base:1, md:3}} spacing={4} p='150px'  bg='darkgreen'>
               <Flex direction='column'>
                    <Text fontSize='16px' fontWeight='500' color='disable'>DM us on:</Text>
                    <Text fontSize='24px' fontWeight='400' color='white'>rennyoni@yahoo.com</Text>
               </Flex>
               <Flex direction='column'>
                    <Text fontSize='16px' fontWeight='500' color='disable'>Call us on:</Text>
                    <Text fontSize='24px' fontWeight='400' color='white'>+234 7054504793</Text>
                    <Text fontSize='24px' fontWeight='400' color='white'>+234 8012914116</Text>
               </Flex>
               <Flex direction='column'>
                     <Text fontSize='16px' fontWeight='500' color='disable'>Find us:</Text>
                    <Text fontSize='24px' fontWeight='400' color='white'>Number 4 joseph ali street, ikoyi, Lagos State.</Text>
               </Flex>
            </SimpleGrid>
            <Divider borderColor='disable'/>
            <SimpleGrid columns={{base:1, md:3}} spacing={4} px='150px' py={12} bg='darkgreen'>
               <Flex>
                    <Text fontSize='18px' fontWeight='400' color='disable'>©Osinbajo 2021. All rights reserved.</Text>
               </Flex>
                <Spacer/>
               <Flex gap={12}>
                <Text fontSize='16px' fontWeight='500' color='white'>Privacy Policy</Text>
                 <Text fontSize='16px' fontWeight='500' color='white'>Terms of Condition</Text>
               </Flex>
            </SimpleGrid>

       </Flex>
    )
}

export default Home
