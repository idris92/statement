import React from 'react'
import {Flex, Text, Box} from '@chakra-ui/react'
import ButtonComponent from './Button'

const NavBody = () => {
    return (
       <Flex direction='column' w='60%' px='150px' py='38px'  gap={8}>
            <Text fontSize='60px' fontWeight='700' color='white' lineHeight='1.3'>An Everyday Man Working For Everyday People.</Text>
            <Text fontSize='20px' fontWeight='400' color='white' lineHeight='1.5'>Lorem ipsum dolor sit amet elit, sed do tempor incididunt ut dolore magna aliqua. Lorem ipsum dolor sit amet.</Text>
            <Box>
                <ButtonComponent buttonName='DONATE'/>
            </Box>
       </Flex>
    )
}

export default NavBody
