import React from 'react'
import {Flex, Image, Text, Spacer, Box} from '@chakra-ui/react'
import profPng from '../assets/images/speech.png'

const AboutUs = () => {
    return (
        <Flex gap={12}>
             <Flex w='45%'>
                    <Flex h='870px' w='100%' bgImage={profPng} backgroundSize={'contain'}  bgRepeat="no-repeat" mt='30%'>
                    
                    </Flex>
                </Flex>
                <Flex direction='column' w='55%' gap={2}>
                    <Flex direction='column' gap={2}>
                        <Text fontSize='16px' fontWeight='600' color='green'>Why we’re different</Text>
                        <Text fontSize='36px' fontWeight='600' color='darkgreen' w='100%'>There's nothing more powerful than the unified voice of the Nigerian people</Text>
                        <Text fontSize='20px' fontWeight='400' color='darkgreen' w='95%'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper mattis lorem non.</Text>
                        <Text fontSize='18px' fontWeight='400' color='darkgreen' w='95%'>Eget quis mi enim, leo lacinia pharetra, semper. Eget in volutpat mollis at volutpat lectus velit, sed auctor. Porttitor fames arcu quis fusce augue enim. Quis at habitant diam at. Suscipit tristique risus, at donec. In turpis vel et quam imperdiet. Ipsum molestie aliquet sodales id est ac volutpat.</Text>
                    </Flex>
                    <Flex direction='column' gap={2} py={4}>
                        <Text fontSize='30px' fontWeight='600' color='darkgreen' >Why we’re better</Text>
                        <Text fontSize='18px' fontWeight='400' color='darkgreen' w='95%' >Mi tincidunt elit, id quisque ligula ac diam, amet. Vel etiam suspendisse morbi eleifend faucibus eget vestibulum felis. Dictum quis montes, sit sit. Tellus aliquam enim urna, etiam. Mauris posuere vulputate arcu amet, vitae nisi, tellus tincidunt. At feugiat sapien varius id.</Text>
                        <Text fontSize='18px' fontWeight='400' color='darkgreen' w='95%'>Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus. Quis velit eget ut tortor tellus. Sed vel, congue felis elit erat nam nibh orci.</Text>
                    </Flex>
                </Flex>
        </Flex>
    )
}

export default AboutUs
