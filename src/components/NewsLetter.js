import React from 'react'
import {Flex, Image, Text, Spacer, Box, Select, SimpleGrid, Button, Input} from '@chakra-ui/react'

const NewsLetter = () => {
    return (
         <Flex  direction='column' align='center' textAlign='center' gap={3} w='100%'>
                <Text  fontSize='36px' fontWeight='600' color='darkgreen'>Sign up for our newsletter</Text>
                <Text  fontSize='20px' fontWeight='400' color='darkgreen'>Be the first to know about releases and industry news and insights.</Text>
                <Flex w='50%' gap={3} py={4}>
                   <Input placeholder='Enter your email' color='darkgreen' fontSize='16px' fontWeight='400' bg='white' p={6}/>
                    <Button variant='action' fontSize='18px' fontWeight='500' py={6} px={12}>SUBSCRIBE</Button>
               
                </Flex>
            </Flex>
    )
}

export default NewsLetter
