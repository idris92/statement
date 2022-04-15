import React from 'react'
import {Flex, Box, Button, Text, Image, Spacer} from '@chakra-ui/react'
import logoPng from '../assets/images/logo.png'

const Navbar = () => {
    return (
       <Flex px='150px' py='38px' h='20%' w='100%'>
            <Box>
                <Image src={logoPng} alt='logo'/>
            </Box>
            <Spacer/>
            <Flex color='white' align='center' fontSize='16px' fontWeight='500' gap={12}>
                <Flex gap={8}>
                    <Text>Home</Text>
                    <Text>About</Text>
                    <Text>Contact</Text>
                </Flex>
                <Button variant='action' p={6}>DONATE</Button>
            </Flex>
       </Flex>
    )
}

export default Navbar
