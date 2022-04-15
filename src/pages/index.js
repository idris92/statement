import React, {useRef} from 'react'
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


const Home = () => {
     const donateSection = useRef(null)
     const handleDonateNavigate =(ref)=>{
         if(ref !== null){
            window.scrollTo({
            top: donateSection.current.offsetTop,
            behavior: 'smooth',
        });
         }
       
     }
    return (
       <Flex w='100%' direction='column' h='auto'>
            <Flex bgImage={bgPng} backgroundSize={{base:'scale-down', md:'cover'}} w='100%' h={{base:'auto', md:'auto'}} direction='column' bgRepeat='no-repeat'>
                <Navbar click={handleDonateNavigate}/>
                <Hero click={handleDonateNavigate}/>
            </Flex>
            <Flex h='auto' bg='white'  px={{base:'20px', md:'150px'}} pt={{base:'15px', md:'60px'}} w='100%' >
               <AboutUs/>
            </Flex>
            <Flex bg='background' w='100%' px={{base:'20px', md:'150px'}} py={{base:3, md:12}} ref={donateSection} >
                    <Donate />
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
