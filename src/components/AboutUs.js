import React from 'react'
import {Flex, Image, Text, Spacer, Box} from '@chakra-ui/react'
import profPng from '../assets/images/speech.png'

const AboutUs = () => {
    return (
        <Flex gap={{base:1, md:12}} direction={{base:'column', md:'row'}}>
                <Flex w={{base:'100%', md:'45%'}} >
                    <Flex h={{base:'420px', md:'870px'}} w='100%' bgImage={profPng} backgroundSize={'contain'}  bgRepeat="no-repeat" mt={{base:'0', md:'30%'}}>
                    
                    </Flex>
                </Flex>
                <Flex direction='column' w={{base:'100%', md:'55%'}} gap={3}>
                    <Flex direction='column' gap={2}>
                        <Text fontSize={{base:'14px', md:'16px'}} fontWeight='600' color='green'>Why we’re different</Text>
                        <Text fontSize={{base:'24px', md:'36px'}} fontWeight='600' color='darkgreen' w='100%'>There's nothing more powerful than the unified voice of the Nigerian people</Text>
                        <Text fontSize={{base:'18px', md:'20px'}} fontWeight='400' color='darkgreen' w={{base:"100%", md:'95%'}}>And there are several things we agree on Osinbajo:</Text>
                        <Text fontSize={{base:'18px', md:'20px'}} fontWeight='400' color='darkgreen' w={{base:"100%", md:'95%'}}><Text as='span' fontWeight='700'>- His sheer competence and capacity; </Text> deeply educated, deeply informed, a thinker, a doer, full of energy, works round the clock. You can never mistake him for a joker.</Text>
                        <Text fontSize={{base:'18px', md:'20px'}} fontWeight='400' color='darkgreen' w={{base:"100%", md:'95%'}}><Text as='span' fontWeight='700'>-	His unquestionable integrity; </Text> he has been tested publicly for decades, hit hard daily from every side. He has never been found wanting. Not once.</Text>
                        <Text fontSize={{base:'18px', md:'20px'}} fontWeight='400' color='darkgreen' w={{base:"100%", md:'95%'}}><Text as='span' fontWeight='700'>-	His depth of experience; </Text>he knows exactly where things are broken, and what to do form Day-1. Remember when acted as President? The courage, the fearlessness, the speed, the results? There is much more where that came from. We want that, now.</Text>
                        <Text fontSize={{base:'18px', md:'20px'}} fontWeight='400' color='darkgreen' w={{base:"100%", md:'95%'}}><Text as='span' fontWeight='700'>-	His passion for everyday Nigerians; </Text>his several programmes for entrepreneurs and market women, his obsession with young people and their prospects, his insistence on innovation as the future. He cares, deeply. He looks you in the eye and he means it..</Text>
                    </Flex>
                </Flex>
        </Flex>
    )
}

export default AboutUs
